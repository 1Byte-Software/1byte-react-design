import { AppProps } from 'antd';
import { useAppProps } from 'antd/es/app/context';
interface IAppProps extends AppProps {
}
declare const App: {
    (props: IAppProps): import("react/jsx-runtime").JSX.Element;
    useApp: () => useAppProps;
};
export declare const useNotification: () => import("antd/es/notification/interface").NotificationInstance;
export declare const useMessage: () => import("antd/es/message/interface").MessageInstance;
export declare const useModal: () => import("antd/es/modal/useModal").HookAPI;
export default App;
