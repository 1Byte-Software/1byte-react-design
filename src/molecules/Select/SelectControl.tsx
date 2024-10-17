import { Select as AntdSelect, SelectProps } from 'antd';
import { useController } from 'react-hook-form';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TextError } from '../../atomics';
import { LabelField } from '../LabelField';
import { SelectWrapper } from './styles';
import { ISelectControlProps } from './types';

export const SelectControl = ({
    name,
    control,
    defaultValue,

    label: labelFieldProps,

    ...antdProps
}: ISelectControlProps) => {
    const {
        field: { value, onChange, onBlur, ref },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
        defaultValue,
    });

    return (
        <ConfigProviderDesign>
            <SelectWrapper>
                <LabelField {...labelFieldProps}>
                    <AntdSelect
                        {...(antdProps as SelectProps)}
                        value={value === undefined ? '' : value}
                        onChange={onChange}
                        onBlur={onBlur}
                        ref={ref}
                    />
                </LabelField>
                {invalid && <TextError>{error?.message}</TextError>}
            </SelectWrapper>
        </ConfigProviderDesign>
    );
};
