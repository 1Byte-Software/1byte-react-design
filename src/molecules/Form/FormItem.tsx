import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { FormItemStyles } from './styles';
import { RdFormItemProps } from './types';

export const FormItem = ({ errorMessage, ...antdProps }: RdFormItemProps) => {
    
    if (errorMessage) {
        antdProps.validateStatus = 'error';
        antdProps.help = errorMessage;
    }

    return (
        <ConfigProviderDesign>
            <FormItemStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
