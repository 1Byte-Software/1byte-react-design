import { Children, cloneElement, isValidElement, ReactElement, useContext } from 'react';
import { rdFormContext } from './context';
import { FormItemStyles } from './styles';
import { RdFormItemProps } from './types';

type ChildWithHandlers = {
    onChange?: (...args: any[]) => void;
    onBlur?: (...args: any[]) => void;
    placeholder?: string;
    [key: string]: any;
};

export const FormItem = ({ errorMessage, children, ...antdProps }: RdFormItemProps) => {
    const ctx = useContext(rdFormContext);

    const required =
        antdProps.required ??
        (ctx?.requiredResolver ? ctx.requiredResolver(antdProps.name) : undefined);

    if (errorMessage) {
        antdProps.validateStatus = 'error';
        antdProps.help = errorMessage;
    }

    if (typeof children === 'function') {
        return <div>Not support function</div>;
    }

    return (
        <FormItemStyles {...antdProps} required={required}>
            {Children.map(children, child => {
                if (isValidElement<ChildWithHandlers>(child)) {
                    const placeholder =
                        child.props.placeholder ??
                        (ctx?.placeholderResolver
                            ? ctx.placeholderResolver(antdProps.name)
                            : undefined);

                    return cloneElement(child as ReactElement<ChildWithHandlers>, {
                        placeholder,
                    });
                }

                return child;
            })}
        </FormItemStyles>
    );
};
