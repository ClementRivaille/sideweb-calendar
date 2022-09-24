import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
  reset,
} = createStitches({
  theme: {
    colors: {
      blue1: '#241D88',
      blue2: '#3E40AE',
      blue3: '#1da9db',
      blue4: '#79D3F3',
      red1: '#FF0054',
      jonquil: '#F0C808',
      white: '#ffffff',
    },
    fonts: {
      untitled: 'Untitled Sans, -apple-system, system-ui, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '20px',
      5: '24px',
      6: '32px',
      7: '48px',
      8: '64px',
      9: '80px',
      10: '96px',
      11: '128px',
      12: '192px',
      13: '256px',
      14: '528px',
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '20px',
      5: '24px',
      6: '32px',
      7: '48px',
      8: '64px',
      9: '80px',
      10: '96px',
      11: '128px',
      12: '192px',
      13: '256px',
      14: '384px',
      15: '528px',
    },
    fontSizes: {
      1: '10px',
      2: '12px',
      3: '14px',
      4: '16px',
      5: '20px',
      6: '22px',
      7: '28px',
      8: '36px',
      9: '60px',
    },
    radii: {
      1: '4px',
      2: '6px',
      3: '8px',
      4: '12px',
      5: '35px',
      6: '40px',
      7: '55px',
      round: '50%',
      pill: '9999px',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
    },
  },
  media: {
    bp1: '(min-width: 600px)',
    bp2: '(min-width: 900px)',
    bp3: '(min-width: 1400px)',
    hover: '(any-hover: hover)',
  },
});
