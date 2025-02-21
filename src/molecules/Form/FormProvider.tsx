import { FormProviderStyles } from './styles';
import { RdFormProviderComponent } from './types';

export const FormProvider: RdFormProviderComponent = props => {
    return <FormProviderStyles {...props} />;
};
