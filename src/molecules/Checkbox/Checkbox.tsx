import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { LabelField } from '../LabelField';
import { CheckboxStyle, CheckboxWrapper } from './styles';
import { ICheckboxProps } from './types';

export const Checkbox = ({
    label: labelFieldProps,

    ...antdProps
}: ICheckboxProps) => {
    return (
        <ConfigProviderDesign>
            <CheckboxWrapper>
                <LabelField {...labelFieldProps}>
                    <CheckboxStyle {...antdProps} />
                </LabelField>
            </CheckboxWrapper>
        </ConfigProviderDesign>
    );
};
