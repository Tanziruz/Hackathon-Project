import { useState, useEffect } from "react";

interface KeysPressed {
  [key: string]: boolean;
}

export default function useKeyPress(targetKeys: string[] = []): KeysPressed {
  const [keysPressed, setKeysPressed] = useState<KeysPressed>({});

  useEffect(() => {
    const downHandler = ({ key }: KeyboardEvent) => {
      const k = key.toLowerCase();
      if (targetKeys.includes(k)) {
        setKeysPressed((state) => ({ ...state, [k]: true }));
      }
    };

    const upHandler = ({ key }: KeyboardEvent) => {
      const k = key.toLowerCase();
      if (targetKeys.includes(k)) {
        setKeysPressed((state) => ({ ...state, [k]: false }));
      }
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [targetKeys]);

  return keysPressed;
}
