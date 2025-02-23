import { HolderOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { Button } from '../../../Button';
import { RowSortableContext } from '../RowSortable/constants';

export const DragHandle = () => {
    const { setActivatorNodeRef, listeners } = useContext(RowSortableContext);
    return (
        <Button
            type="text"
            size="small"
            icon={<HolderOutlined />}
            style={{ cursor: 'move' }}
            ref={setActivatorNodeRef}
            {...listeners}
        />
    );
};
