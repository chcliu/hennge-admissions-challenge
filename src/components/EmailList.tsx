import React, { Dispatch, SetStateAction, useEffect } from 'react';

import { DateRange, EmailType } from '../types/index';
import { getEmailData } from '../utils/email-helper';

import Email from './Email';

interface Props {
    dateRange: DateRange;
    emailCount: number;
    setEmailCount: Dispatch<SetStateAction<number>>;
}

const emailData = getEmailData();

const EmailList: React.FC<Props> = ({ dateRange, emailCount, setEmailCount }) => {
    const { startDate, endDate } = dateRange;

    const filteredEmails = emailData.filter((email) => email.date >= startDate && email.date <= endDate);

    useEffect(() => {
        if (emailCount !== filteredEmails.length) setEmailCount(filteredEmails.length);
    });

    console.log(emailData.map((email) => `${email.date.getFullYear()}/${email.date.getMonth()}`));
    return (
        <div className="email-list">
            {filteredEmails.map((email: EmailType, index: number) => (
                <Email key={index} {...email} />
            ))}
        </div>
    );
};

export default EmailList;
