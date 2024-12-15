import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TextAreaStyled } from './styles';
import { RdTextAreaProps } from './types';

export const TextArea = ({ ...antdProps }: RdTextAreaProps) => {
    return (
        <ConfigProviderDesign>
            <TextAreaStyled {...antdProps} />
        </ConfigProviderDesign>
    );
};
