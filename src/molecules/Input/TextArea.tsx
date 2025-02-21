import { forwardRef } from 'react';
import { TextAreaStyled } from './styles';
import { RdTextareaComponent } from './types';

export const TextArea: RdTextareaComponent = forwardRef((props, ref) => {
    return <TextAreaStyled ref={ref} {...props} />;
});
