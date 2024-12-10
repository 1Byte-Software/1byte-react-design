import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { ListItemMetaStyles } from './styles';
import { RdListItemMetaProps } from './types';

export const ListItemMeta = ({ ...antdProps }: RdListItemMetaProps) => {
    return (
        <ConfigProviderDesign>
            <ListItemMetaStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
