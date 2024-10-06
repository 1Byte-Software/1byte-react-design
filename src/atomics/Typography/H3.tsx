import { ConfigProviderDesign } from '@/ConfigProviderDesign';
import { H3Wrapper } from './styles';
import { IBaseHProps } from './typography';

interface IH3Props extends IBaseHProps {}

export const H3 = (props: IH3Props) => {
    const { children } = props;
    return (
        <ConfigProviderDesign>
            <H3Wrapper>{children}</H3Wrapper>
        </ConfigProviderDesign>
    );
};
