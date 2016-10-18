import * as React from 'react';
import 'scss/ComponentExample.scss';
import { Animator } from 'bolt/utils';

interface TSComponentExampleProps {
  name: string;
}

export class TSComponentExample extends React.Component<TSComponentExampleProps, {}> {
  componentDidMount() {
    Animator.from(this.refs['main'], 0.4, { autoAlpha: 0, ease: Sine.easeIn, delay: 1 });
  }
  render() {
    return React.createElement('div', { ref: "main", className: 'ComponentExample' }, this.props.name);
  }
}
