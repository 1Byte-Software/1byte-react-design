import React, {
    ReactElement,
    ReactNode,
    useCallback,
    useEffect,
    useLayoutEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { Space } from '../Space';
import { TagGroupStyled } from './styles';
import { RdTagGroupProps, RdTagProps } from './types';
import { getAliasToken } from '../../utils';
import { Tag } from './Tag';
import { Tooltip } from '../Tooltip';

export const TagGroup: React.FC<RdTagGroupProps> = ({
    children,
    maxRows = 1,
    maxCount,
    overflowMode = 'tooltip',
}) => {
    const normalizedChildren = useMemo(
        () => React.Children.toArray(children),
        [children]
    ) as ReactElement<RdTagProps>[];
    const mainRef = useRef<HTMLDivElement>(null);
    const measureContainerRef = useRef<HTMLDivElement>(null);
    const [visibleCount, setVisibleCount] = useState(normalizedChildren.length); // Init full để tránh +total ban đầu
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMounted, setIsMounted] = useState(false); // Flag để check mount

    const fontSizeTag = getAliasToken('Tabs', 'fontSize') ?? 0;
    const lineHeightTag = getAliasToken('Tabs', 'lineHeight') ?? 0;
    const lineWidthTag = getAliasToken('Tabs', 'lineWidth') ?? 0;

    const controlHeight = fontSizeTag * lineHeightTag + lineWidthTag * 2; // Fallback cho height calc

    const calculateVisibleCount = useCallback(() => {
        if (!measureContainerRef.current || normalizedChildren.length === 0) {
            setVisibleCount(normalizedChildren.length);
            return;
        }

        const tags = Array.from(measureContainerRef.current.children) as HTMLElement[];
        const maxHeight = maxRows * controlHeight;

        // Tìm index đầu tiên của tag ở hàng sau maxHeight (dựa trên offsetTop)
        const lastIndex = tags.findIndex(el => {
            return el.offsetTop >= maxHeight;
        });

        let heightBasedVisible = lastIndex !== -1 ? lastIndex : normalizedChildren.length;

        // Áp dụng maxCount nếu có (giới hạn cứng số lượng tag, nếu nhỏ hơn heightBased thì dùng maxCount)
        const calculated = Math.min(heightBasedVisible, maxCount || Infinity);

        setVisibleCount(calculated);
        setIsExpanded(false);

        // Debug: Uncomment để check
        // console.log('Calc:', { maxHeight, lastIndex, heightBasedVisible, maxCount, calculated, total: normalizedChildren.length });
    }, [normalizedChildren.length, maxRows, maxCount, controlHeight]);

    // Effect trigger calc sau mount (khi refs ready)
    useEffect(() => {
        setIsMounted(true); // Set mounted sau mount
    }, []);

    // Initial sync và calc sau mount
    useLayoutEffect(() => {
        if (!isMounted || !mainRef.current || !measureContainerRef.current) return;

        const mainWidth = mainRef.current.clientWidth;
        if (mainWidth > 0) {
            measureContainerRef.current.style.width = `${mainWidth}px`;
            calculateVisibleCount();
        }
    }, [isMounted, calculateVisibleCount]);

    // ResizeObserver cho container width changes (bao gồm sau mount và resize)
    useLayoutEffect(() => {
        if (!mainRef.current) return;

        const resizeObserver = new ResizeObserver(() => {
            if (isMounted && measureContainerRef.current) {
                const mainWidth = mainRef.current?.clientWidth;
                if (mainWidth && mainWidth > 0) {
                    measureContainerRef.current.style.width = `${mainWidth}px`;
                    requestAnimationFrame(() => {
                        calculateVisibleCount();
                    });
                }
            }
        });
        resizeObserver.observe(mainRef.current);

        // Trigger ngay lần đầu sau observe (để catch mount)
        requestAnimationFrame(() => {
            if (isMounted && measureContainerRef.current) {
                const mainWidth = mainRef.current?.clientWidth;
                if (mainWidth && mainWidth > 0) {
                    measureContainerRef.current.style.width = `${mainWidth}px`;
                    calculateVisibleCount();
                }
            }
        });

        return () => resizeObserver.disconnect();
    }, [isMounted, calculateVisibleCount]);

    // Trigger calc khi children/props change (không sync width vì observer handle)
    useLayoutEffect(() => {
        if (isMounted) {
            requestAnimationFrame(() => {
                calculateVisibleCount();
            });
        }
    }, [normalizedChildren.length, maxRows, maxCount, isMounted]);

    const effectiveVisibleCount =
        overflowMode === 'expand' && isExpanded ? normalizedChildren.length : visibleCount;
    const visibleTags = normalizedChildren.slice(0, effectiveVisibleCount);
    const hiddenTags = normalizedChildren.slice(effectiveVisibleCount);

    const renderHiddenTags = (tags: ReactElement<RdTagProps>[]) => (
        <Space wrap>
            {tags.map((tag, idx) => {
                return (
                    <React.Fragment key={idx}>
                        {React.cloneElement(tag as React.ReactElement, tag?.props)}
                    </React.Fragment>
                );
            })}
        </Space>
    );

    const getOverflowElement = () => {
        if (hiddenTags.length === 0 || overflowMode === 'hidden') return null;

        return (
            <Tag
                style={{ cursor: 'pointer' }}
                onClick={overflowMode === 'expand' ? () => setIsExpanded(prev => !prev) : undefined}
            >
                {overflowMode === 'expand' && isExpanded
                    ? `-${hiddenTags.length}`
                    : `+${hiddenTags.length}`}
            </Tag>
        );
    };

    const overflowElement = getOverflowElement();

    let overflowContent: ReactNode = null;
    if (overflowMode === 'tooltip' && hiddenTags.length > 0) {
        overflowContent = (
            <Tooltip title={renderHiddenTags(hiddenTags)} color="#fff">
                {overflowElement}
            </Tooltip>
        );
    } else {
        overflowContent = overflowElement;
    }

    // Measure container: absolute hidden, render all tags với flex wrap giống main để measure offsetTop
    const measureContainerStyle: React.CSSProperties = {
        position: 'absolute',
        visibility: 'hidden',
        pointerEvents: 'none',
        top: 0,
        left: 0,
        width: 'auto', // Sẽ sync với main width qua effects
        padding: 0,
        margin: 0,
    };

    return (
        <>
            <TagGroupStyled ref={measureContainerRef} style={measureContainerStyle}>
                {normalizedChildren.map((child, idx) => (
                    <React.Fragment key={idx}>{child}</React.Fragment>
                ))}
            </TagGroupStyled>

            <TagGroupStyled ref={mainRef}>
                {visibleTags.map((child, idx) => (
                    <React.Fragment key={idx}>{child}</React.Fragment>
                ))}
                {overflowContent}
            </TagGroupStyled>
        </>
    );
};
