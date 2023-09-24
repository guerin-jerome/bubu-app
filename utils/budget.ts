export const formatType = (type: string | undefined) => {
  switch (type) {
    case 'saved':
      return 'EPARGNE';
    case 'variable':
      return 'VARIABLE';
    case 'fixed':
      return 'FIXE';
    default:
      console.error(`Unknown type : ${type}`);
  }
};
