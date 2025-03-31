import { FormItemStyles } from './styles';
import { RdFormItemProps } from './types';

export const FormItem = ({ errorMessage, ...antdProps }: RdFormItemProps) => {
    if (errorMessage) {
        antdProps.validateStatus = 'error';
        antdProps.help = errorMessage;
    }

    return <FormItemStyles {...antdProps} />;
};
