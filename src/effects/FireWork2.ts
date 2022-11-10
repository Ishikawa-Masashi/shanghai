import p5 from 'p5';

const Y_AXIS = 1;
const X_AXIS = 2;
// let canvas;

// Explosion attenuation coefficient
const explosionAttenuationCoefficient = 0;

let fireworks: FireWork[] = [];
let star: [number, number, number][] = [];

function getPosition(el: HTMLElement) {
  let x = 0;
  let y = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    x += el.offsetLeft - el.scrollLeft;
    y += el.offsetTop - el.scrollTop;
    el = el.offsetParent as HTMLElement;
  }
  return { top: y, left: x };
}

export const sketch = (p: p5, screen: HTMLElement) => {
  let canvas: p5.Renderer;
  //   let screen: HTMLElement;
  p.setup = () => {
    // screen = document.getElementById('screen') as HTMLElement;

    const pos = getPosition(screen);
    canvas = p.createCanvas(screen.clientWidth, screen.clientHeight);
    canvas.position(pos.left, pos.top);

    // キャンバスの設定
    p.colorMode(p.RGB);
    p.frameRate(60);
    preStar(p);
  };
  p.windowResized = () => {
    screen = document.getElementById('screen') as HTMLElement;

    const pos = getPosition(screen);
    p.resizeCanvas(screen.clientWidth, screen.clientHeight);
    canvas.position(pos.left, pos.top);
  };
  p.draw = () => {
    // 背景色を設定;
    setGradient(
      p,
      0,
      0,
      p.width,
      p.height,
      p.color(0, 0, 0),
      p.color(24, 32, 72),
      Y_AXIS
    );
    p.clear();

    p.noStroke();

    // 星を描く
    drawStar(p);

    // 花火を打ち上げる間隔を調整
    if (0 === p.frameCount % 100) {
      // 打ち上がるスピード
      const speed = p.random(10, 30);
      fireworks.push(
        new FireWork(p, p.random(p.width), p.height, 0, speed, 0.98)
      );
    }

    for (const fw of fireworks) {
      // 打ち切った花火を処理対象から外す（配列から削除する）
      if (2 === fw.getType || 30000 < fw.getFrame) {
        fireworks = fireworks.filter((n) => n !== fw);
        continue;
      }

      // 打ち上げアニメーションを呼び出す
      fw.fire();
    }
  };
};

class FireWork {
  // フレームカウンター
  frame = 0;
  type = 0;
  next = 0;

  // 花火の色
  r: number;
  g: number;
  b: number;
  a: number;

  // 玉の大きさ
  w: number;

  // 打ち上がる高さ
  maxHeight: number;
  fireHeight: number;

  // 残像表示用配列
  afterImages: Afterimage[] = [];

  // 爆発用配列
  explosions: FireWork[] = [];

  // 消えてから爆発までの遅延時間
  exDelay: number;

  // 爆発の大きさ
  large: number;

  // 爆発の玉の数
  ball: number;

  // 爆発から消えるまでの長さ
  exend: number;

  // 爆発のブレーキ
  exStop: number;

  // 初期設定
  constructor(
    private p: p5,
    public x: number, // 初期位置
    public y: number, // 初期位置
    public vx: number, // 重力
    public vy: number, // 重力
    public gv: number // 重力
  ) {
    this.r = p.random(155) + 80;
    this.g = p.random(155) + 80;
    this.b = p.random(155) + 80;
    this.a = 255;

    this.w = p.random(10, 5);

    // 打ち上がる高さ
    this.maxHeight = p.random(p.height / 6, p.height / 2);
    this.fireHeight = p.height - this.maxHeight;

    // 消えてから爆発までの遅延時間
    this.exDelay = p.random(10, 40);

    // 爆発の大きさ
    this.large = p.random(5, 15);

    // 爆発の玉の数
    this.ball = p.random(20, 100);

    // 爆発から消えるまでの長さ
    this.exend = p.random(20, 40);

    // 爆発のブレーキ
    this.exStop = 0.96;
  }
  get getFrame() {
    return this.frame;
  }

  get getType() {
    return this.type;
  }

  // 処理コントロール
  fire() {
    // 0:打ち上げ（初期） 1:爆発
    switch (this.type) {
      case 0:
        this.rising();
        break;
      case 1:
        this.explosion();
        break;
    }
  }

  // 打ち上げアニメーション
  rising() {
    const p = this.p;
    // 頂点まで達したら消す
    if (this.y * 0.8 < this.maxHeight) {
      this.a = this.a - 6;
    }
    // 指定の高さまで上昇する
    this.x += this.vx;
    this.y -=
      this.vy * ((this.fireHeight - (p.height - this.y)) / this.fireHeight);
    // 残像を表示
    this.afterImages.push(
      new Afterimage(p, this.r, this.g, this.b, this.x, this.y, this.w, this.a)
    );
    for (const ai of this.afterImages) {
      if (ai.getAlpha <= 0) {
        this.afterImages = this.afterImages.filter((n) => n !== ai);
        continue;
      }
      ai.rsImage();
    }
    // 打ち上げ表示
    this.update(this.x, this.y, this.w);
    // 全ての表示が消えたら処理の種類を変更する
    if (0 == this.afterImages.length) {
      if (0 === this.next) {
        // 消えてから爆発まで遅延させる
        this.next = this.frame + Math.round(this.exDelay);
      } else if (this.next === this.frame) {
        // 花火の大きさ
        for (let i = 0; i < this.ball; i++) {
          // 爆発の角度
          const r = p.random(0, 360);
          // 花火の内側を作る（バラバラ）
          const s = p.random(0.1, 0.9);
          const vx = Math.cos((r * Math.PI) / 180) * s * this.large;
          const vy = Math.sin((r * Math.PI) / 180) * s * this.large;
          this.explosions.push(
            new FireWork(p, this.x, this.y, vx, vy, this.exStop)
          );
          // 花火の輪郭を作る（丸くなるようにする）
          const cr = p.random(0, 360);
          const cs = p.random(0.9, 1);
          const cvx = Math.cos((cr * Math.PI) / 180) * cs * this.large;
          const cvy = Math.sin((cr * Math.PI) / 180) * cs * this.large;
          this.explosions.push(
            new FireWork(p, this.x, this.y, cvx, cvy, this.exStop)
          );
        }
        this.a = 255;
        this.type = 1;
      }
    }
  }
  // 爆発アニメーション
  explosion() {
    const p = this.p;
    for (const ex of this.explosions) {
      ex.frame++;
      // 爆発し終わった花火を配列から除去する
      if (2 === ex.getType) {
        this.explosions = this.explosions.filter((n) => n !== ex);
        continue;
      }
      // 残像を描画
      if (0 === Math.round(p.random(0, 32))) {
        ex.afterImages.push(
          new Afterimage(p, this.r, this.g, this.b, ex.x, ex.y, ex.w, ex.a)
        );
      }
      for (const ai of ex.afterImages) {
        if (ai.getAlpha < 0) {
          ex.afterImages = ex.afterImages.filter((n) => n !== ai);
          continue;
        }
        ai.exImage();
      }
      // 爆発を描画
      this.update(ex.x, ex.y, ex.w, ex.a);
      ex.x += ex.vx;
      ex.y += ex.vy;
      ex.vx = ex.vx * ex.gv;
      ex.vy = ex.vy * ex.gv;
      ex.vy = ex.vy + ex.gv / 30;
      if (this.exend < ex.frame) {
        ex.w -= 0.1;
        ex.a = ex.a - 4;
        if (ex.a < 0 && 0 === ex.afterImages.length) {
          ex.type = 2;
        }
      }
    }
  }
  // 花火を表示する
  update(x: number, y: number, w: number, a = 0) {
    const p = this.p;
    this.frame++;
    if (0 < this.a) {
      const c = p.color(this.r, this.g, this.b);
      c.setAlpha(a);
      p.fill(c);
      p.ellipse(x, y, w, w);
    }
  }
}

// 残像処理用クラス
class Afterimage {
  frame = 0;

  vx: number;
  vy: number;
  vw: number;

  constructor(
    private p: p5,
    public r: number,
    public g: number,
    public b: number,
    public x: number,
    public y: number,
    public w: number,
    public a?: any
  ) {
    this.vx = p.random(-0.24, 0.24);
    this.vy = p.random(0.2, 0.8);
    this.vw = p.random(0.05, 0.2);
  }
  get getAlpha() {
    return this.a;
  }
  // 打ち上げ用
  rsImage() {
    if (0 < this.a) {
      this.update(this.r, this.g, this.b, this.x, this.y, this.w, this.a);
      this.r += 4;
      this.g += 4;
      this.b += 4;
      this.x = this.x + this.vx;
      this.y = this.y + this.vy;
      if (0 < this.w) {
        this.w = this.w - this.vw;
      }
      this.a = this.a - 4;
    }
  }
  // 爆発用
  exImage() {
    if (0 < this.a) {
      this.update(this.r, this.g, this.b, this.x, this.y, this.w, this.a);
      this.r += 2.5;
      this.g += 2.5;
      this.b += 2.5;
      this.x = this.x + this.vx;
      this.y = this.y + this.vy;
      if (0 < this.w) {
        this.w = this.w - this.vw;
      }
      this.a = this.a - 1.5;
    }
  }
  update(
    r: number,
    g: number,
    b: number,
    x: number,
    y: number,
    w: number,
    a: number
  ) {
    const p = this.p;
    this.frame++;
    const c = p.color(r, g, b);
    c.setAlpha(a);
    p.fill(c);
    p.ellipse(x, y, w, w);
  }
}

// グラデーションを描画
function setGradient(
  p: p5,
  x: number,
  y: number,
  w: number,
  h: number,
  c1: p5.Color,
  c2: p5.Color,
  axis: number
) {
  p.noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      const inter = p.map(i, y, y + h, 0, 1);
      const c = p.lerpColor(c1, c2, inter);
      p.stroke(c);
      p.line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      const inter = p.map(i, x, x + w, 0, 1);
      const c = p.lerpColor(c1, c2, inter);
      p.stroke(c);
      p.line(i, y, i, y + h);
    }
  }
}

// 星を作成
function preStar(p: p5) {
  star = [];
  for (let i = 0; i < 100; i++) {
    star.push([p.random(p.width), p.random(p.height / 2), p.random(1, 4)]);
  }
}

// 星を描画
function drawStar(p: p5) {
  // 星を描く
  for (const s of star) {
    const c = p.color(p.random(150, 255), p.random(150, 255), 255);
    c.setAlpha(p.random(150, 200));
    p.fill(c);
    p.ellipse(s[0], s[1], s[2], s[2]);
  }
}
