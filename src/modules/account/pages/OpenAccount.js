import React from 'react';
import { PageHeader, PageContent } from '../../../shared/components';

class OpenAccount extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <PageContent>
                <PageHeader title="首页" >
                    <div className="left">
                        <i>分类</i>
                    </div>
                    <div className="right">
                        <i>分享</i>
                    </div>
                </PageHeader>
            </PageContent>
        ) 
    }
}

export default OpenAccount;