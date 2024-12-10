import { forwardRef } from 'react';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TypographyTitleStyles } from './styles';
import { RdTypographyTitleProps } from './types';

export const TypographyTitle = forwardRef(
    ({ ...antdProps }: RdTypographyTitleProps, ref: RdTypographyTitleProps['ref']) => {
        return (
            <ConfigProviderDesign>
                <TypographyTitleStyles ref={ref} {...antdProps} />
            </ConfigProviderDesign>
        );
    }
);
