import React from 'react';
import './PageSection.scss';
// import { connect } from 'react-redux';

export function PageSection({ children }){
    return (
        <div className="page-section">
            { children || '' }
        </div>
    )
}