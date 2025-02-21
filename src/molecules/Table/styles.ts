import styled from '@emotion/styled';
import { Table } from 'antd';
import { AnyObject } from 'antd/es/_util/type';

export const TableStyledFunc = <RecordType extends AnyObject = AnyObject>() =>
    styled(Table<RecordType>)``;
