import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { ListItem } from './ListItem';
import { ListStyles } from './styles';
import { ListCompoundedComponent, RdListProps } from './types';

export const List: ListCompoundedComponent = ({ ...antdProps }: RdListProps) => {
    return (
        <ConfigProviderDesign>
            <ListStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};

List.Item = ListItem;
