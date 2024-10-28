import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { SiderStyles } from './styles';
import { ISiderProps } from './types';

export const Sider = ({ ...antdProps }: ISiderProps) => {
    return (
        <ConfigProviderDesign>
            <SiderStyles className="rd-sider" {...antdProps} />
        </ConfigProviderDesign>
    );
};
