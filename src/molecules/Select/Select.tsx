import { Select as SelectAntd, SelectProps } from 'antd';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { LabelField } from '../LabelField';
import { SelectWrapper } from './styles';
import { ISelectProps } from './types';

export const Select = ({
    label: labelFieldProps,

    // Custom props
    width,
    minWidth,
    isHideValueOnLoading = true,

    ...antdProps
}: ISelectProps) => {
    // Handle hide value when loading
    if (isHideValueOnLoading) {
        antdProps = {
            ...antdProps,
            value: !antdProps.loading && antdProps.value,
        };
    }

    return (
        <ConfigProviderDesign>
            <SelectWrapper className="rc-select__wrapper" width={width} minWidth={minWidth}>
                <ConditionalWrapper
                    condition={Boolean(labelFieldProps)}
                    wrapper={LabelField}
                    wrapperProps={labelFieldProps}
                >
                    <SelectAntd {...(antdProps as SelectProps)} />
                </ConditionalWrapper>
            </SelectWrapper>
        </ConfigProviderDesign>
    );
};
