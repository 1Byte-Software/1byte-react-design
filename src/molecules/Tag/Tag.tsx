import { forwardRef } from 'react';
import { Skeleton } from '../Skeleton';
import { TagStyled } from './styles';
import { TagCheckable } from './TagCheckable';
import { RdTagComponent, RdTagCompoundedComponent } from './types';

export const TagInternal: RdTagComponent = forwardRef((props, ref) => {
    const { loading = false, ...antdProps } = props;

    if (loading) {
        return <Skeleton.Button active />;
    }

    return <TagStyled ref={ref} {...antdProps} />;
});

export const Tag = TagInternal as RdTagCompoundedComponent;
Tag.CheckableTag = TagCheckable;
