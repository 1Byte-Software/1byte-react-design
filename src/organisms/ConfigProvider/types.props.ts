import { ConfigProviderProps } from 'antd/es/config-provider';
import { RdPaginationConfig } from './configs/pagination';
import { RdTableConfig } from './configs/table';

//#region Define Ant Design types
type ConfigProviderPropsAntd = ConfigProviderProps;
//#endregion

//#region Define extended types
interface ConfigProviderPropsExtend {
    pagination?: RdPaginationConfig;
    table?: RdTableConfig;
}
//#endregion

//#region Export types
export type RdConfigProviderProps = Omit<ConfigProviderPropsAntd, 'pagination' | 'table'> &
    ConfigProviderPropsExtend;
//#endregion
