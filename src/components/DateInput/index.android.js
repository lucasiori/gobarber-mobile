import React, { useState, useMemo } from 'react';
import DatePicker from '@react-native-community/datetimepicker';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, DateButton, DateText } from './styles';

export default function DateInput({ date, onChange }) {
  const [opened, setOpened] = useState(false);

  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [date]
  );

  return (
    <Container>
      <DateButton onPress={() => setOpened(!opened)}>
        <Icon name="event" color="#fff" size={20} />
        <DateText>{dateFormatted}</DateText>

        {opened && (
          <DatePicker
            value={date}
            display="spinner"
            minimumDate={new Date()}
            onChange={(event, selectedDate) => {
              if (selectedDate) {
                onChange(selectedDate);
              }

              setOpened(false);
            }}
          />
        )}
      </DateButton>
    </Container>
  );
}

DateInput.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
};
