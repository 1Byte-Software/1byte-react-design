import { SelectProps, Select as SelectAntd } from 'antd';
import { ILabelField, LabelField } from '../LabelField';
import { SelectWrapper } from './styles';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';

export interface ISelectProps extends SelectProps, ILabelField {}

export const Select = ({
    // ILabelField props
    required,
    label,
    labelAxis = 'vertical',
    isColon = true,
    labelDescription,
    widthField,

    ...antdProps
}: ISelectProps) => {
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
                    <SelectAntd {...(antdProps as SelectProps)} />
                </LabelField>
            </SelectWrapper>
        </ConfigProviderDesign>
    );
};
