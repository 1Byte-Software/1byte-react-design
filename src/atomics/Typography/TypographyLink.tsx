import { forwardRef } from 'react';
import { TypographyLinkStyles } from './styles';
import { RdTypographyLinkProps } from './types';
import { Skeleton } from '../../molecules';

export const TypographyLink = forwardRef(
    (props: RdTypographyLinkProps, ref: RdTypographyLinkProps['ref']) => {
        const { loading, ...antdProps } = props;

        if (loading) return <Skeleton active />;

        return <TypographyLinkStyles ref={ref} {...antdProps} />;
    }
);
