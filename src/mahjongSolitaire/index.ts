import { TURTLE } from './layouts/TURTLE';

// 下準備
const { max, floor, ceil, random } = Math;

/**
 * 牌が存在しない状態を表す定数.
 */
export const EMPTY = ' ';

/**
 * 牌の積み方を表す型.
 * 値が変化することはない.
 */
export type Stage = string[];

/**
 * 現在の牌の状態を表す型.
 * ゲームのプレイ状況により値は変化する.
 */
export type Board = number[];

/**
 * 最後に牌を取り除いた時刻を表す変数
 */
let date = 0;

const pick = <T>(a: T[]) => a.splice(a.length * random(), 1)[0];

/**
 * タイルがあるかどうか調べる.
 * @return {Boolean} タイルがなかったらTrueを返す.
 */
export const isEmpty = (value: string) => value === EMPTY;

// const range = (start: number, stop?: number, step?: number) => {
//   if (stop === undefined) {
//     stop = start;
//     start = 0;
//   }
//   step = step || (stop < start ? -1 : 1);
//   const length = max(0, ceil((stop - start) / step));
//   return Array.from({ length }, (_, i) => start + step! * i);
// };
const range = (start: number, stop: number, step = stop < start ? -1 : 1) => {
  const length = max(0, ceil((stop - start) / step));
  return Array.from({ length }, (_, i) => start + step * i);
};

// コピーして上書き、CodePen だと Spread Properties を変換できないようなので
const overwrite = (a: State, b: Partial<State>) => Object.assign({}, a, b);

// 盤面設定
export const W = 32; // 横
export const H = 17; // 縦
const D = 5; // 高さ
const N = W * H * D; // マスの数

// 座標とインデックスの相互変換
export const X = (p: number) => p % W;
export const Y = (p: number) => floor(p / W) % H;
export const Z = (p: number) => floor(p / W / H);

const fromXYZ = (x: number, y: number, z: number) => (z * H + y) * W + x;

const toXYZ = (position: number) => ({
  x: X(position),
  y: Y(position),
  z: Z(position),
});

// 牌IDから牌の種類を取得
const group = (v: number) => floor(v / 4);

export type State = {
  board: Board; // 盤面
  target: number; // 選択牌座標(未選択は-1)
  rest: number; // 残りの牌の数
};

// ゲーム状態の生成
// stage は牌の積み方。長さ W * H * D の 0 or 1 の配列
export const create = (stage: Stage) => {
  const tileCount = stage.reduce((n, v) => n + (isEmpty(v) ? 0 : 1), 0);

  // 無地上海を準備
  const temporal: number[] = stage.map((value) => (isEmpty(value) ? 0 : 1)); //stage.slice(0);
  const nextPositionPair = () => {
    // 自由牌の集合を見つける
    const freePositions = range(0, N).filter((p) => isFree(temporal, p));

    // 自由牌の個数
    const count = freePositions.length;
    if (count < 2) {
      throw new Error('unreachable'); // ここに来てたらそもそも積み方がおかしい or バグ
    }

    const p1 = freePositions[count - 1]; // 一番高いもの
    const p2 = freePositions[count - 2]; // 二番目に高いもの
    const diff = Z(p1) - Z(p2); // 高低差

    // let p;
    // if (diff + 2 >= count) {
    //   // 詰みルート突入の可能性アリ
    //   p = freePositions.pop(); // 最も高いものを取る (高低差を埋める)
    // } else {
    //   p = pick(freePositions); // ランダムに取る
    // }
    //
    const p = diff + 2 >= count ? freePositions.pop() : pick(freePositions);
    if (!p) {
      // 詰みルート突入
      throw new Error('p is undefined'); // ここに来てたらそもそも積み方がおかしい or バグ
    }

    const q = pick(freePositions); // ランダムに取る
    temporal[p] = temporal[q] = 0;
    // 選んだ二つの組の位置を返す
    return [p, q];
  };

  // 同種ペアの配列を作る。牌IDは4以上の整数。
  const tilePairs = range(0, tileCount / 2).map((i) => [
    4 + 2 * i,
    4 + 2 * i + 1,
  ]);

  // 盤面を作る
  const board: number[] = []; // 初期値はすべて 0 (さぼって undefined のまま)
  range(0, tileCount / 2).forEach((_) => {
    const [p1, p2] = nextPositionPair(); // 無地上海を一手解いて位置を取得
    const [v1, v2] = pick(tilePairs); // 柄当てはめ
    board[p1] = v1; // 実際の上海の盤面に追加
    board[p2] = v2; // 実際の上海の盤面に追加
  });

  return {
    board, // 盤面
    target: -1, // 選択牌座標(未選択は-1)
    rest: tileCount, // 残りの牌の数
  };
};

// 状態の更新, state: 前の状態, p: 選択インデックス
const update = (state: State, p: number) => {
  const { board, target, rest } = state;

  // 自由牌でないなら未選択に
  if (!isFree(board, p)) {
    return { board, rest, target: -1 };
  }

  // 選択済みの牌が無いなら選択状態に
  if (target < 0) {
    return { board, rest, target: p };
  }

  // 条件を満たしていなければ未選択に
  if (p === target || group(board[p]) !== group(board[target])) {
    // return { board, rest, target: -1 };
    return { board, rest, target: p };
  }

  date = Date.now();
  // ペアを取り除いて未選択に
  return {
    board: board.map((v, i) => (i === p || i === target ? 0 : v)),
    target: -1,
    rest: rest - 2,
  };
};

// 自由牌か否かを判定する
const isFree = (board: Board, p: number) => {
  // そもそも牌が無いなら false
  if (!board[p]) {
    return false;
  }
  const x = X(p);
  const y = Y(p);
  const z = Z(p);

  return (
    // 左右どちらかが空いている
    (range(-1, 2).every((dy) => !board[fromXYZ(x - 2, y + dy, z)]) ||
      range(-1, 2).every((dy) => !board[fromXYZ(x + 2, y + dy, z)])) &&
    // 牌の上に何も重なっていない
    range(-1, 2).every((dy) =>
      range(-1, 2).every((dx) => !board[fromXYZ(x + dx, y + dy, z + 1)])
    )
  );
};

// とれる牌の組を探す
const findPair = (board: Board) => {
  const pairs: number[] = [];
  for (const [p, t] of board.entries()) {
    if (!isFree(board, p)) {
      continue;
    }
    const v = group(t);
    if (pairs[v]) {
      return [p, pairs[v]];
    } else {
      pairs[v] = p;
    }
  }
};

// 牌の文字
export const tileChar = (t: number) => {
  const v = group(t);
  return v < 1
    ? ''
    : v < 8
    ? '東南西北中發　'[v - 1]
    : v < 17
    ? '一二三四五六七八九'[v - 8]
    : v < 26
    ? String.fromCharCode(0x2160 + v - 17)
    : v < 35
    ? String.fromCharCode(0x0031 + v - 26)
    : v === 35
    ? '春夏秋冬'[t % 4]
    : '梅蘭菊竹'[t % 4];
};

// 状態はスタックで持つ (適当に作ったのでやや非効率)
const stack: State[] = [];
// 各種操作
let stage = TURTLE; // 牌の積み方、定義は下の方に

// control
export const getState = () => stack[stack.length - 1];
const setState = (state: State) => {
  while (stack.length && getState().rest <= state.rest) {
    stack.pop();
  }
  stack.push(state);
  return state;
};

export const undo = () => {
  if (stack.length > 1) {
    return setState(overwrite(stack[stack.length - 2], { target: -1 }));
  }
  return stack[stack.length - 1];
};
export const reset = () => {
  if (stack.length > 0) {
    return setState(overwrite(stack[0], { target: -1 }));
  }
  return stack[stack.length - 1];
};

export const select = (p: number) => {
  setState(update(getState(), p));
};

export const init = () => {
  stack.length = 0;
  return setState(create(stage));
};

export const main = (newStage: Stage) => {
  stage = newStage;
  return init();
};
