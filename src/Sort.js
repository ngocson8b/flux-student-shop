import {SortableElement} from 'react-sortable-hoc';
import React from 'react';

export default class Item extends React.Component {
  render() {
    const SortableItem = SortableElement(({item}) => {
      return(
        <div style={{
          border: '2px solid #F00',
          background: '#0D',
          padding: '10px',
          marginBottom: '10px'

        }}>
          {item}
          </div>
      );
    });
    return <SortableItem index={this.props.index} item={this.props.item} />
  }
}
