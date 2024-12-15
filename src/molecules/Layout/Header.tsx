import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { HeaderStyles } from './styles';
import { RdHeaderProps } from './types';

export const Header = ({ ...antdProps }: RdHeaderProps) => {
    return (
        <ConfigProviderDesign>
            <HeaderStyles className='rd-header' {...antdProps} />
        </ConfigProviderDesign>
    );
};
