import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { InputGroupStyled } from './styles';
import { RdInputGroupProps } from './types';

export const InputGroup = ({ ...antdProps }: RdInputGroupProps) => {
    return (
        <ConfigProviderDesign>
            <InputGroupStyled {...antdProps} />
        </ConfigProviderDesign>
    );
};
