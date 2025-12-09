import { useContext } from 'react';
import { rdFormContext } from './context';
import { FormItemStyles } from './styles';
import { RdFormItemProps } from './types';

export const FormItem = ({ errorMessage, ...antdProps }: RdFormItemProps) => {
    const ctx = useContext(rdFormContext);

    const required =
        antdProps.required ??
        (ctx?.requiredResolver ? ctx.requiredResolver(antdProps.name) : undefined);

    if (errorMessage) {
        antdProps.validateStatus = 'error';
        antdProps.help = errorMessage;
    }

    return <FormItemStyles {...antdProps} required={required} />;
};
