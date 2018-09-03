import React from 'react';
import { Link } from 'react-router-dom';
import './PageFooter.scss';
import FooterTabs from '../FooterTabs/FooterTabs';

export class PageFooter extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            activeTab: 0,
            tabs: [
                {
                    title:'推荐',
                    path:'/recmmond'
                },
                {
                    title:'分类',
                    path:'/sort'
                },
                {
                    title:'游戏',
                    path:'/game'
                },
                {
                    title:'搜索',
                    path:'/search'
                },
                {
                    title:'应用管理',
                    path:'/manage'
                }
            ]
        }
    }

    selectTab(activeTab){
        this.setState({
            activeTab
        })
    }

    render(){
        return (
            <div className='page-footer'>
                <FooterTabs
                    tabs={ this.state.tabs }
                    activeTab={ this.state.activeTab }
                    onSelect = { (activeTab)=>{ this.selectTab(activeTab) } }
                />
            </div>
        )
    }
}