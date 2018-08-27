import React from 'react';
import { Link } from 'react-router-dom';
import './PageFooter.scss';

export function PageFooter(){
    const tabs = [
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
        },
    ];
    return (
        <ul className='page-footer'>
            {
                tabs.map((tab,index)=>(
                    <li key={`tab-${index}`} className="">
                        {
                            <Link to={tab.path}>{tab.title}</Link>
                        }
                    </li>
                ))
            }
        </ul>
    )
}