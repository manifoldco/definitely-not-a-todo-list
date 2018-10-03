import { describe, PropTypes } from 'react-desc';

export var doc = function doc(Collapsible) {
  var DocumentedCollapsible = describe(Collapsible).description('A react component that expand/collapse animation.').usage('import { Collapsible } from \'grommet\';\n<Collapsible open={true}>test</Collapsible>');

  DocumentedCollapsible.propTypes = {
    open: PropTypes.bool.description('Whether or not the component should be open.')
  };

  return DocumentedCollapsible;
};