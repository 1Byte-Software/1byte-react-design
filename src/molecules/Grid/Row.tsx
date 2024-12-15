import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { RowStyles } from './styles';
import { RdRowProps } from './types';

export const Row = ({ ...antdProps }: RdRowProps) => {
    return (
        <ConfigProviderDesign>
            <RowStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
