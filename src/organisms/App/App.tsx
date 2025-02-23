import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { AppStyles } from './styles';
import { RdAppCompoundedComponent, RdAppProps } from './types';
import { App as AppAntd } from 'antd';

export const AppInternal = ({ ...antdProps }: RdAppProps) => {
    return (
        <ConfigProviderDesign>
            <AppStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};

export const App = AppInternal as RdAppCompoundedComponent;

App.useApp = AppAntd.useApp;
