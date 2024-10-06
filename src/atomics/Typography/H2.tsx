import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { H2Wrapper } from './styles';
import { IBaseHProps } from './typography';

interface IH2Props extends IBaseHProps {}

export const H2 = (props: IH2Props) => {
    const { children } = props;
    return (
        <ConfigProviderDesign>
            <H2Wrapper>{children}</H2Wrapper>
        </ConfigProviderDesign>
    );
};
