import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { H4Wrapper } from './styles';
import { IH4Props } from './types';

export const H4 = (props: IH4Props) => {
    const { children } = props;
    return (
        <ConfigProviderDesign>
            <H4Wrapper>{children}</H4Wrapper>
        </ConfigProviderDesign>
    );
};
