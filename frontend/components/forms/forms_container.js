import { connect } from 'react-redux';

import NewPostForm from './new_post_form';

import { createPost } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  const postType = ownProps.postType;
  return {
    postType,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    form_submit_action: post => dispatch(createPost(post))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(NewPostForm);

