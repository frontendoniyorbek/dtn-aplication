import { useState } from 'react';
import logo from '../constants/donyorbek.png'
import {Input} from '../ui'
import { useSelector, useDispatch } from 'react-redux';
import { loginUserStart } from '../slice/auth';

const Login = () => {
  const [email, setEmail] =  useState('')
  const [password, setPassword] =  useState('')
  const dispatch = useDispatch()
  const {isLoading} = useSelector(state => state.auth)

  const loginHandler = (e) => {
    e.preventDefault()
    dispatch(loginUserStart())
  }

  return (
    <div className="text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form>
          <img
            className="mb-4"
            src={logo}
            alt=""
            width="72"
            height="72"
          />
          <h1 className="h3 mb-2 fw-normal">Please login</h1>

          <Input label={'Email address'} state={email} setState={setEmail}/>
          <Input type={'password'} label={'Password'} state={password} setState={setPassword}/>

          <button className="w-100 btn btn-lg btn-primary mt-2" disabled={isLoading} type="submit" onClick={loginHandler}>
            {isLoading ? 'loading...' : 'login'}
          </button>
        </form>
      </main>
    </div>
  )
}

export default Login