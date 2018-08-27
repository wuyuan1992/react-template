import React from 'react';
import './PageContent.scss';

export function PageContent({children}){
    return (
        <div className='page-content'>
            { children || '' }
        </div>
    )
}