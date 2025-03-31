import { RdLayoutProps, RdLayoutRef } from '../../molecules';


//#region Define extended types
type CenteredTemplatePropsExtend = {
    maxWidth?: number;
};

type CenteredTemplateRefExtend = {};
//#endregion

//#region Export types
export type RdCenteredTemplateProps = RdLayoutProps & CenteredTemplatePropsExtend;

export type RdCenteredTemplateRef = RdLayoutRef & CenteredTemplateRefExtend;
//#endregion

//#region Define component types
export type RdCenteredTemplateComponent = React.ForwardRefExoticComponent<
    RdCenteredTemplateProps & RdCenteredTemplateRef
>;
//#endregion
