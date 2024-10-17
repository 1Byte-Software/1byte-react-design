import { Switch as AntdSwitch, SwitchProps } from 'antd';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { LabelField } from '../LabelField';
import { SwitchWrapper } from './styles';
import { ISwitchProps } from './types';

export const Switch = ({
    label: labelFieldProps,

    responseType = 'boolean',

    ...antdProps
}: ISwitchProps) => {
    return (
        <ConfigProviderDesign>
            <SwitchWrapper>
                <LabelField {...labelFieldProps}>
                    <AntdSwitch {...(antdProps as SwitchProps)} />
                </LabelField>
            </SwitchWrapper>
        </ConfigProviderDesign>
    );
};
