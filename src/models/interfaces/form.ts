import { Control } from "react-hook-form";

export interface IControlField {
    /* Name to register field in react-hook-form */
    name: string;
    /* Control of react-hook-form */
    control: Control<any>; // eslint-disable-line
}
