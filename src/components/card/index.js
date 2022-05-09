import PropTypes from 'prop-types';
import { format, isValid, parseISO } from 'date-fns'

import CustomButton from '../Button'
import {
  Container,
  Thumbnail,
  ThumbnailImage,
  Content,
  Title,
  DateView,
  Description,
  FooterBottons
} from './styles'

function Card({ id, title, description, date, thumbnailUrl}) {
  const dateFormatted = isValid(parseISO(date)) ? format(parseISO(date), "dd/MM/yyyy á's' HH:mm") : ''

  return (
    <Container>
      <Thumbnail>
        <ThumbnailImage source={{uri: thumbnailUrl}}/>
        <DateView>{dateFormatted}</DateView>
      </Thumbnail>

      <Content>
        <Title>{title}</Title>
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