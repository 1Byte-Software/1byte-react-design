import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { H1Wrapper } from './styles';
import { IBaseHProps } from './typography';

interface IH1Props extends IBaseHProps {}

export const H1 = (props: IH1Props) => {
    const { children } = props;
    return (
        <ConfigProviderDesign>
            <H1Wrapper>{children}</H1Wrapper>
        </ConfigProviderDesign>
    );
};
