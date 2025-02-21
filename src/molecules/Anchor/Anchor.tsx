import { AnchorLink } from './AnchorLink';
import { AnchorStyles } from './styles';
import { RdAnchorComponent, RdAnchorCompoundedComponent } from './types';

export const AnchorInternal: RdAnchorComponent = props => {
    return <AnchorStyles {...props} />;
};

export const Anchor = AnchorInternal as RdAnchorCompoundedComponent;
Anchor.Link = AnchorLink;
