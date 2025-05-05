import { PaginationConfig } from 'antd/es/config-provider/context';
import { RdPaginationProps } from '../../../molecules';

//#region Define Ant Design types
type PaginationConfigAntd = PaginationConfig;
//#endregion

//#region Define extended types
interface PaginationConfigExtend extends Pick<RdPaginationProps, 'pageSizeOptions'> {}
//#endregion

//#region Export types
export type RdPaginationConfig = PaginationConfigAntd & PaginationConfigExtend;
//#endregion
