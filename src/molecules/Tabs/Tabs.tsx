import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TabsStyles } from './styles';
import { ITabsProps } from './types';

export const Tabs = ({ ...antdProps }: ITabsProps) => {
    return (
        <ConfigProviderDesign>
            <TabsStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
