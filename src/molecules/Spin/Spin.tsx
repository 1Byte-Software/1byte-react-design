import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { SpinStyles } from './styles';
import { ISpinProps } from './types';

export const Spin = ({ ...antdProps }: ISpinProps) => {
    return (
        <ConfigProviderDesign>
            <SpinStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};
