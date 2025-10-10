import { InfoCircleFilled, LoadingOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import i18next from 'i18next';
import { useMemo } from 'react';
import { Flex, Typography } from '../../../../atomics';
import { Form, Select, Space, Tooltip } from '../../../../molecules';
import { FilterFooterWrapper } from './styles';
import { RdFilterFooterProps } from './types';
import { localize } from '../../../../utils/localize';

// export const rdI118next = i18next;
// (rdI118next as any).fromLib = '1byte-react-design';

// export const useRdLocation = useLocation;
// (useRdLocation as any).fromLib = '1byte-react-design';

// export const rdReact = React;
// (rdReact as any).fromLib = '1byte-react-design';

// export const rdYup = Yup;
// (rdYup as any).fromLib = '1byte-react-design';

export const FilterFooter = <T extends Record<string, string>>(props: RdFilterFooterProps<T>) => {
    const {
        fields,
        totalItems = 0,
        className,
        showTotalItemsCount = 0,
        isLoading,
        filterValue,
        localization,
        children,
        onChangeFilterValue,
    } = props;

    const {
        showing = 'Showing {{count}} of {{total}}',
        showing_tooltip = 'This is the total count based on the selected filter',
    } = localization || {};

    const isRenderFooter = useMemo(() => {
        if (fields?.length) return true;

        if (totalItems || showTotalItemsCount) return true;

        return false;
    }, [fields, showTotalItemsCount, totalItems]);

    if (!isRenderFooter) return null;

    return (
        <FilterFooterWrapper className={clsx('rd-filter-footer', className)}>
            <Flex justify="space-between" wrap>
                {Boolean(fields?.length) && (
                    <Space>
                        {fields?.map(field => {
                            return (
                                <Form.Item
                                    key={field.name as string}
                                    label={field.label}
                                    disableMargin
                                    // labelCol={{
                                    //     flex: 1,
                                    // }}
                                    // wrapperCol={false}
                                >
                                    {field?.render ? (
                                        field.render()
                                    ) : (
                                        <Select
                                            options={field.options}
                                            value={filterValue?.[field.name] || null}
                                            onChange={e => {
                                                const newFilterValue = { ...filterValue } as T;
                                                newFilterValue[field.name] = e;

                                                onChangeFilterValue?.(newFilterValue);
                                            }}
                                            popupMatchSelectWidth={false}
                                        />
                                    )}
                                </Form.Item>
                            );
                        })}
                    </Space>
                )}

                {children}

                {Boolean(totalItems || showTotalItemsCount) && (
                    <Space size={'small'} style={{ marginLeft: 'auto' }} align="end">
                        {isLoading && <LoadingOutlined />}
                        <Typography.Text>
                            {localize(showing, { total: totalItems, count: showTotalItemsCount })}{' '}
                            <Tooltip title={localize(showing_tooltip)}>
                                <Typography.Text type="secondary">
                                    <InfoCircleFilled />
                                </Typography.Text>
                            </Tooltip>
                        </Typography.Text>
                    </Space>
                )}
            </Flex>
        </FilterFooterWrapper>
    );
};
