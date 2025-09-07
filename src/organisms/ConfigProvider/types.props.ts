import { ConfigProviderProps } from 'antd/es/config-provider';
import { RdPaginationConfig } from './configs/pagination';
import { RdTableConfig } from './configs/table';
import { RdTextAreaConfig } from './configs/textArea';

//#region Define Ant Design types
type ConfigProviderPropsAntd = ConfigProviderProps;
//#endregion

//#region Define extended types
interface ConfigProviderPropsExtend {
    pagination?: RdPaginationConfig;
    table?: RdTableConfig;
    textArea?: RdTextAreaConfig;
}
//#endregion

//#region Export types
export type RdConfigProviderProps = Omit<
    ConfigProviderPropsAntd,
    'pagination' | 'table' | 'textArea'
> &
    ConfigProviderPropsExtend;
//#endregion
