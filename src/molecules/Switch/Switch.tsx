import { SwitchProps } from 'antd';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { RdSwitchProps } from './types';
import { SwitchStyled } from './styles';

export const Switch = ({ ...antdProps }: RdSwitchProps) => {
    return (
        <ConfigProviderDesign>
            <SwitchStyled {...(antdProps as SwitchProps)} />
        </ConfigProviderDesign>
    );
};
