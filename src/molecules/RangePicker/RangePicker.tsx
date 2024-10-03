// import { DatePicker } from 'antd';
// import { ILabelField, LabelField } from '../LabelField';
// import { RangePickerWrapper } from './styles';
// import { RangePickerProps } from 'antd/es/date-picker';

// const { RangePicker: AntdRangePicker } = DatePicker;

// export interface IRangePickerProps extends RangePickerProps, ILabelField {}

// export const RangePicker = ({
//     // ILabelField props
//     required,
//     label,
//     labelAxis = 'vertical',
//     isColon = true,
//     labelDescription,
//     widthField,

//     ...antdProps
// }: IRangePickerProps) => {
//     return (
//         <RangePickerWrapper>
//             <LabelField
//                 label={label}
//                 labelAxis={labelAxis}
//                 required={required}
//                 isColon={isColon}
//                 labelDescription={labelDescription}
//                 widthField={widthField}
//             >
//                 <AntdRangePicker {...(antdProps as RangePickerProps)} />
//             </LabelField>
//         </RangePickerWrapper>
//     );
// };
