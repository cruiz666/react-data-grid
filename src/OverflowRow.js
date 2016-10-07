import React from 'react';

class OverflowRow extends React.Component {

  constructor() {
    super();
    this.checkFocus = this.checkFocus.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    let meta = this.props.cellMetaData;
    return this.props.cellMetaData.
  }

  componentDidUpdate() {
    this.checkFocus();
  }
  
  componentDidMount() {
    this.checkFocus();
  }

  checkFocus() {
    if (this.isSelected()) {
      ReactDOM.findDOMNode(this).focus();
    }
  }

  isSelected() {
    let meta = this.props.cellMetaData;
    if (meta == null) { return false; }

    return (
      meta.selected
      && meta.selected.rowIdx === this.props.idx
    );
  }

  render() {
    return (<div tabIndex="-1" style={{ border: '1px solid #eee', height: this.props.height + 'px' }} width="100%" className="react-grid-Row"></div>);
  }
}

OverflowRow.propTypes = {
  idx: React.PropTypes.number,
  height: React.PropTypes.number,
  cellMetaData: React.PropTypes.object
};

export default OverflowRow;
