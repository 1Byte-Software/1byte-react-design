import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { ContentStyles } from './styles';
import { RdContentProps } from './types';

export const Content = ({ ...antdProps }: RdContentProps) => {
    return (
        <ConfigProviderDesign>
            <ContentStyles className='rd-content' {...antdProps} />
        </ConfigProviderDesign>
    );
};
