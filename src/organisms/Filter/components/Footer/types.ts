import { HTMLAttributes, ReactNode } from 'react';
import { RdSelectProps } from '../../../../molecules';

//#region Define extended types
export type RdFilterFooterPropsExtend<T extends {}> = {
    totalItems?: number;
    showTotalItemsCount?: number;
    isLoading?: boolean;

    filterValue?: T;
    fields?: IFieldItem<T>[];
    onChangeFilterValue?: (filterValue: T) => void;
    localization?: FilterFooterLocalization;
};
//#endregion

export type RdFilterFooterProps<T extends {}> = HTMLAttributes<HTMLDivElement> &
    RdFilterFooterPropsExtend<T>;

export type RdFilterFooterComponent = <T extends {}>(
    props: RdFilterFooterProps<T>
) => React.ReactNode;

interface IFieldItem<T extends {}> extends RdSelectProps {
    name: keyof T;
    label: ReactNode;
    render?: () => ReactNode;
}

export interface FilterFooterLocalization {
    showing?: string;

    showing_tooltip?: string;
}
