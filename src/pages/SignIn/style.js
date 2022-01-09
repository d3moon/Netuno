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
   padding-top: 150px;
   display: flex;
   justify-content: space-around;
`

export const BannerLogo = styled.div`
  display: flex;
  flex-direction: column;
 
  img{
    width: 426px;
    height: 128px;
  }

`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
 
     h1{
       margin-top: -90px;
       font-family: Fira Sans;
       font-size: 50px;
       font-weight: normal;
       text-align: center;
       margin-bottom: 24px;
      }

      > p{
        font-family: Fira Sans;
        font-size: 20px;
        text-align: center;
        font-weight: 300;
        margin-bottom: 28px;

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
          }
        }
        
           .choose > .before{
             width: 50px;
             height: 1px;
             background: white;
             position: relative;
             top: 14px;
             left: 60px;
            }

            .choose > .after{
            width: 50px;
            height: 1px;
            background: white;
            position: relative;
            left: 290px;
            bottom: 10px;
          }

          .icons{
            margin-top: 10px;
            display: flex;
            justify-content: center;


            img{
            cursor: pointer;
            border: 2px solid #FFF;
            border-radius: 8px;
            padding: 10px 35px;
            margin: 0 20px;
            width: 30px;
            height: 30px;
          }

        }




`