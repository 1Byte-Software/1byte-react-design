import { Select as SelectAntd, SelectProps } from 'antd';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { LabelField } from '../LabelField';
import { SelectWrapper } from './styles';
import { ISelectProps } from './types';

export const Select = ({ label, ...antdProps }: ISelectProps) => {
    return (
        <ConfigProviderDesign>
            <SelectWrapper>
                <LabelField {...label}>
                    <SelectAntd {...(antdProps as SelectProps)} />
                </LabelField>
            </SelectWrapper>
        </ConfigProviderDesign>
    );
};
