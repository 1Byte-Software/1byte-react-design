import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TextWrapper } from './styles';
import { RdTextProps } from './types';

export const Text = (props: RdTextProps) => {
    const { children } = props;
    return (
        <ConfigProviderDesign>
            <TextWrapper>{children}</TextWrapper>
        </ConfigProviderDesign>
    );
};
