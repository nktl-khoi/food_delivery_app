export function convertMillisecondsToDate(milliseconds: number | string): Date {
  if (typeof milliseconds === 'number') {
    return new Date(milliseconds);
  }
  return new Date(parseInt(milliseconds));
}

export function convertDateTo_HM_DMY(date: Date): string {
  let dateString = `${date.getHours()}:${date.getMinutes()} ${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  return dateString;
}
