import { RdFormProps } from '../types';

export interface RdFormContextValue<Values = any>
    extends Pick<RdFormProps, 'requiredResolver' | 'placeholderResolver' | 'onUserValuesChange'> {}
