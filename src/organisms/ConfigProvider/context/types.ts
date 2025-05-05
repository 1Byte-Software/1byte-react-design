import { ConfigConsumerProps } from 'antd/es/config-provider';
import { RdPaginationConfig } from '../configs/pagination';
import { RdTableConfig } from '../configs/table';

//#region Define Ant Design types
type ConfigConsumerPropsAntd = ConfigConsumerProps;
//#endregion

//#region Define extended types
interface ConfigConsumerPropsExtend {
    pagination?: RdPaginationConfig;
    table?: RdTableConfig;
}
//#endregion

//#region Export types
export type RdConfigConsumerProps = Omit<ConfigConsumerPropsAntd, 'pagination' | 'table'> &
    ConfigConsumerPropsExtend;
//#endregion

export type RdConfigContext = React.Context<RdConfigConsumerProps>;
export type RdConfigConsumer = React.Consumer<RdConfigConsumerProps>;
