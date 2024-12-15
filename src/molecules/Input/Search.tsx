import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { InputSearchStyled } from './styles';
import { RdSearchProps } from './types';

export const Search = ({ ...antdProps }: RdSearchProps) => {
    return (
        <ConfigProviderDesign>
            <InputSearchStyled {...antdProps} />
        </ConfigProviderDesign>
    );
};
