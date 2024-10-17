import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { IH3Props } from '../TextError/types';
import { H3Wrapper } from './styles';

export const H3 = (props: IH3Props) => {
    const { children } = props;
    return (
        <ConfigProviderDesign>
            <H3Wrapper>{children}</H3Wrapper>
        </ConfigProviderDesign>
    );
};
