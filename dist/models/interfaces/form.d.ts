import { Control } from 'react-hook-form';
export interface IControlField {
    control: Control<any>;
}
export interface IRegistryControlField extends IControlField {
    name: string;
}
export interface IRegistryRangePickerControlField extends IControlField {
    names: [string, string];
}
