import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import HeaderNav from './header_nav';

const mapStateToProps = (state, ownProps) => {
  return {
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
  };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(HeaderNav));