import { forwardRef } from 'react';
import { Skeleton } from '../../molecules';
import { TypographyTitleStyles } from './styles';
import { RdTypographyTitleProps } from './types';
import { detectHeightByLevel } from './TypographyTitle.helper';

export const TypographyTitle = forwardRef(
    (props: RdTypographyTitleProps, ref: RdTypographyTitleProps['ref']) => {
        const { disableMargin, loading, ...antdProps } = props;

        if (loading) {
            return (
                <Skeleton.Input
                    active
                    style={{
                        height: detectHeightByLevel(props.level),
                    }}
                />
            );
        }

        return <TypographyTitleStyles disableMargin={disableMargin} ref={ref} {...antdProps} />;
    }
);
