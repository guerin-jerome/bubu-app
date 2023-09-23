export const createDate = (date: string): Date => {
  const [year, month, rest] = date.split('-');
  const [day, hours, minutes, seconds] = rest.split(':');
  const formattedDate = new Date(
    parseInt(year, 10),
    parseInt(month, 10) - 1,
    parseInt(day, 10),
    parseInt(hours, 10),
    parseInt(minutes, 10),
    parseInt(seconds, 10),
  );
  return formattedDate;
};

export const formatDate = (date: string): string => {
  return createDate(date).toLocaleDateString('fr-FR');
};
