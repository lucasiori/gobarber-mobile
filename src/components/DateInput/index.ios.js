import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import DatePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, DateButton, DateText, Picker } from './styles';

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
          <Picker>
            <DatePicker
              value={date}
              minimumDate={new Date()}
              minuteInterval={60}
              locale="pt"
              mode="date"
              onChange={(event, selectedDate) => {
                if (selectedDate) {
                  onChange(selectedDate);
                }

                setOpened(false);
              }}
            />
          </Picker>
        )}
      </DateButton>
    </Container>
  );
}

DateInput.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
};
