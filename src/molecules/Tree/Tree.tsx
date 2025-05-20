import { BasicDataNode, DataNode } from 'antd/es/tree';
import { useMemo } from 'react';
import { DirectoryTree } from './DirectoryTree';
import { TreeStylesFunc } from './styles';
import { TreeNode } from './TreeNode';
import { RdTreeCompoundedComponent, RdTreeProps } from './types';

export const TreeInternal = <T extends BasicDataNode | DataNode = DataNode>({
    ...antdProps
}: RdTreeProps) => {
    const TreeStyles = useMemo(() => TreeStylesFunc<T>() as typeof TreeInternal, []);

    return <TreeStyles {...antdProps} />;
};

export const Tree = TreeInternal as RdTreeCompoundedComponent;

Tree.TreeNode = TreeNode;
Tree.DirectoryTree = DirectoryTree;
