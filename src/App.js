import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { PageLoad, PageScroller } from './shared/components';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import './App.scss';
import { PageFooter } from './shared/components';

class App extends Component {
  Modules = {};
  modulePath = './modules/';
  // 模块名称( 第一个是 Home 页； 最后一个是 Err 页)
  moduleNames = ['Home', 'Account'];
  
  
  componentWillMount(){
    this.moduleNames.forEach((name)=>{
      this.Modules[name] = Loadable({
        loader: () => import(`${ this.modulePath }${ name.toLowerCase() }`),
        loading: PageLoad
      });
    });
  }

  render() {
    return (
      <div className="page-wrapper">
        <Router>
          <React.Fragment>
            <PageScroller hasHeader hasFooter>
                <div>
                  <Switch>
                    {/* 空路径重定向到首页 */}
                    <Route exact path="/" >
                      <Redirect to={ '/' + this.moduleNames[0].toLowerCase() } />
                    </Route>

                    {
                      this.moduleNames.slice(0, this.moduleNames.length-1).map((name,index)=>{
                        return (
                          <Route key={index} path={ '/' + name.toLowerCase() } component={this.Modules[name]} ></Route>
                        );
                      })
                    }

                    {/* 未匹配显示错误页 */}
                    {/* <Route component={this.Modules.Err} ></Route> */}
                  </Switch>
                </div>
            </PageScroller>

            <PageFooter />
            
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
