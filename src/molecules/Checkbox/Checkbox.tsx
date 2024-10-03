import { CheckboxProps } from 'antd';
import { ILabelField, LabelField } from '../LabelField';
import { CheckboxStyle, CheckboxWrapper } from './styles';
import { ConfigProviderDesign } from '@/ContextProvider';

export interface ICheckboxProps extends CheckboxProps, ILabelField {}

export const Checkbox = ({
    // ILabelField props
    required,
    label,
    labelAxis = 'vertical',
    isColon = true,
    labelDescription,
    widthField,

    ...antdProps
}: ICheckboxProps) => {
    return (
        <ConfigProviderDesign>
            <CheckboxWrapper>
                <LabelField
                    label={label}
                    labelAxis={labelAxis}
                    required={required}
                    isColon={isColon}
                    labelDescription={labelDescription}
                    widthField={widthField}
                >
                    <CheckboxStyle {...antdProps}>{label}</CheckboxStyle>
                </LabelField>
            </CheckboxWrapper>
        </ConfigProviderDesign>
    );
};
