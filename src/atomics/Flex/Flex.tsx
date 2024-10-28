import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { FlexStyles } from './styles';
import { IFlexProps } from './types';

export const Flex = ({ ...antdProps }: IFlexProps) => {
    return (
        <ConfigProviderDesign>
            <FlexStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
