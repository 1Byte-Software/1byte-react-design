import { forwardRef } from 'react';
import { TagStyled } from './styles';
import { RdTagComponent, RdTagCompoundedComponent } from './types';
import { TagCheckable } from './TagCheckable';

export const TagInternal: RdTagComponent = forwardRef(props => {
    return <TagStyled {...props} />;
});

export const Tag = TagInternal as RdTagCompoundedComponent;
Tag.CheckableTag = TagCheckable;