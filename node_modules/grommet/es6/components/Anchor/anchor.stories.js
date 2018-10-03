import React from 'react';
import { storiesOf } from '@storybook/react';

import { Add } from 'grommet-icons/es6/icons/Add';


import { Anchor, Grommet } from '../';
import { grommet } from '../../themes';

storiesOf('Anchor', module).add('Default', function () {
  return React.createElement(
    Grommet,
    { theme: grommet },
    React.createElement(
      Anchor,
      { href: '#' },
      'Link'
    )
  );
}).add('Icon', function () {
  return React.createElement(
    Grommet,
    { theme: grommet },
    React.createElement(Anchor, { icon: React.createElement(Add, null), label: 'Add', href: '#' })
  );
}).add('With Text', function () {
  return React.createElement(
    Grommet,
    { theme: grommet },
    'This is a ',
    React.createElement(Anchor, { label: 'link', href: '#' }),
    ' with text.'
  );
});