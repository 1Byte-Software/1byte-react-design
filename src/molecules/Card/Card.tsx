import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { CardStyles } from './styles';
import { RdCardProps } from './types';

export const Card = ({ ...antdProps }: RdCardProps) => {
    return (
        <ConfigProviderDesign>
            <CardStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
