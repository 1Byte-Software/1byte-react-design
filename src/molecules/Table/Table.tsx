import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { AnyObject } from 'antd/es/_util/type';
import { useContext, useMemo } from 'react';
import { ConfigProvider } from '../../organisms';
import { RowSortable } from './sortable';
import { TableStyledFunc } from './styles';
import { RdTableProps } from './types';

export const Table = <RecordType extends AnyObject = AnyObject>(
    props: RdTableProps<RecordType>
) => {
    const { allowSort = false, pagination, onChangeSort, ...antdProps } = props;
    const { table: defaultTableProps } = useContext(ConfigProvider.ConfigContext);
    const { pagination: defaultPagination } = defaultTableProps || {};

    const paginationWithDefault = useMemo(() => {
        if (pagination === false) return false;

        return {
            ...defaultPagination,
            ...pagination,
        };
    }, [pagination, defaultPagination]);

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
                    <TableStyled
                        components={{ body: { row: RowSortable } }}
                        pagination={paginationWithDefault}
                        {...antdProps}
                    />
                </SortableContext>
            </DndContext>
        );
    }

    return <TableStyled pagination={paginationWithDefault} {...antdProps} />;
};
