import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { CollapseStyles } from './styles';
import { RdCollapseProps } from './types';

export const Collapse = ({ ...antdProps }: RdCollapseProps) => {
    return (
        <ConfigProviderDesign>
            <CollapseStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
