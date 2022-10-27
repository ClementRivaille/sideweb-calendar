import {
  CursorEffect,
  emojiCursor,
  fairyDustCursor,
  springyEmojiCursor,
} from 'cursor-effects';
import { useEffect, useRef } from 'react';

export enum CursorEffectType {
  springyEmoji,
  fairyDust,
  emojisRain,
}

export const useCursorEffect = (enabled: boolean, type: CursorEffectType) => {
  const effect = useRef<CursorEffect | null>();

  useEffect(() => {
    if (enabled && !effect.current) {
      if (type === CursorEffectType.emojisRain) {
        effect.current = new emojiCursor({ emoji: ['⭐', '🌟', '✨'] });
      } else if (type === CursorEffectType.springyEmoji) {
        effect.current = new springyEmojiCursor({ emoji: '🌲' }); // 🎄🌲
      } else if (type === CursorEffectType.fairyDust) {
        effect.current = new fairyDustCursor();
      }
    } else if (effect.current) {
      effect.current.destroy();
      effect.current = null;
    }
  }, [enabled]);
};
