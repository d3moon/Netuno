import React from 'react'
import {Container, BannerLogo, Content} from './style'
import Logo from '../../assets/Logo.png'
import VisibilityIcon from '../../assets/Vector.png'
  
const SignIn = () => {  
  return (
    <>
    <Container>
      <BannerLogo>
        <img src={Logo} alt="Logo-Netuno" />
      </BannerLogo>
      <Content>
        <h1>Be a Member</h1>
        <p>Welcome to next future</p>
        <form action="">
          <input type="email" placeholder='Email'/>
          <div>
            <input type="password" placeholder='Password'/>
            <img src={VisibilityIcon} alt="Visibility" />
            </div>
            <div>
            <input type="password" placeholder='Password'/>
            <img src={VisibilityIcon} alt="Visibility" />
            </div>
            <input type="text" placeholder='Username'/>
          <button type="submit">Sign Up</button>
        </form>            
      </Content>
    </Container>
    </>
  )
}

export default SignIn