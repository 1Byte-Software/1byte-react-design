import { forwardRef } from 'react';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TypographyLinkStyles } from './styles';
import { RdTypographyLinkProps } from './types';

export const TypographyLink = forwardRef(
    ({ ...antdProps }: RdTypographyLinkProps, ref: RdTypographyLinkProps['ref']) => {
        return (
            <ConfigProviderDesign>
                <TypographyLinkStyles ref={ref} {...antdProps} />
            </ConfigProviderDesign>
        );
    }
);
