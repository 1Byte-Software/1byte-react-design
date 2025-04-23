import { forwardRef, useMemo } from 'react';
import { TypographyTextStyles } from './styles';
import { RdTypographyTextProps } from './types';
import { Skeleton } from '../../molecules';

export const TypographyText = forwardRef(
    (props: RdTypographyTextProps, ref: RdTypographyTextProps['ref']) => {
        const {
            size = 'normal',
            editable,
            autoFocus = false,
            loading = false,
            onChange,
            ...antdProps
        } = props;

        if (loading) return <Skeleton.Input active />;

        const editableCustom = useMemo(() => {
            if (editable && typeof editable === 'object') {
                if (onChange) {
                    editable.onChange = onChange;
                }

                return editable;
            }

            return editable;
        }, [editable]);

        return (
            <TypographyTextStyles ref={ref} editable={editableCustom} size={size} {...antdProps} />
        );
    }
);
