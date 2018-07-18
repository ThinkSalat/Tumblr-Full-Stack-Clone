import { connect } from 'react-redux';

import UserProfile from './user_profile';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = ({ entities: { users, posts }, session: { id }}, { match: { params: { userId } } }) => {
  return {
    posts,
    user: users[userId],
    userId,
    currentUser: users[id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(UserProfile);