import React from 'react';
import moment from 'moment';

import { EmailType } from '../types/index';

const Email: React.FC<EmailType> = ({ from, to, subject, body, messageCount, hasAttachment, date }) => {
    const dateMoment = moment(date);
    const isSameDay = !moment().diff(dateMoment, 'days');
    const isSameYear = !(new Date().getFullYear() - date.getFullYear());

    let format;
    if (isSameDay) format = 'H:mm';
    else format = isSameYear ? 'MMM DD' : 'YYYY/MM/DD';

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
