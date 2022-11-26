import { useCallback, useEffect, useRef, useState } from 'react';
import { Orchestre, PlayerConfiguration, PlayerOptions } from 'orchestre-js';
import { Effects, GIFT_DAYS } from '../model/effects';
import { useStore } from '../model/store';
import config from '../config';
import { isDayUnlocked } from './calendarEntries';

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

const INSTRUMENTS_CONFIGS: PlayerConfiguration[] = [
  {
    name: Instruments.piano,
    absolute: true,
    url: `${config.baseUrl}/music/piano.ogg`,
    length: 4 * 16,
  },
  {
    name: Instruments.guitar,
    absolute: true,
    url: `${config.baseUrl}/music/guitar.ogg`,
    length: 4 * 16,
  },
  {
    name: Instruments.marimba,
    absolute: true,
    url: `${config.baseUrl}/music/marimba.ogg`,
    length: 4 * 16,
  },
  {
    name: Instruments.strings,
    absolute: true,
    url: `${config.baseUrl}/music/strings.ogg`,
    length: 4 * 16,
  },
  {
    name: Instruments.bells,
    absolute: true,
    url: `${config.baseUrl}/music/bells.ogg`,
    length: 4 * 16,
  },
];

export const useOrchestra = () => {
  const { effects, mute } = useStore();

  const orchestra = useRef(new Orchestre(108));
  const [loaded, setLoaded] = useState(false);
  const [instrumentOnStart, setInstrumentOnStart] = useState<Instruments[]>([]);
  const [loadedInstruments, setLoadedInstruments] = useState<Instruments[]>([]);

  const initOrchestra = async () => {
    const players: Promise<void>[] = [];
    const instruments: Instruments[] = [];
    INSTRUMENTS_CONFIGS.forEach((player) => {
      const gift = GIFT_DAYS.find(
        ({ effect }) => INSTRUMENT_FOR_EFFECT[effect] === player.name
      );
      if (gift && isDayUnlocked(gift.day)) {
        players.push(
          orchestra.current.addPlayer(
            player.name,
            player.url,
            player.length,
            true
          )
        );
        instruments.push(player.name as Instruments);
      }
    });
    setLoadedInstruments([...new Set(instruments)]);
    await Promise.all(players);
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
      const instrument = INSTRUMENT_FOR_EFFECT[effect as Effects];
      if (loadedInstruments.includes(instrument)) {
        if (state.enabled) {
          enableInstrument(instrument);
        } else {
          disableInstrument(instrument);
        }
      }
    });
  }, [effects, loadedInstruments, enableInstrument, disableInstrument]);

  useEffect(() => {
    orchestra.current.master.gain.setTargetAtTime(mute ? 0 : 1, 0, 0.2);
  }, [mute]);
};
