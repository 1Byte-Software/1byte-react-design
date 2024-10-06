import { ConfigProviderDesign } from '@/ConfigProviderDesign';
import { H5Wrapper } from './styles';
import { IBaseHProps } from './typography';

interface IH5Props extends IBaseHProps {}

export const H5 = (props: IH5Props) => {
    const { children } = props;
    return (
        <ConfigProviderDesign>
            <H5Wrapper>{children}</H5Wrapper>
        </ConfigProviderDesign>
    );
};
