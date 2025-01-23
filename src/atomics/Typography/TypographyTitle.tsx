import { forwardRef } from 'react';
import { TypographyTitleStyles } from './styles';
import { RdTypographyTitleProps } from './types';

export const TypographyTitle = forwardRef(
    ({ disableMargin, ...antdProps }: RdTypographyTitleProps, ref: RdTypographyTitleProps['ref']) => {
        return <TypographyTitleStyles disableMargin={disableMargin} ref={ref} {...antdProps} />;
    }
);
