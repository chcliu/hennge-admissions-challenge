'use strict';

import _ from 'lodash';

import { EmailType } from '../types/index';

const firstPossibleDate = new Date('2019/01/01').valueOf();
const lastPossibleDate = new Date().valueOf();

const generateRandomEmail = (): string => `${_.uniqueId('aa')}@example.com`;
const generateRandomSubject = (): string | undefined =>
    _.sample([
        'This is the subject for this email.',
        '[web:333] "Web Contact"',
        '[Github] Logout page',
        '[HR-887 (Revised: Office Expansion Project Team)] Notice of official certificate of eligibility in processing necessary documents',
    ]);
const generateRandomMessageCount = (): number | undefined => _.sample([0, 0, _.random(1, 9)]);
const generateRandomAttachmentBoolean = (): boolean | undefined => _.sample([true, false]);
const generateSmashMouthLyrics = (): string =>
    "someBODY once told me the world is gonna roll me\nI ain't the sharpest tool in the sheeeeeed\nShe was looking kinda dumb with her finger and her thumb\nIn the shape of an L on her forehead";
const generateRandomEmailDate = (): Date => new Date(_.random(firstPossibleDate, lastPossibleDate));

export const getEmailData = (): Array<EmailType> => {
    const emailData = _.times(30, () => ({
        from: generateRandomEmail(),
        to: generateRandomEmail(),
        subject: generateRandomSubject(),
        messageCount: generateRandomMessageCount(),
        hasAttachment: generateRandomAttachmentBoolean(),
        body: generateSmashMouthLyrics(),
        date: generateRandomEmailDate(),
    }));

    // This is optional and only serves the purpose to always have an email on the current date.
    emailData.push({
        from: generateRandomEmail(),
        to: generateRandomEmail(),
        subject: generateRandomSubject(),
        messageCount: generateRandomMessageCount(),
        hasAttachment: generateRandomAttachmentBoolean(),
        body: generateSmashMouthLyrics(),
        date: new Date(),
    });

    return emailData;
};
