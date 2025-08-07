import { RdLayoutProps, RdLayoutRef } from '../../molecules';
import { RdSplitScreenTemplateSplitPaneProps } from './components/SplitPane/types';

//#region Define extended types
type SplitScreenTemplatePropsExtend = {
    maxWidth?: number;
    leftPanelProps?: RdSplitScreenTemplateSplitPaneProps | false;
    rightPanelProps?: RdSplitScreenTemplateSplitPaneProps | false;
};

type SplitScreenTemplateRefExtend = {};
//#endregion

//#region Export types
export type RdSplitScreenTemplateProps = RdLayoutProps & SplitScreenTemplatePropsExtend;

export type RdSplitScreenTemplateRef = RdLayoutRef & SplitScreenTemplateRefExtend;
//#endregion

//#region Define component types
export type RdSplitScreenTemplateComponent = React.ForwardRefExoticComponent<
    RdSplitScreenTemplateProps & RdSplitScreenTemplateRef
>;
//#endregion
