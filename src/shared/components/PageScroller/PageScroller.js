import React from 'react';
import './PageScroller.scss';

export function PageScroller({hasHeader, hasFooter, children}){
    return (
        <div className={`page-scroller ${hasHeader?'hasHeader':''} ${hasFooter?'hasFooter':''}`}>
            { children || '' }
        </div>
    )
}