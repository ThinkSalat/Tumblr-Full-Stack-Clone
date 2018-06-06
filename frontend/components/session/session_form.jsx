import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }
  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }
  render() {
    
    return(
      <div className="session-page">
        <div className="session-page-form">
          <div className="session-page-form-logo"/>
          <form className='session-form' onSubmit={this.handleSubmit}>
            <input type='text' placeholder='Username' onChange={this.update('username')} value={this.state.username}/>
            <input type="text" placeholder="Email" onChange={this.update('email')} value={this.state.email}/>
            <input type="password" placeholder="Password" onChange={this.update('password')} value={this.state.password}/>
            {this.renderErrors()}
            <input type="submit" value="Sign Up"/>
          </form>
            {/* //github logo
            //linked in logo
            //website logo */}
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);