import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { CheckboxGroup } from './CheckboxGroup';
import { CheckboxStyles } from './styles';
import { RdCheckboxProps } from './types';

export const Checkbox = (props: RdCheckboxProps) => {
    const { ...antdProps } = props;

    return (
        <ConfigProviderDesign>
            <CheckboxStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};

Checkbox.Group = CheckboxGroup;
