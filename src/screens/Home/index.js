import { Text, View } from 'react-native';
import styled from 'styled-components/native'
import CustomButton from '../../components/Button';
import Card from '../../components/card';

const Container = styled.View`
  padding: 20px;
`
const Events = styled.ScrollView`
  width: 100%;
  margin-top: 20px;
`

const Title = styled.Text`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 24px;
  color: ${props => props.theme.PRIMARY_COLOR};
`

const Description = styled.Text`
  margin-top: 10px;
  max-height: 100px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  color: ${props => props.theme.TEXT_LIGHT};
`

export default function Home() {
  const events = [
    {
      id: 0,
      title: "show da aurora",
      description: "Aurora Aksnes, conhecida profissionalmente apenas como Aurora e às vezes estilizado em caixa alta como AURORA, é uma cantora e compositora norueguesa. Seu EP de estreia \"Running with the Wolves\" foi lançado pela gravadora Decca Records em maio de 2015",
      date: "2022-01-04 10:00",
      thumbnailUrl: "https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/3/2/0/4/32045003a7ad7e1322d79bfdc6a77c4b.jpg",
    },
    {
      id: 1,
      title: "show da aurora",
      description: "Aurora Aksnes, conhecida profissionalmente apenas como Aurora e às vezes estilizado em caixa alta como AURORA, é uma cantora e compositora norueguesa. Seu EP de estreia \"Running with the Wolves\" foi lançado pela gravadora Decca Records em maio de 2015",
      date: "2022-05-15 10:00",
      thumbnailUrl: "https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/3/2/0/4/32045003a7ad7e1322d79bfdc6a77c4b.jpg",
    },
  ]
  
  return (
    <Container>
      <Title>Eventos</Title>
      <Description>Aqui você encontra os eventos em andamento.</Description>

      <Events>
        {events?.map( event => {
          return (
            <Card
              key={event.id}
              id={event.id}
              title={event.title}
              description={event.description}
              date={event.date}
              thumbnailUrl={event.thumbnailUrl}
            />
          )
        })}
      </Events>
    </Container>
  );
}