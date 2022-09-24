import React, { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { calendarData } from '../../utils/calendarData';
import { Description } from '../atoms/Description';
import { EntryImg } from '../atoms/EntryImg';
import { EntryLink } from '../atoms/EntryLink';
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
    <Main
      css={{
        paddingTop: '$8',
        '@bp2': {
          paddingTop: 0,
          maxHeight: '100vh',
        },
      }}
    >
      {entry && (
        <>
          <EntryHeader>{entry.title}</EntryHeader>
          {entry.imgUrl && <EntryImg src={entry.imgUrl} alt="kitties" />}
          <Description>
            {entry.description.map((paragraph, idx) => (
              <div key={idx}>{paragraph}</div>
            ))}
          </Description>
          <EntryLink href={entry.link} target="_blank">
            Link
          </EntryLink>
        </>
      )}
    </Main>
  );
};
