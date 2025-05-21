import { BasicDataNode, DataNode } from 'antd/es/tree';
import type RcTree from 'rc-tree';
import { useMemo } from 'react';
import { DirectoryTreeStylesFunc } from './styles';
import { RdDirectoryTreeComponent, RdDirectoryTreeProps } from './types';

export const DirectoryTree: RdDirectoryTreeComponent = <
    T extends BasicDataNode | DataNode = DataNode
>(
    props: React.PropsWithChildren<RdDirectoryTreeProps<T>> & React.RefAttributes<RcTree>
) => {
    const DirectoryTreeStyles = useMemo(
        () =>
            DirectoryTreeStylesFunc<T>() as (<T extends BasicDataNode | DataNode = DataNode>(
                props: React.PropsWithChildren<RdDirectoryTreeProps<T>> &
                    React.RefAttributes<RcTree>
            ) => React.ReactElement) &
                Pick<React.FC, 'displayName'>,
        []
    );

    return <DirectoryTreeStyles {...props} />;
};
