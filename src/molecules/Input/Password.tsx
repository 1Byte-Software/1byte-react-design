import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { InputPasswordStyled } from './styles';
import { RdPasswordProps } from './types';

export const Password = ({ ...antdProps }: RdPasswordProps) => {
    return (
        <ConfigProviderDesign>
            <InputPasswordStyled {...antdProps} />
        </ConfigProviderDesign>
    );
};
