import PropTypes from 'prop-types';
import { differenceInDays, differenceInHours, differenceInMonths, differenceInYears, format, isValid, parseISO } from 'date-fns'

import CustomButton from '../Button'
import {
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
  Frame,
  EndLabel,
  EndLabelContainer
} from './styles'

const getCounter = (date) => {
  const counter = {}
  const labels = {
    second: 'sec.',
    hour: 'hora',
    mouth: 'meses',
    day: 'dias',
    year: 'anos',
    end: 'fim'
  }

  date = parseISO(date);

  if(!isValid(date)) {
    return {
      value: 0,
      label: 'second'
    }
  }

  let timeToEnd = differenceInDays(date, new Date())
  
  if(timeToEnd < 0) {
    timeToEnd = differenceInHours(date, new Date())
    counter.value = 0
    counter.label =  labels.end
    return counter
  }

  if(timeToEnd < 1) {
    timeToEnd = differenceInHours(date, new Date())
    counter.value = timeToEnd > 1 ? timeToEnd : differenceInHours(date, new Date())
    counter.label = timeToEnd > 1 ? counter.label = labels.second : counter.label = labels.hour
    return counter
  }
  
  if(timeToEnd >= 365) {
    counter.value = differenceInYears(date, new Date())
    counter.label = labels.year
    return counter
  }

  if(timeToEnd >= 31) {
    counter.value = differenceInMonths(date, new Date())
    counter.label = labels.mouth
    return counter
  }

  counter.value = timeToEnd
  counter.label = labels.day
  return counter
}

function Card({ id, title, description, date, thumbnailUrl}) {
  const counter = getCounter(date);
  const dateFormatted = isValid(parseISO(date)) ? format(parseISO(date), "dd/MM/yyyy á's' HH:mm") : ''

  return (
    <Container>
      <Badge>
        <Frame/>
        <Counter>
          {String(counter?.value)?.length === 1 && '\u0020\u0020'}
          {String(counter?.value)?.length === 2 && '\u0020'}
          {counter.value}
        </Counter>
        <Label>{counter.label}</Label>
      </Badge>

      {counter.value === 0 &&
        <EndLabelContainer>
          <EndLabel>Finalizado</EndLabel>
        </EndLabelContainer>
      }

      <Thumbnail>
        <ThumbnailImage source={{uri: thumbnailUrl}}/>
        <DateView>{dateFormatted}</DateView>
      </Thumbnail>

      <Content>
        <Title numberOfLines={1}>{title}</Title>
        <Description numberOfLines={5}>{description}</Description>

        <FooterBottons>
          <CustomButton text="VER MAIS"/>
          <CustomButton text="EXCLUIR" bgColor='#CE4040'/>
        </FooterBottons>
      </Content>
    </Container>
  );
}


Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  thumbnailUrl: PropTypes.string
};

Card.defaultProps = {
  id: 0,
  title: '',
  description: '',
  date: '',
  thumbnailUrl: ''
};

export default Card