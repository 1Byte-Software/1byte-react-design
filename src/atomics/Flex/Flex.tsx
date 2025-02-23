import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { FlexStyles } from './styles';
import { RdFlexProps } from './types';

export const Flex = ({ ...antdProps }: RdFlexProps) => {
    return (
        <ConfigProviderDesign>
            <FlexStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
