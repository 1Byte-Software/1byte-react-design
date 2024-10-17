import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { IH6Props } from '../TextError/types';
import { H6Wrapper } from './styles';

export const H6 = (props: IH6Props) => {
    const { children } = props;
    return (
        <ConfigProviderDesign>
            <H6Wrapper>{children}</H6Wrapper>
        </ConfigProviderDesign>
    );
};
