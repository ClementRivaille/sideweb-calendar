import React, { useEffect, useMemo } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { calendarData } from '../../utils/calendarData';
import { Box } from '../atoms/Box';
import { Main } from '../atoms/Main';
import { EntryHeader } from '../molecules/EntryHeader';

export const Day = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const entry = useMemo(() => {
    return (id && calendarData[id]) || null;
  }, [id]);

  useEffect(() => {
    if (id && !entry) {
      navigate('/', { state: { redirect: true } });
    }
  });

  return (
    <Main css={{ maxHeight: '100vh', paddingTop: 0 }}>
      {entry && (
        <>
          <EntryHeader>{entry.title}</EntryHeader>
          {entry.imgUrl && (
            <Box
              as="img"
              src={entry.imgUrl}
              alt="kitties"
              css={{ minHeight: '100px' }}
            />
          )}
          <Box css={{ overflowY: 'auto' }}>
            {entry.description.map((paragraph, idx) => (
              <div key={idx}>{paragraph}</div>
            ))}
          </Box>
          <Box
            as={'a'}
            href={entry.link}
            target="_blank"
            css={{ color: '$white' }}
          >
            Link
          </Box>
        </>
      )}
    </Main>
  );
};
