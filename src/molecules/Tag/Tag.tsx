import { forwardRef } from 'react';
import { TagStyled } from './styles';
import { RdTagComponent, RdTagCompoundedComponent } from './types';
import { TagCheckable } from './TagCheckable';

export const TagInternal: RdTagComponent = forwardRef((props, ref) => {
    return <TagStyled ref={ref} {...props} />;
});

export const Tag = TagInternal as RdTagCompoundedComponent;
Tag.CheckableTag = TagCheckable;
