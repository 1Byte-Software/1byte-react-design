import { AffixStyles } from './styles';
import { RdAffixProps } from './types';

export const Affix = ({ ...antdProps }: RdAffixProps) => {
    return <AffixStyles {...antdProps} />;
};
