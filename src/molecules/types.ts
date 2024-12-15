import { RdFlexComponentToken, RdTypographyComponentToken } from '../atomics';
import { RdAffixComponentToken } from './Affix';
import { RdAnchorComponentToken } from './Anchor';
import { RdAvatarComponentToken } from './Avatar';
import { RdBadgeComponentToken } from './Badge';
import { RdBreadcrumbComponentToken } from './Breadcrumb';
import { RdButtonComponentToken } from './Button';
import { RdCardComponentToken } from './Card';
import { CheckboxComponentToken } from './Checkbox';
import { RdCollapseComponentToken } from './Collapse';
import { RdColorPickerComponentToken } from './ColorPicker';
import { RdDatePickerComponentToken } from './DatePicker';
import { RdDividerComponentToken } from './Divider';
import { RdDrawerComponentToken } from './Drawer';
import { RdDropdownComponentToken } from './Dropdown';
import { RdEmptyComponentToken } from './Empty';
import { RdBackTopComponentToken, RdFloatButtonComponentToken } from './FloatButton';
import { FormComponentToken } from './Form';
import { RdGridComponentToken } from './Grid';
import { RdInputComponentToken } from './Input';
import { RdInputNumberComponentToken } from './InputNumber';
import { RdLayoutComponentToken } from './Layout';
import { RdListComponentToken } from './List';
import { RdMenuComponentToken } from './Menu';
import { RdModalComponentToken } from './Modal';
import { RdPaginationComponentToken } from './Pagination';
import { RdPopoverComponentToken } from './Popover';
import { RdRadioComponentToken } from './Radio';
import { RdSelectComponentToken } from './Select';
import { RdSkeletonComponentToken } from './Skeleton';
import { RdSliderComponentToken } from './Slider';
import { RdSpaceComponentToken } from './Space';
import { RdSpinComponentToken } from './Spin';
import { RdSwitchComponentToken } from './Switch';
import { RdTableComponentToken } from './Table';
import { RdTabsComponentToken } from './Tabs';
import { RdTagComponentToken } from './Tag';
import { RdTooltipComponentToken } from './Tooltip';
import { RdUploadComponentToken } from './Upload';

export interface RdComponentTokenMap {
    Affix?: RdAffixComponentToken;
    // Alert?: AlertComponentToken;
    Anchor?: RdAnchorComponentToken;
    Avatar?: RdAvatarComponentToken;
    BackTop?: RdBackTopComponentToken;
    Badge?: RdBadgeComponentToken;
    Button?: RdButtonComponentToken;
    Breadcrumb?: RdBreadcrumbComponentToken;
    Card?: RdCardComponentToken;
    // Carousel?: CarouselComponentToken;
    // Cascader?: CascaderComponentToken;
    Checkbox?: CheckboxComponentToken;
    ColorPicker?: RdColorPickerComponentToken;
    Collapse?: RdCollapseComponentToken;
    DatePicker?: RdDatePickerComponentToken;
    // Descriptions?: DescriptionsComponentToken;
    Divider?: RdDividerComponentToken;
    Drawer?: RdDrawerComponentToken;
    Dropdown?: RdDropdownComponentToken;
    Empty?: RdEmptyComponentToken;
    Flex?: RdFlexComponentToken;
    FloatButton?: RdFloatButtonComponentToken;
    Form?: FormComponentToken;
    Grid?: RdGridComponentToken;
    // Image?: ImageComponentToken;
    Input?: RdInputComponentToken;
    InputNumber?: RdInputNumberComponentToken;
    Layout?: RdLayoutComponentToken;
    List?: RdListComponentToken;
    // Mentions?: MentionsComponentToken;
    // Notification?: NotificationComponentToken;
    Pagination?: RdPaginationComponentToken;
    Popover?: RdPopoverComponentToken;
    // Popconfirm?: PopconfirmComponentToken;
    // Rate?: RateComponentToken;
    Radio?: RdRadioComponentToken;
    // Result?: ResultComponentToken;
    // Segmented?: SegmentedComponentToken;
    Select?: RdSelectComponentToken;
    Skeleton?: RdSkeletonComponentToken;
    Slider?: RdSliderComponentToken;
    Spin?: RdSpinComponentToken;
    // Statistic?: StatisticComponentToken;
    Switch?: RdSwitchComponentToken;
    // Splitter?: SplitterComponentToken;
    Tag?: RdTagComponentToken;
    // Tree?: TreeComponentToken;
    // TreeSelect?: TreeSelectComponentToken;
    Typography?: RdTypographyComponentToken;
    // Timeline?: TimelineComponentToken;
    // Transfer?: TransferComponentToken;
    Tabs?: RdTabsComponentToken;
    // Calendar?: CalendarComponentToken;
    // Steps?: StepsComponentToken;
    Menu?: RdMenuComponentToken;
    Modal?: RdModalComponentToken;
    // Message?: MessageComponentToken;
    Upload?: RdUploadComponentToken;
    Tooltip?: RdTooltipComponentToken;
    Table?: RdTableComponentToken;
    Space?: RdSpaceComponentToken;
    // Progress?: ProgressComponentToken;
    // Tour?: TourComponentToken;
    // QRCode?: QRCodeComponentToken;
    // App?: AppComponentToken;
    /** @private Internal TS definition. Do not use. */
    // Wave?: WaveToken;
}
