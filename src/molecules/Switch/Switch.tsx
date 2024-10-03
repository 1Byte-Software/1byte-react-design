import { Switch as AntdSwitch, SwitchProps } from 'antd';
import { ILabelField, LabelField } from '../LabelField';
import { SwitchWrapper } from './styles';
import { ConfigProviderDesign } from '@/ContextProvider';

export interface ISwitchProps extends SwitchProps, ILabelField {
    responseType?: 'number' | 'boolean';
}

export const Switch = ({
    // ILabelField props
    required,
    label,
    labelAxis = 'vertical',
    isColon = true,
    labelDescription,
    widthField,

    responseType = 'boolean',

    ...antdProps
}: ISwitchProps) => {
    return (
        <ConfigProviderDesign>
            <SwitchWrapper>
                <LabelField
                    label={label}
                    labelAxis={labelAxis}
                    required={required}
                    isColon={isColon}
                    labelDescription={labelDescription}
                    widthField={widthField}
                >
                    <AntdSwitch {...(antdProps as SwitchProps)} />
                </LabelField>
            </SwitchWrapper>
        </ConfigProviderDesign>
    );
};
