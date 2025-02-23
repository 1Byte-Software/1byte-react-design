import { forwardRef } from 'react';
import { TypographyLinkStyles } from './styles';
import { RdTypographyLinkProps } from './types';

export const TypographyLink = forwardRef(
    ({ ...antdProps }: RdTypographyLinkProps, ref: RdTypographyLinkProps['ref']) => {
        return <TypographyLinkStyles ref={ref} {...antdProps} />;
    }
);
