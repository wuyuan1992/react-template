import React from 'react';
import './AppItems2.scss';
// import { connect } from 'react-redux';

export function AppItems2(){
    
    const apps = [
        { 
            icon:'',
            title:'英语流利说',
            category:'交通出行',
            features:`让你"忍不住开口说英语"`,
            size:'67.3MB'
        },
        { 
            icon:'',
            title:'英语流利说',
            category:'交通出行',
            features:`让你"忍不住开口说英语"`,
            size:'67.3MB'
        },
        { 
            icon:'',
            title:'英语流利说',
            category:'交通出行',
            features:`让你"忍不住开口说英语"`,
            size:'67.3MB'
        },
    ];

    return (

        <ul className="app-items-2">
            {
                apps.map((app, index)=>{
                    const {icon, title, category, features, size} = app;
                    return (
                        <li className="app-item-2" key={`app-${index}`}>
                            <img src={`${icon}.png`} alt=""/>
                            <h3>{ title }</h3>
                            <p>{ category }</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}