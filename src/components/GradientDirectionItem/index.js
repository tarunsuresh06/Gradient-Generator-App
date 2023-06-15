import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionDetails, handleDirection, isActive} = props

  const {displayText, value} = gradientDirectionDetails

  const onClickDirectionBtn = () => {
    handleDirection(value)
  }

  return (
    <ListItem>
      <DirectionButton
        type="button"
        onClick={onClickDirectionBtn}
        isActive={isActive}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
