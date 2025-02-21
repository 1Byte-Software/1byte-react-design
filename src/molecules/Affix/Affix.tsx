import { forwardRef } from 'react';
import { AffixStyles } from './styles';
import { RdAffixComponent } from './types';

export const Affix: RdAffixComponent = forwardRef((props, ref) => {
    return <AffixStyles ref={ref} {...props} />;
});
