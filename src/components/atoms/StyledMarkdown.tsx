import ReactMarkdown from 'react-markdown';
import { styled } from '../../style/stitches.config';

export const StyledMarkdown = styled(ReactMarkdown, {
  margin: 0,
  '> *': {
    margin: 0,
  },
});
