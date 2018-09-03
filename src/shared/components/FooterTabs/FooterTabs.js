import React from 'react';
import './FooterTabs.scss';
// import { connect } from 'react-redux';
class FooterTabs extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { tabs, activeTab, onSelect } = this.props;
        return (
            <ul className="footer-tabs">
                {
                    tabs.map((tab,index)=>(
                        <li
                            key={`tab-${index}`}
                            onClick={ ()=>{ onSelect(index) } }
                            className={ activeTab == index?'active':'' }
                        >
                            <img src="" alt=""/>
                            <h4>{ tab.title }</h4>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default FooterTabs;