import * as React from 'react';
import 'scss/ComponentExample.scss';

interface TSComponentExampleProps {
  name: string;
}

export class TSComponentExample extends React.Component<TSComponentExampleProps, {}> {
  render() {
    return React.createElement('div', { ref: "main", className: 'ComponentExample' }, this.props.name);
  }
}
