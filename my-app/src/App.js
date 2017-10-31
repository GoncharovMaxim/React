import React from 'react';

import  AddPostForm from './Components/AddPostForm/js/AddPostForm';
import  NewPost from './Components/NewPost/js/NewPost';
import  Banner from './Components/Banner/js/Banner';
import  Post from './Components/Post/js/Post';
import './App.css';


  class App extends React.Component{

    constructor(props) {
      super(props);
      this.state = {posts: {}};
    }
    addPost = (post) => {
      var timestamp = (new Date()).getTime();
      // update the state object
      this.state.posts['post-' + timestamp] = post;
      // set the state
      this.setState({posts: this.state.posts});
    };

    deletePost = (index, post) => {
      console.log('qwe', this.state.posts, index, post);
      delete this.state.posts[index]
      this.setState({
        posts: this.state.posts
      })

    };
    updatePostText = (text, key) => {
      var ttt = this.state.posts;
      ttt[key] = text;
      this.setState({posts: ttt});
    };
    renderPost = (key) => {
      return <NewPost key={key} index={key} update={this.updatePostText} delPost={this.deletePost}
                      details={this.state.posts[key]}/>
    };

    render() {
      var imgOne = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Balaton_Hungary_Landscape.jpg/1024px-Balaton_Hungary_Landscape.jpg";
      var imgTwo = "https://c2.staticflickr.com/8/7432/9087815445_1a14743549_b.jpg";
      var imgThree = "https://c2.staticflickr.com/6/5738/23929500196_b6a1ce1dfb_b.jpg";
      var imgFour = "https://pixabay.com/static/uploads/photo/2015/09/14/19/15/aerial-landscape-939963_960_720.jpg";
      var dummyPost = "Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.";
      return (
        <div>
          <Banner/>
          <div className="row medium-8 large-7 columns">
            <Post ptitle="Flux flack" pimg={imgOne} date="Nov 2, 2015" postbody={dummyPost} author="Fred Armisen"
                  comments="2" tags=""/>
            <Post ptitle="Inline Styles Aren't Necessary" pimg={imgTwo} postbody={dummyPost} date="Aug 15, 2015"
                  author="Amy Schumer" comments="5"/>
            <Post ptitle="Webpack and ES6" pimg={imgThree} date="Mar 9, 2015" postbody={dummyPost}
                  author="Victoria Bell" comments="3"/>
            <Post ptitle="No More Goobers" pimg={imgFour} date="Jan 11, 2015" postbody={dummyPost}
                  author="Jack Sherlock" comments="7"/>

            <div className="list-of-posts">
              {Object.keys(this.state.posts).map(this.renderPost)}
            </div>
            <AddPostForm addPost={this.addPost}/>
          </div>
        </div>
      )
    }

  }









//instead of ReactDOM like in the video:
//ReactDOM.render(<App />, document.getElementById('root'));


//polyfill for key
// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  if(!Object.keys) {
    Object.keys = (function () {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
      hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
      dontEnums = [
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'constructor'
      ],
      dontEnumsLength = dontEnums.length;

    return function (obj) {
      if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}

//header scroll stuff
window.onscroll = function (e) {
  var nav = document.getElementsByClassName("top-bar")[0],
    banner = document.getElementsByClassName("big-banner")[0],
    range = 70,
    scrollTop = document.body.scrollTop;

  if (scrollTop > range) {
    nav.classList.add("scrollNav");
    banner.classList.add("blurred");
  }
  else {
    nav.classList.remove("scrollNav");
    banner.classList.remove("blurred");
  }
};



export default App;
