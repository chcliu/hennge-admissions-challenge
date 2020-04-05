import React, { useRef } from 'react';
import { SetSortSettings, SortSettings } from 'types';

const DEFAULT_ICON_CLASS_NAME = 'inbox-header__icon';
const ROTATED_ICON_CLASS_NAME = 'inbox-header__icon inbox-header__icon-rotated';

interface Props {
    setSortSettings: SetSortSettings;
    sortSettings: SortSettings;
}

const InboxHeader: React.FC<Props> = ({ setSortSettings, sortSettings }) => {
    const imgRefs: {
        [key: string]: React.RefObject<HTMLImageElement>;
    } = {
        from: useRef<HTMLImageElement>(null),
        to: useRef<HTMLImageElement>(null),
        subject: useRef<HTMLImageElement>(null),
        date: useRef<HTMLImageElement>(null),
    };

    const { sortKey, sortOrder } = sortSettings;

    const onIconClick = (): void => {
        const { current } = imgRefs[sortKey];
        if (current) {
            const { className } = current;
            current.className =
                className === DEFAULT_ICON_CLASS_NAME ? ROTATED_ICON_CLASS_NAME : DEFAULT_ICON_CLASS_NAME;
        }

        sortOrder === 'asc'
            ? setSortSettings({ sortKey, sortOrder: 'desc' })
            : setSortSettings({ sortKey, sortOrder: 'asc' });
    };

    const onTextClick = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>): void => {
        const textNode = event.target as HTMLSpanElement;

        const newSortKey = textNode.innerText.toLowerCase();

        if (sortKey === newSortKey) {
            onIconClick();
            return;
        }

        const { current: oldIcon } = imgRefs[sortKey];
        const { current: newIcon } = imgRefs[newSortKey];

        if (oldIcon) oldIcon.className = 'hidden';
        if (newIcon) newIcon.className = DEFAULT_ICON_CLASS_NAME;

        const newSortSettings: SortSettings =
            newSortKey !== 'date'
                ? { sortKey: newSortKey, sortOrder: 'asc' }
                : { sortKey: newSortKey, sortOrder: 'desc' };

        setSortSettings(newSortSettings);
    };

    return (
        <div className="inbox-header">
            <div className="inbox-header__from">
                <span onClick={onTextClick}>From</span>
                <img
                    className="hidden"
                    onClick={onIconClick}
                    ref={imgRefs.from}
                    src="../../public/images/icon_arrow01.svg"
                />
            </div>
            <div className="inbox-header__to">
                <span className="clickable" onClick={onTextClick}>
                    To
                </span>
                <img
                    className="hidden"
                    onClick={onIconClick}
                    ref={imgRefs.to}
                    src="../../public/images/icon_arrow01.svg"
                />
            </div>
            <div className="inbox-header__subject">
                <span className="clickable" onClick={onTextClick}>
                    Subject
                </span>
                <img
                    className="hidden"
                    onClick={onIconClick}
                    ref={imgRefs.subject}
                    src="../../public/images/icon_arrow01.svg"
                />
            </div>
            <div className="inbox-header__date">
                <span className="clickable" onClick={onTextClick}>
                    Date
                </span>
                <img
                    className={DEFAULT_ICON_CLASS_NAME}
                    onClick={onIconClick}
                    ref={imgRefs.date}
                    src="../../public/images/icon_arrow01.svg"
                />
            </div>
        </div>
    );
};

export default InboxHeader;
