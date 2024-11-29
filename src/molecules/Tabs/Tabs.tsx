import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TabsStyles } from './styles';
import { RdTabsProps } from './types';

export const Tabs = ({ ...antdProps }: RdTabsProps) => {
    return (
        <ConfigProviderDesign>
            <TabsStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
