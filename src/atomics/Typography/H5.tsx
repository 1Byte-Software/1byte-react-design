import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { H5Wrapper } from './styles';
import { IH5Props } from './types';

export const H5 = (props: IH5Props) => {
    const { children } = props;
    return (
        <ConfigProviderDesign>
            <H5Wrapper>{children}</H5Wrapper>
        </ConfigProviderDesign>
    );
};
