import React from 'react';
import './Categories.scss';
// import { connect } from 'react-redux';

export function Categories({category}){
    
    const categories = [
        { 
            icon:'',
            title:'装机必备'
        },
        { 
            icon:'',
            title:'时下热门'
        },
        { 
            icon:'',
            title:'一部精选'
        },
        { 
            icon:'',
            title:'热游推荐'
        },
        { 
            icon:'',
            title:'榜单'
        },
    ];

    return (

        <ul className="categories">
            {
                categories.map((category, index)=> (
                    <li key={`category-${index}`}>
                        <img src="" alt=""/>
                        <h4>{ category.title }</h4>
                    </li>
                ))
            }
        </ul>
    )
}