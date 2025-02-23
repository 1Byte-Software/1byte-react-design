import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';
import { GetProps, Row } from 'antd';

export interface RdRowSortableContextProps {
    setActivatorNodeRef?: (element: HTMLElement | null) => void;
    listeners?: SyntheticListenerMap;
}
//#region Define Ant Design types
type RowPropsAntd = GetProps<typeof Row>;
//#endregion

//#region Define extended types
type RowSortablePropsExtend = {
    'data-row-key': string;
};
//#endregion

//#region Export types
export type RdRowSortableProps = RowPropsAntd & RowSortablePropsExtend;

//#endregion

//#region Define component types
export type RdRowSortableComponent = React.FC<
    RdRowSortableProps & React.HTMLAttributes<HTMLTableRowElement>
>;

//#endregion
