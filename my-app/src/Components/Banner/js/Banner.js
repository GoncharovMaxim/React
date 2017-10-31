import React from 'react';
import  Nav from '../../Nav/js/Nav';

class Banner extends React.Component{

  render(){
    return (
      <div>
        <Nav/>
        <div className="big-banner">
          <div className="callout large primary">
            <div className="row column text-center">
              <h1>React Blog</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Banner;