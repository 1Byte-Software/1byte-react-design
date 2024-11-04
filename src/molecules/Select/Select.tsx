import { Select as SelectAntd, SelectProps } from 'antd';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { LabelField } from '../LabelField';
import { SelectWrapper } from './styles';
import { ISelectProps, variantSelectExtend } from './types';
import useExtendVariant from './useExtendVariant';
import { IRdComponentsConfig } from '../../organisms';
import { config } from '../..';

const isVariantSelectExtend = (
    variant: NonNullable<ISelectProps['variant']>
): variant is variantSelectExtend => {
    return ['outlined-transparent'].includes(variant);
};

export const Select = ({
    label: labelFieldProps,

    // Custom props
    width,
    minWidth,
    isHideValueOnLoading = true,
    variant,

    ...antdProps
}: ISelectProps) => {
    let newSelectDesignToken: IRdComponentsConfig['Select'] = {
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

    //#region
    // Handle extend variant props

    //#endregion

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
                    <SelectAntd variant={variant} {...(antdProps as SelectProps)} />
                </ConditionalWrapper>
            </SelectWrapper>
        </ConfigProviderDesign>
    );
};
