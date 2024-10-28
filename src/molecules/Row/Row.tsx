import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { RowStyles } from './styles';
import { IRowProps } from './types';

export const Row = ({ ...antdProps }: IRowProps) => {
    return (
        <ConfigProviderDesign>
            <RowStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
