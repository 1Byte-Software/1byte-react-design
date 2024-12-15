import { forwardRef } from 'react';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { CheckboxGroupStyles } from './styles';
import { RdCheckboxGroupProps } from './types';

export const CheckboxGroup = forwardRef(
    (props: RdCheckboxGroupProps, ref: RdCheckboxGroupProps['ref']) => {
        const { ...antdProps } = props;

        return (
            <ConfigProviderDesign>
                <CheckboxGroupStyles ref={ref} {...antdProps} />
            </ConfigProviderDesign>
        );
    }
);
