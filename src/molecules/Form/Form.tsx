import { Form as FormAntd } from 'antd';
import { rdFormContext } from './context';
import { FormErrorList } from './FormErrorList';
import { FormItem } from './FormItem';
import { FormItemControl } from './FormItemControl';
import { FormList } from './FormList';
import { FormProvider } from './FormProvider';
import { FormStyles } from './styles';
import { RdFormComponent, RdFormCompoundedComponent, RdFormProps } from './types';

export const FormInternal: RdFormComponent = (props: RdFormProps) => {
    const { requiredResolver, placeholderResolver, onUserValuesChange, ...formProps } = props;

    return (
        <rdFormContext.Provider
            value={{
                requiredResolver,
                placeholderResolver,
                onUserValuesChange,
            }}
        >
            <FormStyles {...formProps} />
        </rdFormContext.Provider>
    );
};

export const Form = FormInternal as RdFormCompoundedComponent;

Form.Item = FormItem;
Form.ItemControl = FormItemControl;
Form.List = FormList;
Form.Provider = FormProvider;
Form.ErrorList = FormErrorList;
Form.useForm = FormAntd.useForm;
Form.useFormInstance = FormAntd.useFormInstance;
Form.useWatch = FormAntd.useWatch;
