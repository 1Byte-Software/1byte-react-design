import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { IH2Props } from '../TextError/types';
import { H2Wrapper } from './styles';

export const H2 = (props: IH2Props) => {
    const { children } = props;
    return (
        <ConfigProviderDesign>
            <H2Wrapper>{children}</H2Wrapper>
        </ConfigProviderDesign>
    );
};
