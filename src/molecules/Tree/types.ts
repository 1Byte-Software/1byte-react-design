import { GetProps, Tree, TreeDataNode as TreeDataNodeAntd } from 'antd';
import { ComponentToken as TreeComponentTokenAntd } from 'antd/es/card/style';
import { BasicDataNode, DataNode } from 'antd/es/tree';
import type RcTree from 'rc-tree';
import { TreeNode } from 'rc-tree';
import { DirectoryTree } from './DirectoryTree';
import { TreeInternal } from './Tree';

//#region Define Ant Design types
type TreePropsAntd<T extends BasicDataNode | DataNode = DataNode> = GetProps<typeof Tree<T>>;
type TreeNodePropsAntd = GetProps<typeof Tree.TreeNode>;
type DirectoryTreePropsAntd<T extends BasicDataNode | DataNode = DataNode> = GetProps<
    typeof Tree.DirectoryTree<T>
>;
//#endregion

//#region Define extended component tokens
type TreeComponentTokenExtend = {};
//#endregion

//#region Define extended types
type TreePropsExtend = {};

type TreeNodePropsExtend = {};
type DirectoryTreePropsExtend = {};
//#endregion

//#region Export types
export type RdTreeDataNode = TreeDataNodeAntd;

export type RdTreeProps<T extends BasicDataNode | DataNode = DataNode> = TreePropsAntd<T> &
    TreePropsExtend;
export type RdTreeNodeProps = TreeNodePropsAntd & TreeNodePropsExtend;
export type RdDirectoryTreeProps<T extends BasicDataNode | DataNode = DataNode> =
    DirectoryTreePropsAntd<T> & DirectoryTreePropsExtend;

export type RdTreeComponentToken = TreeComponentTokenAntd & TreeComponentTokenExtend;
//#endregion

//#region Define component types
export type RdTreeInternalComponent = <T extends BasicDataNode | DataNode = DataNode>(
    props: React.PropsWithChildren<RdTreeProps<T>> & React.RefAttributes<RcTree>
) => React.ReactElement;
export type RdTreeNodeComponent = React.FC<Readonly<RdTreeNodeProps>>;
export type RdDirectoryTreeComponent = (<T extends BasicDataNode | DataNode = DataNode>(
    props: React.PropsWithChildren<RdDirectoryTreeProps<T>> & React.RefAttributes<RcTree>
) => React.ReactElement) &
    Pick<React.FC, 'displayName'>;

export type RdTreeCompoundedComponent = typeof TreeInternal & {
    TreeNode: typeof TreeNode;
    DirectoryTree: typeof DirectoryTree;
};
//#endregion
