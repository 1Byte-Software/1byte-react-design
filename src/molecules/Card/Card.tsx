import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { CardStyles } from './styles';
import { ICardProps } from './types';

export const Card = ({ ...antdProps }: ICardProps) => {
    return (
        <ConfigProviderDesign>
            <CardStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
