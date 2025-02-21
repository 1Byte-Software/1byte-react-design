import { forwardRef } from 'react';
import { SpaceStyled } from './styles';
import { RdSpaceComponent, RdSpaceCompoundedComponent } from './types';
import { SpaceCompact } from './Compact';

export const SpaceInternal: RdSpaceComponent = forwardRef((props, ref) => {
    const { block, ...antdProps } = props;

    return <SpaceStyled ref={ref} block={block} {...antdProps} />;
});

export const Space = SpaceInternal as RdSpaceCompoundedComponent;
Space.Compact = SpaceCompact;
