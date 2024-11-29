import { Control } from 'react-hook-form';

export interface RdControlField {
    /* Control of react-hook-form */
    control: Control<any>; // eslint-disable-line
}

export interface RdRegistryControlField extends RdControlField {
    /* Name to register field in react-hook-form */
    name: string;
}

export interface IRegistryRangePickerControlField extends RdControlField {
    /* Names to register dateFrom, dateTo in react-hook-form */
    names: [string, string];
}
