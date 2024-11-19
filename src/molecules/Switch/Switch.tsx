import { Switch as AntdSwitch, SwitchProps } from 'antd';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { LabelField } from '../LabelField';
import { SwitchWrapper } from './styles';
import { RdSwitchProps } from './types';

export const Switch = ({
    label: labelFieldProps,

    responseType = 'boolean',

    ...antdProps
}: RdSwitchProps) => {
    return (
        <ConfigProviderDesign>
            <SwitchWrapper>
                <ConditionalWrapper
                    condition={Boolean(labelFieldProps)}
                    wrapper={LabelField}
                    wrapperProps={labelFieldProps}
                >
                    <AntdSwitch {...(antdProps as SwitchProps)} />
                </ConditionalWrapper>
            </SwitchWrapper>
        </ConfigProviderDesign>
    );
};
