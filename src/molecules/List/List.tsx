import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { ListItem } from './ListItem';
import { ListStyles } from './styles';
import { RdListProps } from './types';

export const List = ({ ...antdProps }: RdListProps) => {
    return (
        <ConfigProviderDesign>
            <ListStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};

List.Item = ListItem;
