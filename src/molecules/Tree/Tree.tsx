import { BasicDataNode, DataNode } from 'antd/es/tree';
import type RcTree from 'rc-tree';
import { useMemo } from 'react';
import { DirectoryTree } from './DirectoryTree';
import { TreeStylesFunc } from './styles';
import { TreeNode } from './TreeNode';
import { RdTreeCompoundedComponent, RdTreeProps } from './types';

export const TreeInternal = <T extends BasicDataNode | DataNode = DataNode>({
    ...antdProps
}: RdTreeProps<T>) => {
    const TreeStyles = useMemo(
        () =>
            TreeStylesFunc<T>() as <T extends BasicDataNode | DataNode = DataNode>(
                props: React.PropsWithChildren<RdTreeProps<T>> & React.RefAttributes<RcTree>
            ) => React.ReactElement,
        []
    );

    return <TreeStyles<T> {...antdProps} />;
};

export const Tree = TreeInternal as RdTreeCompoundedComponent;

Tree.TreeNode = TreeNode;
Tree.DirectoryTree = DirectoryTree;
