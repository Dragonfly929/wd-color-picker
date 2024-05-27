import React from 'react';
import { CustomPicker } from 'react-color';

class MyColorPicker extends React.Component {
  render() {
    return (
      <div style={{ padding: '20px', backgroundColor: this.props.hex }}>
        <h2>Custom Color Picker</h2>
        {/* You can customize your color picker UI here */}
      </div>
    );
  }
}

export default CustomPicker(MyColorPicker);
