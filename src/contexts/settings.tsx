import React, {
  createContext,
  FunctionComponent,
  useState,
  useContext,
  useEffect,
  useRef,
} from 'react';

import { Howl, Howler } from 'howler';

export const SettingsContext = createContext({
  bgmVolume: 0,
  setBgmVolume: (volume: number) => {},
  seVolume: 0,
  setSeVolume: (volume: number) => {},
});

export const useSettingsContext = () => useContext(SettingsContext);

type Props = {
  /* nothing */
};

export const SettingsProvider: FunctionComponent<Props> = (props) => {
  const { children } = props;

  const bgmRef = useRef<Howl>();
  const [bgmVolume, setBgmVolume] = useState(0);
  const [seVolume, setSeVolume] = useState(0.1);

  useEffect(() => {
    bgmRef.current = new Howl({
      src: './Ladybug.mp3',
      autoplay: true,
      loop: true,
      volume: bgmVolume,
      onend: () => {
        // 再生完了時のendイベント
        console.log('Finished!');
      },
    });

    return () => {
      bgmRef.current?.unload();
    };
  }, []);

  useEffect(() => {
    bgmRef.current?.volume(bgmVolume);
  }, [bgmVolume]);

  const value = {
    bgmVolume,
    setBgmVolume,
    seVolume,
    setSeVolume,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};
