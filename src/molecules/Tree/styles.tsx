import styled from '@emotion/styled';
import { Tree } from 'antd';
import { BasicDataNode, DataNode } from 'antd/es/tree';
import { getExcludeForwardProps } from '../../utils/styles';
import { RdDirectoryTreeProps, RdTreeNodeProps, RdTreeProps } from './types';

export const TreeStylesFunc = <T extends BasicDataNode | DataNode = DataNode>() =>
    styled(Tree<T> as any, {
        shouldForwardProp: prop =>
            getExcludeForwardProps<RdTreeProps>([] as (keyof RdTreeProps)[], prop),
    })<RdTreeProps>``;

export const TreeNodeStyles = styled(Tree.TreeNode as any)<RdTreeNodeProps>``;

export const DirectoryTreeStylesFunc = <T extends BasicDataNode | DataNode = DataNode>() =>
    styled(Tree.DirectoryTree<T> as any)<RdDirectoryTreeProps>``;
