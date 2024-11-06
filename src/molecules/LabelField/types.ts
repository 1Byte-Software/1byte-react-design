import { TAxis } from '../../models';

export interface ILabelFieldProps {
    /**
     * @description Text label to be displayed.
     */
    text?: string;
    /**
     * @description Label axis used to determine whether the label is displayed vertically or horizontally.
     * @default 'vertical'
     */
    axis?: TAxis;
    /**
     * @description Description for the label.
     */
    description?: string;
    /**
     * @description Indicates if a colon should be appended to the label.
     * @default false
     */
    isColon?: boolean;
    /**
     * @description Indicates if the field is required.
     * @default false
     */
    required?: boolean;
    /**
     * @description Specifies the width of the field.
     */
    widthControl?: string | number;
    /**
     * @description Specifies the id of the element the label is bound to.
     */
    htmlFor?: string;
}

export interface ILabelFieldWrapperProps {
    /** The properties for the label field. If set to false, the label will not be rendered. */
    label?: ILabelFieldProps | false;
}
