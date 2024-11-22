import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { FormItem } from './FormItem';
import { FormItemControl } from './FormItemControl';
import { FormStyles } from './styles';
import { RdFormProps } from './types';

export const Form = ({ ...antdProps }: RdFormProps) => {
    return (
        <ConfigProviderDesign>
            <FormStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};

Form.Item = FormItem;
Form.ItemControl = FormItemControl;
