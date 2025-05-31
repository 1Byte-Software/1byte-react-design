import { TextAreaConfig } from 'antd/es/config-provider/context';
import { RdTextAreaProps } from '../../../molecules';

//#region Define Ant Design types
type TextAreaConfigAntd = TextAreaConfig;
//#endregion

//#region Define extended types
interface TextAreaConfigExtend extends Pick<RdTextAreaProps, 'autoSize'> {}
//#endregion

//#region Export types
export type RdTextAreaConfig = TextAreaConfigAntd & TextAreaConfigExtend;
//#endregion
