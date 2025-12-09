import { AppStyles } from './styles';
import { RdAppCompoundedComponent, RdAppProps } from './types';
import { rdUseApp } from './useApp';

export const AppInternal = ({ ...antdProps }: RdAppProps) => {
    return <AppStyles {...antdProps} />;
};

export const App = AppInternal as RdAppCompoundedComponent;

App.useApp = rdUseApp;
