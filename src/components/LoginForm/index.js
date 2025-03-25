import {Component} from 'react'
import Cookies from 'js-cookie'
import mainContext from '../../context'

import {
  LoginPage,
  Form,
  Label,
  Input,
  FormItem,
  LoginButton,
  ErrorMsg,
  Img,
} from '../../styledComponent'

class LoginForm extends Component {
  state = {username: '', password: '', showPassword: false, error: ''}

  handleCheckboxChange = () => {
    this.setState(prev => ({showPassword: !prev.showPassword}))
  }

  usernameChange = event => {
    this.setState({username: event.target.value})
  }

  passwordChange = event => {
    this.setState({password: event.target.value})
  }

  submitFormSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  submitFormFailure = msg => {
    this.setState({error: msg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const details = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(details),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.submitFormSuccess(data.jwt_token)
    } else {
      this.submitFormFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, showPassword, error} = this.state
    return (
      <mainContext.Consumer>
        {value => {
          const {light} = value
          return (
            <LoginPage light={light}>
              <Form onSubmit={this.onSubmitForm} light={light}>
                <Img
                  src={
                    light
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  }
                />
                <FormItem light={light}>
                  <Label htmlFor="username" light={light}>
                    USERNAME
                  </Label>
                  <Input
                    id="username"
                    type="input"
                    placeholder="Username"
                    value={username}
                    onChange={this.usernameChange}
                  />
                </FormItem>
                <FormItem>
                  <Label htmlFor="password" light={light}>
                    PASSWORD
                  </Label>
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={this.passwordChange}
                  />
                </FormItem>
                <FormItem>
                  <Label light={light}>
                    <input
                      type="checkbox"
                      checked={showPassword}
                      onChange={this.handleCheckboxChange}
                    />
                    <span>Show Password</span>
                  </Label>
                </FormItem>
                <LoginButton type="submit">Login</LoginButton>
                {error ? (
                  <FormItem>
                    <ErrorMsg>*{error}</ErrorMsg>
                  </FormItem>
                ) : null}
              </Form>
            </LoginPage>
          )
        }}
      </mainContext.Consumer>
    )
  }
}

export default LoginForm
