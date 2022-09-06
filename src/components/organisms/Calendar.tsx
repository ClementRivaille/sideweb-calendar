import React, { FunctionComponent } from 'react';
import { Box } from '../atoms/Box';
import { DayLink } from '../atoms/DayLink';

export const Calendar: FunctionComponent = () => {
  const days = [...Array(31)].map((_, i) => i + 1);
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
          disabled={day > 10}
          special={day % 5 === 0}
          active={day === 10}
        >
          {day}
        </DayLink>
      ))}
    </Box>
  );
};
