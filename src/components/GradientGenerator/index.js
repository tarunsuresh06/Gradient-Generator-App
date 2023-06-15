import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  MainContainer,
  Heading,
  SubHeading,
  Label,
  ColorInput,
  CustomColorContainer,
  GradientDirectionList,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    direction: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
    gradientDetails: {
      gdColor1: '#8ae323',
      gdColor2: '#014f7b',
      gdDirection: gradientDirectionsList[0].value,
    },
  }

  onChangeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  handleDirection = value => {
    this.setState({direction: value})
  }

  onClickGenerate = () => {
    const {direction, color1, color2} = this.state

    this.setState({
      gradientDetails: {
        gdColor1: color1,
        gdColor2: color2,
        gdDirection: direction,
      },
    })
  }

  render() {
    const {direction, color1, color2, gradientDetails} = this.state

    const {gdColor1, gdColor2, gdDirection} = gradientDetails

    return (
      <MainContainer
        data-testid="gradientGenerator"
        direction={gdDirection}
        color1={gdColor1}
        color2={gdColor2}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <SubHeading>Choose Direction</SubHeading>

        <GradientDirectionList>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              key={eachDirection.directionId}
              isActive={eachDirection.value === direction}
              handleDirection={this.handleDirection}
              gradientDirectionDetails={eachDirection}
            />
          ))}
        </GradientDirectionList>

        <SubHeading>Pick the Colors</SubHeading>
        <CustomColorContainer>
          <div>
            <Label>{color1}</Label>
            <ColorInput
              type="color"
              value={color1}
              onChange={this.onChangeColor1}
            />
          </div>
          <div>
            <Label>{color2}</Label>
            <ColorInput
              type="color"
              value={color2}
              onChange={this.onChangeColor2}
            />
          </div>
        </CustomColorContainer>

        <GenerateButton type="button" onClick={this.onClickGenerate}>
          Generate
        </GenerateButton>
      </MainContainer>
    )
  }
}

export default GradientGenerator
