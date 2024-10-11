import { App as AppAntd, AppProps } from 'antd';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { useAppProps } from 'antd/es/app/context';

interface IAppProps extends AppProps {}

const App = (props: IAppProps) => {
    const { children, ...rest } = props;
    return (
        <ConfigProviderDesign>
            <AppAntd {...(rest as AppProps)}>{children}</AppAntd>
        </ConfigProviderDesign>
    );
};

export const useNotification = () => {
    const { notification } = AppAntd.useApp();
    return notification;
};

export const useMessage = () => {
    const { message } = AppAntd.useApp();
    return message;
};

export const useModal = () => {
    const { modal } = AppAntd.useApp();
    return modal;
};

App.useApp = AppAntd.useApp;

export default App;
