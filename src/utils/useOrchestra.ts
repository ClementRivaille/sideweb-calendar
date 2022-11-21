import { useCallback, useEffect, useRef, useState } from 'react';
import { Orchestre, PlayerOptions } from 'orchestre-js';
import { Effects } from '../model/effects';
import { useStore } from '../model/store';
import config from '../config';

export enum Instruments {
  piano = 'piano',
  guitar = 'guitar',
  marimba = 'marimba',
  strings = 'strings',
  bells = 'bells',
}

const options: { [key in Instruments]: PlayerOptions } = {
  piano: {
    fade: 0.02,
  },
  guitar: {
    fade: 0.05,
  },
  marimba: {
    fade: 0.1,
  },
  strings: {
    now: true,
    fade: 0.3,
  },
  bells: {
    now: true,
    fade: 0.2,
  },
};

export const INSTRUMENT_FOR_EFFECT: { [key in Effects]: Instruments } = {
  [Effects.lights]: Instruments.piano,
  [Effects.keychain]: Instruments.guitar,
  [Effects.background]: Instruments.marimba,
  [Effects.snow]: Instruments.strings,
  [Effects.sparkles]: Instruments.bells,
};

export const useOrchestra = () => {
  const { effects, mute } = useStore();

  const orchestra = useRef(new Orchestre(108));
  const [loaded, setLoaded] = useState(false);
  const [instrumentOnStart, setInstrumentOnStart] = useState<Instruments[]>([]);

  const initOrchestra = async () => {
    await orchestra.current.addPlayers([
      {
        name: Instruments.piano,
        absolute: true,
        url: `${config.baseUrl}music/piano.ogg`,
        length: 4 * 16,
      },
      {
        name: Instruments.guitar,
        absolute: true,
        url: `${config.baseUrl}music/guitar.ogg`,
        length: 4 * 16,
      },
      {
        name: Instruments.marimba,
        absolute: true,
        url: `${config.baseUrl}music/marimba.ogg`,
        length: 4 * 16,
      },
      {
        name: Instruments.strings,
        absolute: true,
        url: `${config.baseUrl}music/strings.ogg`,
        length: 4 * 16,
      },
      {
        name: Instruments.bells,
        absolute: true,
        url: `${config.baseUrl}music/bells.ogg`,
        length: 4 * 16,
      },
    ]);
    setLoaded(true);
  };

  useEffect(() => {
    initOrchestra();
  }, []);

  // If started before loaded
  useEffect(() => {
    if (loaded && instrumentOnStart.length > 0 && orchestra.current.started) {
      orchestra.current.start(instrumentOnStart);
    }
  }, [loaded, instrumentOnStart]);

  const enableInstrument = useCallback(
    (instrument: Instruments) => {
      if (!loaded) {
        setInstrumentOnStart((instruments) => [...instruments, instrument]);
      } else if (!orchestra.current.started) {
        orchestra.current.start([instrument]);
      } else {
        orchestra.current.play(instrument, options[instrument]);
      }
    },
    [loaded]
  );

  const disableInstrument = useCallback(
    (instrument: Instruments) => {
      if (!loaded) {
        setInstrumentOnStart((instruments) =>
          instruments.filter((i) => i !== instrument)
        );
      } else if (orchestra.current.started) {
        orchestra.current.stop(instrument, options[instrument]);
      }
    },
    [loaded]
  );

  useEffect(() => {
    Object.entries(effects).forEach(([effect, state]) => {
      if (state.enabled) {
        enableInstrument(INSTRUMENT_FOR_EFFECT[effect as Effects]);
      } else {
        disableInstrument(INSTRUMENT_FOR_EFFECT[effect as Effects]);
      }
    });
  }, [effects, enableInstrument, disableInstrument]);

  useEffect(() => {
    orchestra.current.master.gain.setTargetAtTime(mute ? 0 : 1, 0, 0.2);
  }, [mute]);
};
