import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { RangePickerStyles } from './styles';
import { RdRangePickerProps } from './types';

export const RangePicker = ({ ...antdProps }: RdRangePickerProps) => {
    return (
        <ConfigProviderDesign>
            <RangePickerStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
