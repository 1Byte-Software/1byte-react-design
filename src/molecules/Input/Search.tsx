import { forwardRef } from 'react';
import { InputSearchStyled } from './styles';
import { RdSearchComponent } from './types';

export const Search: RdSearchComponent = forwardRef((props, ref) => {
    return <InputSearchStyled ref={ref} {...props} />;
});
