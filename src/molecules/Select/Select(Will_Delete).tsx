// import { forwardRef } from 'react';
// import { config } from '../..';
// import { ConfigProviderDesign } from '../../ConfigProviderDesign';
// import { RdComponentsConfig } from '../../utils/types';
// import { SelectStyled } from './styles';
// import { RdSelectProps, variantSelectExtend } from './types';
// import useExtendVariant from './useExtendVariant';

// const isVariantSelectExtend = (
//     variant: NonNullable<RdSelectProps['variant']>
// ): variant is variantSelectExtend => {
//     return ['outlined-transparent'].includes(variant);
// };

// export const Select = forwardRef((props: RdSelectProps, ref: RdSelectProps['ref']) => {
//     let {
//         width,
//         minWidth,
//         isHideValueOnLoading = true,
//         variant,

//         ...antdProps
//     } = props;

//     let newSelectDesignToken: RdComponentsConfig['Select'] = {
//         ...config.componentToken?.Select,
//         algorithm: true,
//     };

//     //#region  Handle isHideValueOnLoading prop
//     // Handle hide value when loading
//     if (isHideValueOnLoading) {
//         antdProps = {
//             ...antdProps,
//             value: !antdProps.loading && antdProps.value,
//         };
//     }
//     //#endregion

//     if (variant && isVariantSelectExtend(variant)) {
//         // Get design token config for color.
//         const designTokenConfig = useExtendVariant(variant);

//         // Merge design token config with button design token.
//         newSelectDesignToken = {
//             ...newSelectDesignToken,
//             ...designTokenConfig,
//         };

//         variant = 'outlined';
//     }

//     return (
//         <ConfigProviderDesign
//             componentToken={{
//                 Select: newSelectDesignToken,
//             }}
//         >
//             <SelectStyled ref={ref} variant={variant} {...antdProps} />
//         </ConfigProviderDesign>
//     );
// });
