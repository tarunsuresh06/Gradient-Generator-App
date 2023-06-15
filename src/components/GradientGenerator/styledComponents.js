import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.color1},
    ${props => props.color2}
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`

export const Heading = styled.h1`
  color: #ededed;
  font-size: 33px;
  font-weight: 500;
`

export const SubHeading = styled.p`
  color: #ededed;
  font-size: 27px;
  font-weight: 400;
`

export const Label = styled.p`
  color: #ededed;
  font-size: 18px;
  font-weight: 400;
  display: block;
  text-align: center;
  margin-bottom: 20px;
`

export const ColorInput = styled.input`
  height: 50px;
  width: 120px;
  border: none;
  background-color: transparent;
`

export const CustomColorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`

export const GradientDirectionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 425px;
  } ;
`

export const GenerateButton = styled.button`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  background-color: #00c9b7;
  min-width: 25px;
  border-radius: 6px;
  border: none;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-left: 15px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-top: 25px;
  outline: none;
  cursor: pointer;
`
