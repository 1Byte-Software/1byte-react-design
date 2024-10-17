import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { IH1Props } from '../TextError/types';
import { H1Wrapper } from './styles';

export const H1 = (props: IH1Props) => {
    const { children } = props;
    return (
        <ConfigProviderDesign>
            <H1Wrapper>{children}</H1Wrapper>
        </ConfigProviderDesign>
    );
};
