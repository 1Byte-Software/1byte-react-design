import { SpaceCompactStyled } from './styles';
import { RdSpaceCompactProps } from './types';

export const SpaceCompact = (props: RdSpaceCompactProps) => {
    const { block, ...antdProps } = props;

    return <SpaceCompactStyled block={block} {...antdProps} />;
};
