import { forwardRef, useMemo } from 'react';
import { TypographyTextStyles } from './styles';
import { RdTypographyTextProps } from './types';

export const TypographyText = forwardRef(
    (props: RdTypographyTextProps, ref: RdTypographyTextProps['ref']) => {
        const { size = 'normal', editable, autoFocus = false, onChange, ...antdProps } = props;

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
