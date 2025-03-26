import { forwardRef } from 'react';
import { CenteredTemplateContent, CenteredTemplateStyles } from './styles';
import { RdCenteredTemplateComponent } from './types';

export const CenteredTemplate: RdCenteredTemplateComponent = forwardRef((props, ref) => {
    const { children, maxWidth = 450, ...antdProps } = props;

    return (
        <CenteredTemplateStyles ref={ref} {...antdProps}>
            <CenteredTemplateContent maxWidth={maxWidth}>{children}</CenteredTemplateContent>
        </CenteredTemplateStyles>
    );
});
