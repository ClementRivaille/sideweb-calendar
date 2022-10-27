declare module 'cursor-effects' {
  export interface CursorEffect {
    destroy(): void;
  }

  interface EmojiCursorOptions {
    emoji: string[];
    element?: HTMLElement;
  }
  export class emojiCursor implements CursorEffect {
    constructor(options?: EmojiCursorOptions);
    public destroy(): void;
  }

  interface SpringyEmojiOptions {
    emoji: string;
    element?: HTMLElement;
  }
  export class springyEmojiCursor implements CursorEffect {
    constructor(options?: SpringyEmojiOptions);
    public destroy(): void;
  }

  interface FairyDustOptions {
    colors: string[];
    element?: HTMLElement;
  }
  export class fairyDustCursor implements CursorEffect {
    constructor(options?: FairyDustOptions);
    public destroy(): void;
  }
}
