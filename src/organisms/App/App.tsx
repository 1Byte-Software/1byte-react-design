import { App as AppAntd } from 'antd';
import { AppStyles } from './styles';
import { RdAppCompoundedComponent, RdAppProps } from './types';

export const AppInternal = ({ ...antdProps }: RdAppProps) => {
    return <AppStyles {...antdProps} />;
};

export const App = AppInternal as RdAppCompoundedComponent;

App.useApp = AppAntd.useApp;
