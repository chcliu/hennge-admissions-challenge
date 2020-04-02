import React from 'react';

const InboxHeader: React.FC = () => {
    return (
        <div className="inbox-header">
            <span className="inbox-header__from">From</span>
            <span className="inbox-header__to">To</span>
            <span className="inbox-header__subject">Subject</span>
            <span className="inbox-header__date">Date</span>
        </div>
    );
};

export default InboxHeader;
