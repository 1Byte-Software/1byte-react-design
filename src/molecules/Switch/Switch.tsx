import { SwitchProps } from 'antd';
import { forwardRef } from 'react';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { SwitchStyled } from './styles';
import { RdSwitchProps } from './types';

export const Switch = forwardRef((props: RdSwitchProps, ref: RdSwitchProps['ref']) => {
    const { ...antdProps } = props;
    return (
        <ConfigProviderDesign>
            <SwitchStyled ref={ref} {...(antdProps as SwitchProps)} />
        </ConfigProviderDesign>
    );
});
