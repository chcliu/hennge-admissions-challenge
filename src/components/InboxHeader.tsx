import React from 'react';
import { SetSortSettings, SortSettings } from 'types';

interface Props {
    setSortSettings: SetSortSettings;
    sortSettings: SortSettings;
}

const InboxHeader: React.FC<Props> = ({ setSortSettings, sortSettings }) => {
    const { sortKey, sortOrder } = sortSettings;

    const selectSorting = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>): void => {
        const element = event.target as HTMLSpanElement;
        const newSortKey = element.innerText.toLowerCase();

        if (sortKey !== newSortKey && newSortKey !== 'date') setSortSettings({ sortKey: newSortKey, sortOrder: 'asc' });
        else if (sortKey !== newSortKey && newSortKey === 'date')
            setSortSettings({ sortKey: 'date', sortOrder: 'desc' });
        else
            sortOrder === 'asc'
                ? setSortSettings({ sortKey, sortOrder: 'desc' })
                : setSortSettings({ sortKey, sortOrder: 'asc' });
    };

    return (
        <div className="inbox-header">
            <span className="inbox-header__from" onClick={selectSorting}>
                From
            </span>
            <span className="inbox-header__to" onClick={selectSorting}>
                To
            </span>
            <span className="inbox-header__subject" onClick={selectSorting}>
                Subject
            </span>
            <span className="inbox-header__date" onClick={selectSorting}>
                Date
            </span>
        </div>
    );
};

export default InboxHeader;
