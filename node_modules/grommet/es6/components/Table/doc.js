import { describe, PropTypes } from 'react-desc';

import { getAvailableAtBadge } from '../../utils';

export var doc = function doc(Table) {
  var DocumentedTable = describe(Table).availableAt(getAvailableAtBadge('Table')).description('A table of data organized in cells.').usage('import { Table, TableHeader, TableFooter, TableBody, TableRow } from \'grommet\';\n<Table />');

  DocumentedTable.propTypes = {
    caption: PropTypes.string.description('One line description.')
  };

  return DocumentedTable;
};