import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { IH4Props } from '../TextError/types';
import { H4Wrapper } from './styles';

export const H4 = (props: IH4Props) => {
    const { children } = props;
    return (
        <ConfigProviderDesign>
            <H4Wrapper>{children}</H4Wrapper>
        </ConfigProviderDesign>
    );
};
