import styled from '@emotion/styled';
import { Tree } from 'antd';
import { getExcludeForwardProps } from '../../utils/styles';
import { RdDirectoryTreeProps, RdTreeNodeProps, RdTreeProps } from './types';
import { BasicDataNode, DataNode } from 'antd/es/tree';

export const TreeStylesFunc = <T extends BasicDataNode | DataNode = DataNode>() =>
    styled(Tree<T>, {
        shouldForwardProp: prop =>
            getExcludeForwardProps<RdTreeProps>([] as (keyof RdTreeProps)[], prop),
    })<RdTreeProps>``;

export const TreeNodeStyles = styled(Tree.TreeNode)<RdTreeNodeProps>``;

export const DirectoryTreeStylesFunc = <T extends BasicDataNode | DataNode = DataNode>() =>
    styled(Tree.DirectoryTree<T>)<RdDirectoryTreeProps>``;
