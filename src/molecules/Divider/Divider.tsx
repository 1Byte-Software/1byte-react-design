import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { DividerStyles } from './styles';
import { IDividerProps } from './types';

export const Divider = ({ ...antdProps }: IDividerProps) => {
    return (
        <ConfigProviderDesign>
            <DividerStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
