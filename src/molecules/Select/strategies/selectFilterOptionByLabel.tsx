import { RdSelectProps } from '../types';

export const selectFilterOptionByLabel: RdSelectProps['filterOption'] = (input, option) => {
    return (
        option?.props?.children?.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
        option?.props?.label?.toLowerCase().indexOf(input.toLowerCase()) >= 0
    );
};
