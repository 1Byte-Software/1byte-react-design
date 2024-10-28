import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { ContentStyles } from './styles';
import { ILayoutProps } from './types';

export const Content = ({ ...antdProps }: ILayoutProps) => {
    return (
        <ConfigProviderDesign>
            <ContentStyles className='rd-content' {...antdProps} />
        </ConfigProviderDesign>
    );
};
