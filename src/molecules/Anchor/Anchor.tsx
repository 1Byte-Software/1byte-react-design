import { AnchorStyles } from './styles';
import { RdAnchorProps } from './types';

export const Anchor = ({ ...antdProps }: RdAnchorProps) => {
    return <AnchorStyles {...antdProps} />;
};
