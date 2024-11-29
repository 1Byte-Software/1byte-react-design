import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { SiderStyles } from './styles';
import { RdSiderProps } from './types';

export const Sider = ({ ...antdProps }: RdSiderProps) => {
    return (
        <ConfigProviderDesign>
            <SiderStyles className="rd-sider" {...antdProps} />
        </ConfigProviderDesign>
    );
};
