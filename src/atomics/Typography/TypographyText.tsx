import { forwardRef, useMemo } from 'react';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TypographyTextStyles } from './styles';
import { RdTypographyTextProps } from './types';

export const TypographyText = forwardRef(
    (props: RdTypographyTextProps, ref: RdTypographyTextProps['ref']) => {
        const { editable, autoFocus = false, onChange, ...antdProps } = props;

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
            <ConfigProviderDesign>
                <TypographyTextStyles ref={ref} editable={editableCustom} {...antdProps} />
            </ConfigProviderDesign>
        );
    }
);
