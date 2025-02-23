import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { AnyObject } from 'antd/es/_util/type';
import { RowSortable } from './sortable';
import { TableStyledFunc } from './styles';
import { RdTableProps } from './types';

export const Table = <RecordType extends AnyObject = AnyObject>(
    props: RdTableProps<RecordType>
) => {
    const { allowSort = false, onChangeSort, ...antdProps } = props;
    const TableStyled = TableStyledFunc<RecordType>();

    if (allowSort && props.rowKey) {
        const dataSource = antdProps.dataSource || [];

        const onDragEnd = ({ active, over }: DragEndEvent) => {
            if (active.id !== over?.id) {
                const activeIndex = dataSource.findIndex(record => record.id === active?.id);
                const overIndex = dataSource.findIndex(record => record.id === over?.id);

                const result = arrayMove([...dataSource], activeIndex, overIndex);

                onChangeSort && onChangeSort(result);
            }
        };

        return (
            <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
                <SortableContext
                    items={dataSource.map(i => i[props.rowKey as string])}
                    strategy={verticalListSortingStrategy}
                >
                    <TableStyled components={{ body: { row: RowSortable } }} {...antdProps} />
                </SortableContext>
            </DndContext>
        );
    }

    return <TableStyled {...antdProps} />;
};
