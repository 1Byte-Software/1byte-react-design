import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { DescriptionWrapper } from './styles';
import { IDescriptionProps } from './types';

export const Description = (props: IDescriptionProps) => {
    const { children } = props;
    return (
        <ConfigProviderDesign>
            <DescriptionWrapper>{children}</DescriptionWrapper>
        </ConfigProviderDesign>
    );
};
