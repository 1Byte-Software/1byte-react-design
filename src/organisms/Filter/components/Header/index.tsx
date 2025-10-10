import clsx from 'clsx';
import { RdSearchProps, Space } from '../../../../molecules';
import { FilterHeaderWrapper, InputFilterStyles } from './styles';
import { RdFilterHeaderProps } from './types';
import i18next from 'i18next';
import { localize } from '../../../../utils/localize';

export const FilterHeader = (props: RdFilterHeaderProps) => {
    const { defaultKeywords, className, localization, onChangeKeywords } = props;
    const { search_placeholder = 'Search by keywords' } = localization || {};

    const handleChangeKeywords: RdSearchProps['onSearch'] = newKeywords => {
        onChangeKeywords?.(newKeywords);
    };

    return (
        <FilterHeaderWrapper className={clsx('rd-filter-header', className)}>
            <Space size="small" direction="vertical" block>
                <InputFilterStyles
                    defaultValue={defaultKeywords}
                    placeholder={localize(search_placeholder)}
                    onSearch={handleChangeKeywords}
                />

                {/* <Button
                    color="primary"
                    variant="outlined"
                    icon={<CaretDownOutlined />}
                    iconPosition="end"
                >
                    Advanced search
                </Button> */}
            </Space>
        </FilterHeaderWrapper>
    );
};
