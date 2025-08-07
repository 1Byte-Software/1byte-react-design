import { RdContentProps, RdLayoutContentRef } from '../../../..';

//#region Define extended types
export type SplitScreenTemplateSplitPanePropsExtend = {
    render?: (props: Omit<RdSplitScreenTemplateSplitPaneProps, 'render'>) => React.ReactNode;
};
//#endregion

export type RdSplitScreenTemplateSplitPaneProps = RdContentProps &
    SplitScreenTemplateSplitPanePropsExtend;
export type RdSplitScreenTemplateSplitPaneRef = RdLayoutContentRef & {};

export type RdSplitScreenTemplateSplitPaneComponent = React.ForwardRefExoticComponent<
    RdSplitScreenTemplateSplitPaneProps & RdSplitScreenTemplateSplitPaneRef
>;
