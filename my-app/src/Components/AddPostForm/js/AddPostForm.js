import React from 'react';


class AddPostForm extends React.Component{
  createPost = (event) => {

    event.preventDefault();
    // take the data from the form and create an object

    var post = {
      title: this.refs.title.value,
      name: this.refs.name.value,
      desc: this.refs.desc.value,
      image: this.refs.image.value
    };

    // add the post to the App State
    this.props.addPost(post);
    this.refs.postForm.reset();
  };
  render() {
    return (
      <div className="callout secondary form-area">
        <h5>Add a Post to the React Blog</h5>
        <form className="post-edit" ref="postForm" onSubmit={this.createPost}>
          <label>Post Title
            <input type="text" ref="title" placeholder="Post Title" required/>
          </label>
          <label>Author Name
            <input type="text" ref="name" placeholder="Full Name required" required/>
          </label>
          <label>Post Body
            <textarea
              ref="desc"
              placeholder="Write your post here" required/>
          </label>
          <label>Image URL - <span className="highlight">use this one to test 'https://bit.ly/1P9prpc'</span>
            <input type="url" ref="image" placeholder="The URL of the featured image for your post" required/>
          </label>
          <button type="submit" className="button">Add Post</button>
        </form>
      </div>
    )
  }
}

export default AddPostForm;