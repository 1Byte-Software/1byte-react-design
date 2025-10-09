import { forwardRef } from 'react';
import { Skeleton } from '../../molecules';
import { TypographyTextStyles } from './styles';
import { RdTypographyTextProps } from './types';
import { detectHeightBySize } from './TypographyText.helper';

export const TypographyText = forwardRef(
    (props: RdTypographyTextProps, ref: RdTypographyTextProps['ref']) => {
        const { size = 'normal', autoFocus = false, loading = false, ...antdProps } = props;

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

        return <TypographyTextStyles ref={ref} size={size} {...antdProps} />;
    }
);
