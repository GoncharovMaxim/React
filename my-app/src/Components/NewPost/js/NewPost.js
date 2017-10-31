import React from 'react';
import h from '../../../utils/utils';

class NewPost extends React.Component{
  deletePost = () => {
    this.props.delPost(this.props.index, this.props.details);
  };
  edit = () => {
    this.setState({edit: true})
  };
  /*    getInitialState() {
        return {edit: false}
      }*/
  constructor(props) {
    super(props);
    this.state = {edit: false};
  }
  save = () => {
    var newValue = {
      title: this.refs.title.value,
      desc: this.refs.desc.value,
      name: this.refs.name.value,
      image: this.props.details.image
    };
    this.props.update(newValue, this.props.index);
    this.setState({edit: false})
  };
  renderEdit() {
    var details = this.props.details;
    return (
      <div className="blog-post">
        <textarea ref="title" defaultValue={details.title} className="ptitle"></textarea>
        <textarea defaultValue={h.getTime()} className="ptitle"></textarea>
        <img className="thumbnail" src={details.image} alt={details.name}/>
        <textarea ref="desc" defaultValue={details.desc}></textarea>

        <button className="btn-save" onClick={this.save}>Save post</button>

        <div className="callout callout-post">
          <ul className="menu simple">
            <li><textarea ref="name" defaultValue={details.name}></textarea></li>
            <li><a href="#">Comments: 0</a></li>
            <li><a href="#">Tags: {h.getTaggedName()}</a></li>
          </ul>
        </div>
      </div>
    )
  }
  renderNorm() {
    var details = this.props.details;
    return (
      <div className="blog-post">
        <h3 className="ptitle">{details.title}
          <small>{h.getTime()}</small>
        </h3>
        <img className="thumbnail" src={details.image} alt={details.name}/>
        <p>{details.desc}</p>

        <button className="btn-delete" onClick={this.deletePost}>Delete</button>
        <button className="btn-edit" onClick={this.edit}>Edit post</button>

        <div className="callout callout-post">
          <ul className="menu simple">
            <li><a href="#">Author: {details.name}</a></li>
            <li><a href="#">Comments: 0</a></li>
            <li><a href="#">Tags: {h.getTaggedName()}</a></li>
          </ul>
        </div>
      </div>
    )
  }
  render() {
    if (this.state.edit) {
      return this.renderEdit();
    } else {
      return this.renderNorm();
    }
  }
}

export default NewPost;