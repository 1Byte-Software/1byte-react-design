import { forwardRef, useContext } from 'react';
import { TextAreaStyled } from './styles';
import { RdTextareaComponent } from './types';
import { ConfigProvider } from '../../organisms';

export const TextArea: RdTextareaComponent = forwardRef((props, ref) => {
    const { textArea: defaultTextareaProps } = useContext(ConfigProvider.ConfigContext);
    const { autoSize } = defaultTextareaProps || {};

    return <TextAreaStyled ref={ref} autoSize={autoSize} {...props} />;
});
