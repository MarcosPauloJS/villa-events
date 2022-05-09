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

export {
  Container,
  Thumbnail,
  ThumbnailImage,
  Content,
  Title,
  DateView,
  Description,
  FooterBottons
}