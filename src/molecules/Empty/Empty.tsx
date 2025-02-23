import { useContext } from 'react';
import { ConfigProvider } from '../../organisms';
import { EmptyStyles } from './styles';
import { RdEmptyComponent } from './types';

export const Empty: RdEmptyComponent = props => {
    const { renderEmpty } = useContext(ConfigProvider.ConfigContext);

    if(renderEmpty) {
        return renderEmpty();
    }

    return <EmptyStyles {...props} />;
};
