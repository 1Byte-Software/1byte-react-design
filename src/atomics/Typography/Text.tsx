import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TextWrapper } from './styles';
import { ITextProps } from './types';

export const Text = (props: ITextProps) => {
    const { children } = props;
    return (
        <ConfigProviderDesign>
            <TextWrapper>{children}</TextWrapper>
        </ConfigProviderDesign>
    );
};
