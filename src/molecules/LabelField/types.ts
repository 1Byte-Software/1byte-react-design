import { TAxis } from '../../models';

export interface ILabelFieldProps {
    /** Text label. */
    label?: string;
    /** Label axis used to determine whether the label is displayed vertically or horizontally. */
    labelAxis?: TAxis;
    /** Description for the label. */
    labelDescription?: string;
    /** Indicates if a colon should be appended to the label. */
    isColon?: boolean;
    /** Indicates if the field is required. */
    required?: boolean;
    /** Specifies the width of the field. */
    widthControl?: string | number;
    /** Specifies the id of the element the label is bound to. */
    htmlFor?: string;
}

export interface ILabelFieldWrapperProps {
    /** The properties for the label field. If set to false, the label will not be rendered. */
    label: ILabelFieldProps | false;
}
