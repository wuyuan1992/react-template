import React from 'react';
import './PageHeader.scss';

export function PageHeader({title, children}){
    return (
        <div className='page-header'>
            <div className="left">
                { children[0] }
            </div>

            <div className="center">{title}</div>

            <div className="right">
                { children[1] }
            </div>
        </div>
    )
}