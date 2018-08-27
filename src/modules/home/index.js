import React, {Component} from 'react';
import { PageContent, PageHeader } from '../../shared/components';

export default class Home extends Component{
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