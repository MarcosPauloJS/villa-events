import styled from 'styled-components/native'
import PropTypes from 'prop-types';

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${props => props?.bgColor ? props.bgColor : props?.theme?.PRIMARY_COLOR};
  width: auto;
  height: auto;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: ${props => props?.color ? props.color : '#FFF'};
  font-size: 14px;
  text-align: center;
`;

function CustomButton({onPress, color, bgColor, text}) {
  return (
    <ButtonContainer
      onPress={onPress}
      bgColor={bgColor}
    >
      <ButtonText color={color}>
        {text}
      </ButtonText>
    </ButtonContainer>
  );
}


CustomButton.propTypes = {
  onPress: PropTypes.func,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  text: PropTypes.string
};

CustomButton.defaultProps = {
  onPress: ()=> {},
  bgColor: '',
  color: '',
  text: ''
};

export default CustomButton