import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { H6Wrapper } from './styles';
import { IBaseHProps } from './typography';

interface IH6Props extends IBaseHProps {}

export const H6 = (props: IH6Props) => {
    const { children } = props;
    return (
        <ConfigProviderDesign>
            <H6Wrapper>{children}</H6Wrapper>
        </ConfigProviderDesign>
    );
};
