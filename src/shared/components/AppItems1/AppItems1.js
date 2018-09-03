import React from 'react';
import './AppItems1.scss';
// import { connect } from 'react-redux';

export function AppItems1(){
    
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

        <ul className="app-items-1">
            {
                apps.map((app, index)=>{
                    const {icon, title, category, features, size} = app;
                    return (
                        <li className="app-item-1" key={`app-${index}`}>
                            <img src={`${icon}.png`} alt=""/>
                            <div className="content">
                                <h3>{ title }</h3>
                                <p>{ category }</p>
                                <span>{ features }</span>
                            </div>
                            <div className="install">
                                <button>安装</button>
                                <span className="size">{ size }</span>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}