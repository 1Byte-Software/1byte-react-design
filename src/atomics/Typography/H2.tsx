import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { H2Wrapper } from './styles';
import { IH2Props } from './types';

export const H2 = (props: IH2Props) => {
    const { children } = props;
    return (
        <ConfigProviderDesign>
            <H2Wrapper>{children}</H2Wrapper>
        </ConfigProviderDesign>
    );
};
