import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export class Anim extends React.Component{

    render(){

        return (
            <ReactCSSTransitionGroup
                transitionName={this.props.animName}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>

                { this.props.children }
            </ReactCSSTransitionGroup>
        )
    }
}