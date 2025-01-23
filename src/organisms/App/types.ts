import { App, GetProps } from 'antd';
import { ComponentToken as AppComponentTokenAntd } from 'antd/es/app/style';
import { AppInternal } from './App';

//#region Define Ant Design types
type AppProps = GetProps<typeof App>;
type useApp = (typeof App)['useApp'];
//#endregion

//#region Define extended component tokens
type AppComponentTokenExtend = {};
//#endregion

//#region Define extended types
type AppPropsExtend = {};
//#endregion

//#region Export types
export type RdAppProps = AppProps & AppPropsExtend;
export type RdAppComponentToken = AppComponentTokenAntd & AppComponentTokenExtend;
//#endregion

export type RdAppCompoundedComponent = typeof AppInternal & {
    useApp: useApp;
};
