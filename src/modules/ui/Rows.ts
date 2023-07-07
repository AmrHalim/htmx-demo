import Wrapper from './Wrapper';

type RowsProps = {
  rows: string[];
};
export default ({ rows }: RowsProps) => {
  const hasRows = rows.length;
  const renderRows = rows
    .map((error) =>
      Wrapper({
        content: error,
        element: 'span',
      }),
    )
    .join('');

  return hasRows
    ? Wrapper({
        content: renderRows,
        element: 'div',
        style: 'display: flex; justify-content: center; align-items: center; flex-direction: column;',
      })
    : '';
};
