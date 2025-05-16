import React, { useEffect } from 'react';

const TwitterEmbed: React.FC = () => {
    useEffect(() => {
        // @ts-ignore
        if (window.twttr && window.twttr.widgets) {
            // @ts-ignore
            window.twttr.widgets.load();
        }
    }, []);

    return (
        <blockquote className="twitter-tweet">
            <a href="https://x.com/0xgrimjow/status/1912919771404026239?s=46"></a>
        </blockquote>
    );
};

export default TwitterEmbed; 