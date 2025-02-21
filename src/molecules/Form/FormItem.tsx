import { FormItemStyles } from './styles';
import { RdFormItemProps } from './types';

export const FormItem = ({ errorMessage, description, ...antdProps }: RdFormItemProps) => {
    if (errorMessage) {
        antdProps.validateStatus = 'error';
        antdProps.help = errorMessage;
    }

    if (description) {
        antdProps.label = (
            <>
                {antdProps.label}
                <div>{description}</div>
            </>
        );
    }

    return <FormItemStyles {...antdProps} />;
};
