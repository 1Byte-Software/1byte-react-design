import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { ColStyles } from './styles';
import { IColProps } from './types';

export const Col = ({ ...antdProps }: IColProps) => {
    return (
        <ConfigProviderDesign>
            <ColStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
