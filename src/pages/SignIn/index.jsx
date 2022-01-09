import React from 'react'
import {SignUp, Container, BannerLogo, Content} from './style'
import Google from '../../assets/google.svg'
import Apple from '../../assets/apple.svg'
import Logo from '../../assets/Logo.png'
import VisibilityIcon from '../../assets/Vector.png'
import {Link} from 'react-router-dom'
  
const SignIn = () => {  
  return (
    <>
     <SignUp><p>Not a member? <Link to="/register">Register now</Link></p></SignUp>
    <Container>
      <BannerLogo>
        <img src={Logo} alt="Logo-Netuno" />
      </BannerLogo>
      <Content>
        <h1>Hello Friend</h1>
        <p>Welcome to next future</p>
        <form action="">
          <input type="text" placeholder='Enter username'/>
          <div>
            <input type="text" placeholder='Password'/>
            <img src={VisibilityIcon} alt="Visibility" />
            </div>
          <a href="#" alt="">Recovery Password</a>
          <button type="submit">Sign In</button>
        </form>       
        <p className='choose'>
          <div className='before'></div>
          Or continue with 
          <div className='after'></div>
          </p>  
        <div className='icons'>
          <img src={Google} alt="Google" />
        <img src={Apple} alt="Apple" />
        </div>
     
      </Content>
    </Container>
    </>
  )
}

export default SignIn