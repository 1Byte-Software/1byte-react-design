import { DividerStyles } from './styles';
import { RdDividerComponent } from './types';

export const Divider: RdDividerComponent = props => {
    const { disableMargin = false, ...antdProps } = props;
    return <DividerStyles disableMargin={disableMargin} {...antdProps} />;
};
