import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { H3Wrapper } from './styles';
import { IH3Props } from './types';

export const H3 = (props: IH3Props) => {
    const { children } = props;
    return (
        <ConfigProviderDesign>
            <H3Wrapper>{children}</H3Wrapper>
        </ConfigProviderDesign>
    );
};
