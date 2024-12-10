import { Select as SelectAntd, SelectProps } from 'antd';
import { forwardRef, LegacyRef, RefAttributes } from 'react';
import { config } from '../..';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { RdComponentsConfig } from '../../organisms';
import { LabelField } from '../LabelField';
import { SelectWrapper } from './styles';
import { RdSelectProps, RdSelectRef, variantSelectExtend } from './types';
import useExtendVariant from './useExtendVariant';

const isVariantSelectExtend = (
    variant: NonNullable<RdSelectProps['variant']>
): variant is variantSelectExtend => {
    return ['outlined-transparent'].includes(variant);
};

export const Select = forwardRef(
    (
        props: RdSelectProps & RefAttributes<RdSelectProps>,
        ref: LegacyRef<RdSelectRef> | undefined
    ) => {
        let {
            label: labelFieldProps,

            // Custom props
            width,
            minWidth,
            isHideValueOnLoading = true,
            variant,

            ...antdProps
        } = props;

        let newSelectDesignToken: RdComponentsConfig['Select'] = {
            ...config.componentToken?.Select,
            algorithm: true,
        };

        //#region  Handle isHideValueOnLoading prop
        // Handle hide value when loading
        if (isHideValueOnLoading) {
            antdProps = {
                ...antdProps,
                value: !antdProps.loading && antdProps.value,
            };
        }
        //#endregion

        if (variant && isVariantSelectExtend(variant)) {
            // Get design token config for color.
            const designTokenConfig = useExtendVariant(variant);

            // Merge design token config with button design token.
            newSelectDesignToken = {
                ...newSelectDesignToken,
                ...designTokenConfig,
            };

            variant = 'outlined';
        }

        return (
            <ConfigProviderDesign
                componentToken={{
                    Select: newSelectDesignToken,
                }}
            >
                <SelectWrapper className="rc-select__wrapper" width={width} minWidth={minWidth}>
                    <ConditionalWrapper
                        condition={Boolean(labelFieldProps)}
                        wrapper={LabelField}
                        wrapperProps={labelFieldProps}
                    >
                        <SelectAntd ref={ref} variant={variant} {...(antdProps as SelectProps)} />
                    </ConditionalWrapper>
                </SelectWrapper>
            </ConfigProviderDesign>
        );
    }
);
