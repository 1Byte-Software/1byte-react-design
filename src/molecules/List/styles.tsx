import styled from '@emotion/styled';
import { List } from 'antd';

// export const ListStyles = styled(List)``;

export const ListStyledFunc = <T extends any>() => styled(List<T>)``;

export const ListItemStyles = styled(List.Item)``;

export const ListItemMetaStyles = styled(List.Item.Meta)``;
