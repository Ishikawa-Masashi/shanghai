export function toDisplayTime(duration: number) {
  const hour = Math.floor(duration / 3600000);
  const minute = Math.floor((duration - 3600000 * hour) / 60000);

  const hh = ('00' + hour).slice(-2);
  const mm = ('00' + minute).slice(-2);
  const ms = ('00000' + (duration % 60000)).slice(-5);

  return `${mm}'${ms.slice(0, 2)}"${ms.slice(2, 3)}`;
}
