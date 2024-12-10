import { forwardRef } from 'react';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TypographyParagraphStyles } from './styles';
import { RdTypographyParagraphProps } from './types';

export const TypographyParagraph = forwardRef(
    ({ ...antdProps }: RdTypographyParagraphProps, ref: RdTypographyParagraphProps['ref']) => {
        return (
            <ConfigProviderDesign>
                <TypographyParagraphStyles ref={ref} {...antdProps} />
            </ConfigProviderDesign>
        );
    }
);
