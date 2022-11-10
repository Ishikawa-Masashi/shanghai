//先頭ゼロ付加
function padZero(num: number) {
  let result;
  if (num < 10) {
    result = '0' + num;
  } else {
    result = '' + num;
  }
  return result;
}

//現在時刻取得（yyyy/mm/dd hh:mm:ss）
export function getCurrentTime() {
  const now = new Date();
  const res =
    '' +
    now.getFullYear() +
    '/' +
    padZero(now.getMonth() + 1) +
    '/' +
    padZero(now.getDate()) +
    ' ' +
    padZero(now.getHours()) +
    ':' +
    padZero(now.getMinutes()) +
    ':' +
    padZero(now.getSeconds());
  return res;
}
