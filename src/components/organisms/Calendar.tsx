import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../model/store';
import { Box } from '../atoms/Box';
import { DayLink } from '../atoms/DayLink';

export const Calendar: FunctionComponent = () => {
  const { days, isDayUnlocked, hasGift, isToday } = useStore();
  return (
    <Box
      css={{
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '100%',
        justifyContent: 'center',
        gap: '$3',
        '@bp1': {
          gap: '$3',
        },
        '@bp3': {
          gap: '$5',
        },
      }}
    >
      {days.map((day) => (
        <DayLink
          key={day}
          disabled={!isDayUnlocked(day)}
          special={hasGift(day) && (!isDayUnlocked(day) || isToday(day))}
          active={isToday(day)}
          as={Link}
          to={`/day/${day}`}
        >
          {day}
        </DayLink>
      ))}
    </Box>
  );
};
