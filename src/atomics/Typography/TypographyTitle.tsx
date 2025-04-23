import { forwardRef } from 'react';
import { Skeleton } from '../../molecules';
import { TypographyTitleStyles } from './styles';
import { RdTypographyTitleProps } from './types';

export const TypographyTitle = forwardRef(
    (props: RdTypographyTitleProps, ref: RdTypographyTitleProps['ref']) => {
        const { disableMargin, loading, ...antdProps } = props;

        if (loading) return <Skeleton.Input active />;

        return <TypographyTitleStyles disableMargin={disableMargin} ref={ref} {...antdProps} />;
    }
);
