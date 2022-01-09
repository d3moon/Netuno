import styled from 'styled-components'

export const SignUp = styled.p`
    margin: 70px 90px;
    display: flex;
    flex-direction: row-reverse;

    a{
    text-decoration: none;
    font-family: Fira Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: #2AA5FF
    }
;

`

export const Container = styled.div`
   margin-top: 250px;
   display: flex;
   justify-content: space-around;
`

export const BannerLogo = styled.div`
  display: flex;
  flex-direction: column;
 
  img{
    width: 426px;
    height: 128px;
    margin-top: 80px;
  }

`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
 
     h1{
       margin-top: -80px;
       font-family: Fira Sans;
       font-size: 50px;
       font-weight: normal;
       text-align: center;
       margin-bottom: 16px;
      }

      > p{
        font-family: Fira Sans;
        font-size: 20px;
        text-align: center;
        font-weight: 300;
        margin-bottom: 50px;

       }

       form{
          display: flex;
          flex-direction: column;

          input{
            width: 360px;
            height: 70px;
            place-content: center;
            margin-bottom: 20px;
            background: #FFFFFF;
            border-radius: 10.9722px;
            border: 0;

            &::placeholder{
              padding-left: 20px;
              font-family: Fira Sans;
              font-style: normal;
              font-weight: bold;
              font-size: 14px;
              line-height: 22px;
              color: #D8DCEA;
            }
          }

          a{
            font-family: Fira Sans;
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            color: #473D45;
            text-align: right;
            margin-bottom: 20px;
            margin-right: 30px;
           }

          button{
            color: white;
            margin-bottom: 20px;
            width: 360px;
            height: 70px;
            text-align: center;
            background: #2AA5FF;
            border-radius: 10px;
            border: 0;
            font-weight: bold;
            font-size: 16px;
          }
        }
        

        }




`