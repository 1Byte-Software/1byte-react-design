import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TitleWrapper } from './styles';
import { ITitleProps } from './types';

export const Title = (props: ITitleProps) => {
    const { children } = props;
    return (
        <ConfigProviderDesign>
            <TitleWrapper>{children}</TitleWrapper>
        </ConfigProviderDesign>
    );
};
