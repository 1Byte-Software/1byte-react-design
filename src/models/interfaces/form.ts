import { Control } from 'react-hook-form';

export interface IControlField {
    /* Control of react-hook-form */
    control: Control<any>; // eslint-disable-line
}

export interface IRegistryControlField extends IControlField {
    /* Name to register field in react-hook-form */
    name: string;
}

export interface IRegistryRangePickerControlField extends IControlField {
    /* Names to register dateFrom, dateTo in react-hook-form */
    names: [string, string];
}
