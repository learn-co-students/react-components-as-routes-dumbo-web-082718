import React, {Component} from 'react'


export default class Login extends Component {
  render(){
  return(
    <div>
      <form>
        <div>
          <input type='text' name='username' placeholder='username'/>
          <label htmlFor='username'>Username</label>
        </div>
        <div>
          <input type='password' name='password' placeholder='password'/>
          <label type='password'>Password</label>
        </div>
        <input type='submit' value='login'/>
      </form>
    </div>
  )
  }
}
