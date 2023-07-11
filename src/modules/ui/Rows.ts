import { Size } from '../style/types';
import Wrapper from './Wrapper';

type RowsProps = {
  id?: string;
  rows: string[];
  space?: Size;
};
export default ({ id, rows, space }: RowsProps) => {
  const hasRows = rows.length;
  const renderRows = rows.map((row) =>
    Wrapper({
      content: row,
      element: 'span',
      paddingTop: space,
    }),
  );

  return hasRows
    ? Wrapper({
        children: renderRows,
        display: 'flex',
        flexDirection: 'column',
        id,
      })
    : '';
};
