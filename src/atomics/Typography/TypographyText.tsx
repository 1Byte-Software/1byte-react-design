import { forwardRef, useMemo } from 'react';
import { Skeleton } from '../../molecules';
import { TypographyTextStyles } from './styles';
import { RdTypographyTextProps } from './types';
import { detectHeightBySize } from './TypographyText.helper';

export const TypographyText = forwardRef(
    (props: RdTypographyTextProps, ref: RdTypographyTextProps['ref']) => {
        const {
            size = 'normal',
            editable,
            autoFocus = false,
            loading = false,
            onChange,
            ...antdProps
        } = props;

        if (loading) {
            return (
                <Skeleton.Input
                    active
                    style={{
                        height: detectHeightBySize(size),
                    }}
                />
            );
        }

        const editableCustom = useMemo(() => {
            if (editable && typeof editable === 'object') {
                if (onChange) {
                    editable.onChange = onChange;
                }

                return editable;
            }

            return editable;
        }, [editable]);

        return (
            <TypographyTextStyles ref={ref} editable={editableCustom} size={size} {...antdProps} />
        );
    }
);
