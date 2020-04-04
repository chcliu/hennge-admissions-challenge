import React from 'react';
import moment from 'moment';

import { EmailType } from '../types/index';
import { DEFAULT_DATE_FORMAT, SAME_YEAR_DATE_FORMAT, SAME_DAY_DATE_FORMAT } from '../utils/date-helper';

const Email: React.FC<EmailType> = ({ from, to, subject, body, messageCount, hasAttachment, date }) => {
    const dateMoment = moment(date);
    const isSameDay = moment().isSame(dateMoment, 'day');
    const isSameYear = moment().isSame(dateMoment, 'year');

    let format;
    if (isSameDay) format = SAME_DAY_DATE_FORMAT;
    else format = isSameYear ? SAME_YEAR_DATE_FORMAT : DEFAULT_DATE_FORMAT;

    return (
        <div className="email">
            <span className="email__from">{from}</span>

            <span className="email__to">{to}</span>

            {Boolean(messageCount) && <span className="email__message-count">{`+${messageCount}`}</span>}

            <span className="email__subject">{subject}</span>

            {hasAttachment && <img src="../../public/images/icon_clip.svg" className="email__attachment" />}

            <span className="email__date">{dateMoment.format(format)}</span>
        </div>
    );
};

export default Email;
