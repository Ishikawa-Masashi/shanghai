import * as React from 'react';

import {
  MJ1tiao,
  MJ2tiao,
  MJ3tiao,
  MJ4tiao,
  MJ5tiao,
  MJ6tiao,
  MJ7tiao,
  MJ8tiao,
  MJ9tiao,
} from './mahjong/suits/bamboo';

import {
  MJ1wan,
  MJ2wan,
  MJ3wan,
  MJ4wan,
  MJ5wan,
  MJ6wan,
  MJ7wan,
  MJ8wan,
  MJ9wan,
} from './mahjong/suits/characters';

import {
  MJ1bing,
  MJ2bing,
  MJ3bing,
  MJ4bing,
  MJ5bing,
  MJ6bing,
  MJ7bing,
  MJ8bing,
  MJ9bing,
} from './mahjong/suits/circles';

import { MJju, MJlan, MJmei, MJzhu } from './mahjong/bonus/flowers';

import {
  MJautumn,
  MJspring,
  MJsummer,
  MJwinter,
} from './mahjong/bonus/seasons';

import {
  MJEastwind,
  MJNorthwind,
  MJSouthwind,
  MJWestwind,
} from './mahjong/honors/winds';

import {
  MJGreendragon,
  MJReddragon,
  MJWhitedragon,
} from './mahjong/honors/dragons';

const icons: Record<string, (width: number, height: number) => JSX.Element> = {
  bamboo1: (width: number, height: number) => (
    <MJ1tiao width={width} height={height} />
  ),
  bamboo2: (width: number, height: number) => (
    <MJ2tiao width={width} height={height} />
  ),
  bamboo3: (width: number, height: number) => (
    <MJ3tiao width={width} height={height} />
  ),
  bamboo4: (width: number, height: number) => (
    <MJ4tiao width={width} height={height} />
  ),
  bamboo5: (width: number, height: number) => (
    <MJ5tiao width={width} height={height} />
  ),
  bamboo6: (width: number, height: number) => (
    <MJ6tiao width={width} height={height} />
  ),
  bamboo7: (width: number, height: number) => (
    <MJ7tiao width={width} height={height} />
  ),
  bamboo8: (width: number, height: number) => (
    <MJ8tiao width={width} height={height} />
  ),
  bamboo9: (width: number, height: number) => (
    <MJ9tiao width={width} height={height} />
  ),
  man1: (width: number, height: number) => (
    <MJ1wan width={width} height={height} />
  ),
  man2: (width: number, height: number) => (
    <MJ2wan width={width} height={height} />
  ),
  man3: (width: number, height: number) => (
    <MJ3wan width={width} height={height} />
  ),
  man4: (width: number, height: number) => (
    <MJ4wan width={width} height={height} />
  ),
  man5: (width: number, height: number) => (
    <MJ5wan width={width} height={height} />
  ),
  man6: (width: number, height: number) => (
    <MJ6wan width={width} height={height} />
  ),
  man7: (width: number, height: number) => (
    <MJ7wan width={width} height={height} />
  ),
  man8: (width: number, height: number) => (
    <MJ8wan width={width} height={height} />
  ),
  man9: (width: number, height: number) => (
    <MJ9wan width={width} height={height} />
  ),
  pin1: (width: number, height: number) => (
    <MJ1bing width={width} height={height} />
  ),
  pin2: (width: number, height: number) => (
    <MJ2bing width={width} height={height} />
  ),
  pin3: (width: number, height: number) => (
    <MJ3bing width={width} height={height} />
  ),
  pin4: (width: number, height: number) => (
    <MJ4bing width={width} height={height} />
  ),
  pin5: (width: number, height: number) => (
    <MJ5bing width={width} height={height} />
  ),
  pin6: (width: number, height: number) => (
    <MJ6bing width={width} height={height} />
  ),
  pin7: (width: number, height: number) => (
    <MJ7bing width={width} height={height} />
  ),
  pin8: (width: number, height: number) => (
    <MJ8bing width={width} height={height} />
  ),
  pin9: (width: number, height: number) => (
    <MJ9bing width={width} height={height} />
  ),
  flower1: (width: number, height: number) => (
    <MJzhu width={width} height={height} />
  ),
  flower2: (width: number, height: number) => (
    <MJju width={width} height={height} />
  ),
  flower3: (width: number, height: number) => (
    <MJlan width={width} height={height} />
  ),
  flower4: (width: number, height: number) => (
    <MJmei width={width} height={height} />
  ),
  wind1: (width: number, height: number) => (
    <MJEastwind width={width} height={height} />
  ),
  wind2: (width: number, height: number) => (
    <MJNorthwind width={width} height={height} />
  ),
  wind3: (width: number, height: number) => (
    <MJSouthwind width={width} height={height} />
  ),
  wind4: (width: number, height: number) => (
    <MJWestwind width={width} height={height} />
  ),
  season1: (width: number, height: number) => (
    <MJautumn width={width} height={height} />
  ),
  season2: (width: number, height: number) => (
    <MJspring width={width} height={height} />
  ),
  season3: (width: number, height: number) => (
    <MJsummer width={width} height={height} />
  ),
  season4: (width: number, height: number) => (
    <MJwinter width={width} height={height} />
  ),
  dragon1: (width: number, height: number) => (
    <MJReddragon width={width} height={height} />
  ),
  dragon2: (width: number, height: number) => (
    <MJGreendragon width={width} height={height} />
  ),
  dragon3: (width: number, height: number) => (
    <MJWhitedragon width={width} height={height} />
  ),
};

export function getMahjongIconFromName(name: string, width = 70, height = 100) {
  if (icons[name]) {
    return icons[name];
  }
  console.log(`name=${name}`);
  return (width: number, height: number) => (
    <MJ1tiao width={width} height={height} />
  );
}

const toIcons: Record<string, () => JSX.Element> = {
  Ⅰ: () => <MJ1tiao />,
  Ⅱ: () => <MJ2tiao />,
  Ⅲ: () => <MJ3tiao />,
  Ⅳ: () => <MJ4tiao />,
  Ⅴ: () => <MJ5tiao />,
  Ⅵ: () => <MJ6tiao />,
  Ⅶ: () => <MJ7tiao />,
  Ⅷ: () => <MJ8tiao />,
  Ⅸ: () => <MJ9tiao />,
  '1': () => <MJ1wan />,
  '2': () => <MJ2wan />,
  '3': () => <MJ3wan />,
  '4': () => <MJ4wan />,
  '5': () => <MJ5wan />,
  '6': () => <MJ6wan />,
  '7': () => <MJ7wan />,
  '8': () => <MJ8wan />,
  '9': () => <MJ9wan />,
  一: () => <MJ1bing />,
  二: () => <MJ2bing />,
  三: () => <MJ3bing />,
  四: () => <MJ4bing />,
  五: () => <MJ5bing />,
  六: () => <MJ6bing />,
  七: () => <MJ7bing />,
  八: () => <MJ8bing />,
  九: () => <MJ9bing />,
  竹: () => <MJzhu />,
  菊: () => <MJju />,
  蘭: () => <MJlan />,
  梅: () => <MJmei />,
  東: () => <MJEastwind />,
  北: () => <MJNorthwind />,
  南: () => <MJSouthwind />,
  西: () => <MJWestwind />,
  秋: () => <MJautumn />,
  春: () => <MJspring />,
  夏: () => <MJsummer />,
  冬: () => <MJwinter />,
  中: () => <MJReddragon />,
  發: () => <MJGreendragon />,
  '　': () => <MJWhitedragon />,
};

const iconsMap: Record<string, JSX.Element> = {
  Ⅰ: <MJ1tiao />,
  Ⅱ: <MJ2tiao />,
  Ⅲ: <MJ3tiao />,
  Ⅳ: <MJ4tiao />,
  Ⅴ: <MJ5tiao />,
  Ⅵ: <MJ6tiao />,
  Ⅶ: <MJ7tiao />,
  Ⅷ: <MJ8tiao />,
  Ⅸ: <MJ9tiao />,
  '1': <MJ1wan />,
  '2': <MJ2wan />,
  '3': <MJ3wan />,
  '4': <MJ4wan />,
  '5': <MJ5wan />,
  '6': <MJ6wan />,
  '7': <MJ7wan />,
  '8': <MJ8wan />,
  '9': <MJ9wan />,
  一: <MJ1bing />,
  二: <MJ2bing />,
  三: <MJ3bing />,
  四: <MJ4bing />,
  五: <MJ5bing />,
  六: <MJ6bing />,
  七: <MJ7bing />,
  八: <MJ8bing />,
  九: <MJ9bing />,
  竹: <MJzhu />,
  菊: <MJju />,
  蘭: <MJlan />,
  梅: <MJmei />,
  東: <MJEastwind />,
  北: <MJNorthwind />,
  南: <MJSouthwind />,
  西: <MJWestwind />,
  秋: <MJautumn />,
  春: <MJspring />,
  夏: <MJsummer />,
  冬: <MJwinter />,
  中: <MJReddragon />,
  發: <MJGreendragon />,
  '　': <MJWhitedragon />,
};

export function getMahjongIconFromName2(
  name: string,
  width = 70,
  height = 100
) {
  if (toIcons[name]) {
    return toIcons[name];
  }
  console.log(`name=${name}`);
  return () => <MJ1tiao width={width} height={height} />;
}
