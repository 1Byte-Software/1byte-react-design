import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { BackTopStyles } from './styles';
import { IBackTopProps } from './types';

export const BackTop = ({ ...antdProps }: IBackTopProps) => {
    return (
        <ConfigProviderDesign>
            <BackTopStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};

