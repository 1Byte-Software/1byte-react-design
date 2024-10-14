import { Select as AntdSelect, SelectProps } from 'antd';
import { useController } from 'react-hook-form';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TextError } from '../../atomics';
import { IRegistryControlField } from '../../models';
import { LabelField } from '../LabelField';
import { ISelectProps } from './Select';
import { SelectWrapper } from './styles';

export interface ISelectControlProps extends Omit<ISelectProps, 'name'>, IRegistryControlField {}

export const SelectControl = ({
    name,
    control,
    defaultValue,

    // ILabelField props
    required,
    label,
    labelAxis = 'vertical',
    isColon = true,
    labelDescription,
    widthField,

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
                <LabelField
                    label={label}
                    labelAxis={labelAxis}
                    required={required}
                    isColon={isColon}
                    labelDescription={labelDescription}
                    widthField={widthField}
                >
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
