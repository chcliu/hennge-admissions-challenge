import React from 'react';

interface Props {
    emailCount: number;
}

const ResultDisplay: React.FC<Props> = ({ emailCount }) => {
    return (
        <div className="result-display">
            Results: <span className="email-count">{emailCount}</span>mail(s)
        </div>
    );
};

export default ResultDisplay;
