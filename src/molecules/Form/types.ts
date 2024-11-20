import { Form } from 'antd';
import type { GetProps } from 'antd';

type FormProps = GetProps<typeof Form>;

type FormItemProps = GetProps<typeof Form.Item>;

export type RdFormProps = FormProps & {};

export type RdFormItemProps = FormItemProps & {
    /**
     * Error message to display
     */
    errorMessage?: string;
};
