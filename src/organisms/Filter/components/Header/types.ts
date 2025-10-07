import { HTMLAttributes } from 'react';

//#region Define extended types
export type RdFilterHeaderPropsExtend = {
    defaultKeywords?: string;
    onChangeKeywords?: (keywords: string) => void;
    localization?: FilterHeaderLocalization;
};
//#endregion

export type RdFilterHeaderProps = HTMLAttributes<HTMLDivElement> & RdFilterHeaderPropsExtend;

export type RdFilterHeaderComponent = React.FC<RdFilterHeaderProps>;

export interface FilterHeaderLocalization {
    search_placeholder?: string;
}
