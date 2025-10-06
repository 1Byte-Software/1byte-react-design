import { forwardRef } from 'react';
import { Skeleton } from '../Skeleton';
import { TagStyled } from './styles';
import { TagCheckable } from './TagCheckable';
import { TagGroup } from './TagGroup';
import { RdTagComponent, RdTagCompoundedComponent } from './types';
import clsx from 'clsx';

export const TagInternal: RdTagComponent = forwardRef((props, ref) => {
    const { loading = false, type = 'default', className, ...antdProps } = props;

    if (loading) {
        return <Skeleton.Button active />;
    }

    return <TagStyled ref={ref} type={type} className={clsx("rd-tag", className)} {...antdProps} />;
});

export const Tag = TagInternal as RdTagCompoundedComponent;
Tag.CheckableTag = TagCheckable;
Tag.Group = TagGroup;
