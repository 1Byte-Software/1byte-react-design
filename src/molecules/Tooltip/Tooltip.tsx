import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TooltipStyles } from './styles';
import { ITooltipProps } from './types';

export const Tooltip = ({ ...antdProps }: ITooltipProps) => {
    return (
        <ConfigProviderDesign>
            <TooltipStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
