import { FlexStyles } from './styles';
import { RdFlexProps } from './types';

export const Flex = ({ ...antdProps }: RdFlexProps) => {
    return <FlexStyles {...antdProps} />;
};
