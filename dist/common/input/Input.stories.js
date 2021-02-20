import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Input, { TypeState } from "./Input";
storiesOf('common/input', module).addDecorator(withKnobs({
  escapeHTML: false
})).addDecorator(centered).add('default', function () {
  var _a = useState(''),
      value = _a[0],
      setValue = _a[1];

  var onChange = function (value) {
    return setValue(value);
  };

  return /*#__PURE__*/React.createElement(Input, {
    name: text('name', 'company'),
    type: select('type', TypeState, TypeState.TEXT),
    label: text('label', 'Company'),
    value: value,
    onChange: function (e) {
      return onChange(e);
    }
  });
});