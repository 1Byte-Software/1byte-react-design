import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { IH5Props } from '../TextError/types';
import { H5Wrapper } from './styles';

export const H5 = (props: IH5Props) => {
    const { children } = props;
    return (
        <ConfigProviderDesign>
            <H5Wrapper>{children}</H5Wrapper>
        </ConfigProviderDesign>
    );
};
