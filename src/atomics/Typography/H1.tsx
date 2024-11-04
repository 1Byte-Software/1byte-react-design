import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { H1Wrapper } from './styles';
import { IH1Props } from './types';

export const H1 = (props: IH1Props) => {
    const { children } = props;
    return (
        <ConfigProviderDesign>
            <H1Wrapper>{children}</H1Wrapper>
        </ConfigProviderDesign>
    );
};
