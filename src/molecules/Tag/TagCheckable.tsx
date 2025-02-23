import { forwardRef } from 'react';
import { TagCheckableStyled } from './styles';
import { RdTagCheckableComponent } from './types';

export const TagCheckable: RdTagCheckableComponent = forwardRef((props, ref) => {
    return <TagCheckableStyled ref={ref} {...props} />;
});
