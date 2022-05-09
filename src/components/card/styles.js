import styled from 'styled-components/native'

const Container = styled.View`
  display: flex;
  flex-direction: row;  
  width: 90%;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 20px 10px;
`

const Thumbnail = styled.View`
  width: 39%;
  min-width: 100px;
`

const ThumbnailImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 10px;
`

const Content = styled.View`
  width: 60%;
`

const Title = styled.Text`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 18px;
  color: ${props => props.theme.PRIMARY_COLOR};
`

const DateView = styled.Text`
  width: 110px;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
  color: ${props => props.theme.PRIMARY_COLOR};
`

const Description = styled.Text`
  margin-top: 10px;
  max-height: 100px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  color: ${props => props.theme.TEXT_LIGHT};
`

const FooterBottons = styled.View`
  width: 100%;
  height: 40px;
  margin-top: 20px;  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Counter = styled.Text`
  position: absolute;
  top: 10%;
  left: 30%;
  font-weight: 400;
  font-size: 24px;
  color: ${props => props.theme.SECONDARY_COLOR};
`
const Frame = styled.View`
  border: 3px solid ${props => props.theme.SECONDARY_COLOR};
  width: 50px;
  height: 50px;
  transform: rotate(45deg)
`

const Badge = styled.View`
  top: -10px;
  right: -10px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  height: 90px;
`

const Label = styled.Text`
  background-color:${props => props.theme.SECONDARY_COLOR};
  color: #FFF;
  font-size: 18px;
  text-transform: uppercase;
  padding: 4px 15px;
  margin-top: -10px;
`

export {
  Container,
  Thumbnail,
  ThumbnailImage,
  Content,
  Title,
  DateView,
  Description,
  FooterBottons,
  Counter,
  Badge,
  Label,
  Frame
}