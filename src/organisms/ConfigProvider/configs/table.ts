import { TableConfig } from 'antd/es/config-provider/context';
import { RdTableProps } from '../../../molecules';

//#region Define Ant Design types
type TableConfigAntd = TableConfig;
//#endregion

//#region Define extended types
interface TableConfigExtend extends Pick<RdTableProps, 'pagination'> {}
//#endregion

//#region Export types
export type RdTableConfig = TableConfigAntd & TableConfigExtend;
//#endregion
