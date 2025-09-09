import { PreviewGroupStyled } from './styles';
import { RdPreviewGroupComponent } from './types';

export const PreviewGroup: RdPreviewGroupComponent = props => {
    const { ...antdProps } = props;

    return <PreviewGroupStyled {...antdProps} />;
};
