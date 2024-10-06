import { ConfigProviderDesign } from '@/ConfigProviderDesign';
import { H4Wrapper } from './styles';
import { IBaseHProps } from './typography';

interface IH4Props extends IBaseHProps {}

export const H4 = (props: IH4Props) => {
    const { children } = props;
    return (
        <ConfigProviderDesign>
            <H4Wrapper>{children}</H4Wrapper>
        </ConfigProviderDesign>
    );
};
