import React from 'react';
import { SessionService } from '../services';

export function sessionWrapper(WrappedComponent, componentName) {
    return class extends React.Component {
      constructor(props) {
        super(props);

        this.session = new SessionService();

        this.state = {
          anim: 'slide-left'
        };
      }
  
      componentWillMount() {
        let query = {};
        let anim = '';
        let session = this.session.get(componentName);

        // 返回不刷新
        // if(this.props.history.action == 'pop' && !this.props.location.query.reload){
        //     query = this.session.get('componentName').prevState;
        // }

        // 返回且刷新
        if(this.props.history.action === 'POP'){
            query = session?session.prevQuery:{};
            anim = 'slide-right';
        }

        // 正常跳转
        if(this.props.history.action === 'PUSH' || this.props.history.action === 'REPLACE'){
            query = this.props.location.query || {};
            // 第一次进入时不需要动画
            // let appEnter = this.session.get('appEnter');
            // anim = appEnter?'':'slide-left';
        }

        this.setState({
            query, anim
        });
      }

      componentWillReceiveProps(prevProps){
        // console.log('----------- prev -----------');
        // console.log(prevProps);
        // console.log('----------------------');
        // console.log('----------- current -----------');
        // console.log(this.props);
        // console.log('----------------------');
      }
  
      componentWillUnmount() {
        let session = this.session.get(componentName);
        this.session.set(componentName, {
            prevQuery: this.props.location.query || (session? session.prevQuery : {}),
            // prevState: this.state
        })
      }
  
      render() {
        return (
          // <div className={`enhance-page-wrapper ${this.state.anim}`}>
            <WrappedComponent
              {...this.props}
              query={this.state.query} 
              className={this.state.anim}
            />
          // </div>
        )
      }
    };
  }