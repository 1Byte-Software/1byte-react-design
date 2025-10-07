import {
    FilterFooterLocalization,
    RdFilterFooterComponent,
    RdFilterFooterProps,
} from './components/Footer/types';
import {
    FilterHeaderLocalization,
    RdFilterHeaderComponent,
    RdFilterHeaderProps,
} from './components/Header/types';

//#region Define extended component tokens
type FilterComponentTokenExtend = {};

//#endregion

//#region Define extended types

type FilterPropsExtend<T extends {} = any> = {
    headerProps?: RdFilterHeaderProps | false;
    footerProps?: Omit<RdFilterFooterProps<T>, 'filterValue' | 'onChangeFilterValue'>;

    localization?: FilterLocalization;
    value?: T;
    onChange?: (value: T) => void;
};

//#endregion

//#region Export types
export type RdFilterProps<T extends {} = any> = FilterPropsExtend<T>;

export type RdFilterComponentToken = FilterComponentTokenExtend;
//#endregion

//#region Define component types
export type RdFilterComponent = React.FC<RdFilterProps>;

export type RdFilterCompoundedComponent = RdFilterComponent & {
    Header: RdFilterHeaderComponent;
    Footer: RdFilterFooterComponent;
    // Body: RdFilterSiderComponent;
    // Content: RdLayoutContentComponent;
    // Sider: RdLayoutSiderComponent;
};

export interface FilterLocalization {
    header?: FilterHeaderLocalization;
    footer?: FilterFooterLocalization;
}

//#endregion
