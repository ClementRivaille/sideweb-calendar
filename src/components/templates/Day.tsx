import React, { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useStore } from '../../model/store';
import { Description } from '../atoms/Description';
import { EmbeddedVideo } from '../atoms/EmbeddedVideo';
import { EntryImg } from '../atoms/EntryImg';
import { EntryLink } from '../atoms/EntryLink';
import { Main } from '../atoms/Main';
import { EntryHeader } from '../molecules/EntryHeader';
import ReactMarkdown from 'react-markdown';
import { StyledMarkdown } from '../atoms/StyledMarkdown';

export const Day = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getDay, isDayUnlocked } = useStore();

  const entry = useMemo(() => {
    return (id && getDay(id)) || null;
  }, [id]);

  useEffect(() => {
    if (id && (!entry || !isDayUnlocked(id))) {
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
          {entry.videoUrl && <EmbeddedVideo url={entry.videoUrl} />}
          <Description>
            {entry.description.map((paragraph, idx) => (
              <StyledMarkdown key={idx}>{paragraph}</StyledMarkdown>
            ))}
          </Description>
          {entry.link && (
            <EntryLink href={entry.link} target="_blank">
              Lien
            </EntryLink>
          )}
        </>
      )}
    </Main>
  );
};
