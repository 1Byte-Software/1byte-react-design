import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { DividerStyles } from './styles';
import { RdDividerProps } from './types';

export const Divider = ({ ...antdProps }: RdDividerProps) => {
    return (
        <ConfigProviderDesign>
            <DividerStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
