import { CursorEffect, springyEmojiCursor } from 'cursor-effects';
import { useEffect, useRef } from 'react';

export const useCursorEffect = (enabled: boolean) => {
  const effect = useRef<CursorEffect>();

  useEffect(() => {
    if (enabled && !effect.current) {
      // effect.current = new emojiCursor({ emoji: ['⭐', '🌟', '✨'] });
      effect.current = new springyEmojiCursor({ emoji: '🌲' }); // 🎄🌲
      // effect.current = new fairyDustCursor();
    } else if (effect.current) {
      effect.current.destroy();
    }
  }, [enabled]);
};
