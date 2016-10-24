// @flow

import React from 'react';



export default class Hello extends React.Component {

  props: {
    name: string
  }

  state: {
    count: number
  }

  static defaultProps = {
    name: 'Johnny'
  }

  state = {
    count: 0
  }

  render() {
    return (<div>
      Hello {this.props.name}!<br/>
      Count is now {this.state.count}
    </div>);
  }

}
