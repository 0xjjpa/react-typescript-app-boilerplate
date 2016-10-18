import * as React from 'react';
import 'scss/ComponentExample.scss';

interface ComponentExampleProps {
  name: string;
}

export class ComponentExample extends React.Component<ComponentExampleProps, {}> {
  render() {
    return <div className="ComponentExample">{this.props.name}</div>
  }
}
