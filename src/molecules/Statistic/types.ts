import { Statistic, GetProps } from 'antd';
import { ComponentToken as StatisticComponentTokenAntd } from 'antd/es/drawer/style';
import { StatisticRef } from 'antd/es/statistic/Statistic';
import { ComponentProps } from 'react';

//#region Define Ant Design types
/**
 * 📝 Explanation:
 *
 * Normally, when styling an Ant Design component, we can simply write:
 *    type StatisticPropsAntd = GetProps<typeof Statistic>;
 *
 * But Statistic is a special case:
 * - Ant Design does NOT export a public interface for Statistic props (it relies on an internal type `StatisticReactProps`).
 * - Because of this, when exporting styled(Statistic), TypeScript tries to expose `StatisticReactProps` and throws:
 *     ts(4023): "Exported variable '...' has or is using name 'StatisticReactProps' but cannot be named".
 *
 * 🚑 Workaround:
 * - Instead of using `GetProps<typeof Statistic>`, we clone the props using a mapped type to create a "public" type:
 *   StatisticPublicProps = { [K in keyof ComponentProps<typeof Statistic>]: ComponentProps<typeof Statistic>[K] }
 * - Then we wrap it in a `StatisticBase` component so that styled() only sees our public type,
 *   avoiding any reference to the internal Ant Design type.
 *
 * 🔮 Note:
 * - If Ant Design exports a proper `StatisticProps` type in the future, we can remove this workaround
 *   and go back to the shorter version:
 *     type StatisticPropsAntd = GetProps<typeof Statistic>;
 */
type StatisticPropsAntd = {
    [K in keyof ComponentProps<typeof Statistic>]: ComponentProps<typeof Statistic>[K];
};
type TimerPropsAntd = GetProps<typeof Statistic.Timer>;

type StatisticRefAntd = StatisticRef;

//#endregion

//#region Define extended component tokens
type StatisticComponentTokenExtend = {};
//#endregion

//#region Define extended types
type StatisticPropsExtend = {};
type TimerPropsExtend = {};

type StatisticRefExtend = {};
//#endregion

//#region Export types
export type RdStatisticProps = StatisticPropsAntd & StatisticPropsExtend;
export type RdTimerProps = TimerPropsAntd & TimerPropsExtend;
export type RdStatisticRef = StatisticRefAntd & StatisticRefExtend;
export type RdStatisticComponentToken = StatisticComponentTokenAntd & StatisticComponentTokenExtend;
//#endregion

//#region Define component types
// export type RdStatisticComponent = React.FC<RdStatisticProps>;
export type RdStatisticComponent = React.ForwardRefExoticComponent<
    React.AriaAttributes & {
        [key: `data-${string}`]: unknown;
    } & Pick<React.HTMLAttributes<HTMLDivElement>, 'role'> &
        RdStatisticProps &
        React.RefAttributes<RdStatisticRef>
>;

export type RdTimerComponent = React.FC<RdTimerProps>;

export type RdStatisticCompoundedComponent = RdStatisticComponent & {
    Timer: RdTimerComponent;
};
//#endregion
