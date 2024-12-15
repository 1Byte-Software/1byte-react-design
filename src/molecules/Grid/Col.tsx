import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { ColStyles } from './styles';
import { RdColProps } from './types';

export const Col = ({ ...antdProps }: RdColProps) => {
    return (
        <ConfigProviderDesign>
            <ColStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
