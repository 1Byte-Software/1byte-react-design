import { forwardRef } from 'react';
import { TypographyParagraphStyles } from './styles';
import { RdTypographyParagraphProps } from './types';

export const TypographyParagraph = forwardRef(
    ({ ...antdProps }: RdTypographyParagraphProps, ref: RdTypographyParagraphProps['ref']) => {
        return <TypographyParagraphStyles ref={ref} {...antdProps} />;
    }
);
