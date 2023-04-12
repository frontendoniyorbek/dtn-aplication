import { useState } from 'react';
import logo from '../constants/donyorbek.png'
import {Input} from '../ui'

const Register = () => {

  const [name, setName] =  useState('')
  const [email, setEmail] =  useState('')
  const [password, setPassword] =  useState('')
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
          <h1 className="h3 mb-2 fw-normal">Please register</h1>

          <Input label={'Username'} state={name} setState={setName}/>
          <Input type={'email'} label={'Email address'} state={email} setState={setEmail}/>
          <Input type={'password'} label={'Password'} state={password} setState={setPassword}/>

          <button className="w-100 btn btn-lg btn-primary mt-2" type="submit">
            Register
          </button>
        </form>
      </main>
    </div>
  );
};

export default Register;
