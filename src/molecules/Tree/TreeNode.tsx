import { TreeNodeStyles } from './styles';
import { RdTreeNodeComponent } from './types';

export const TreeNode: RdTreeNodeComponent = props => {
    return <TreeNodeStyles {...props} />;
};
