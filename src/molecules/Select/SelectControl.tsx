import { LabelField, TextError } from '@/designs';
import { IControlField } from '@/models/interfaces/form';
import { SelectProps, Select as AntdSelect } from 'antd';
import { useController } from 'react-hook-form';
import { ISelectProps } from './Select';
import { SelectWrapper } from './styles';
import { ConfigProviderDesign } from '@/ContextProvider';

export interface ISelectControlProps extends Omit<ISelectProps, 'name'>, IControlField {}

export const SelectControl = ({
    name,
    control,

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
