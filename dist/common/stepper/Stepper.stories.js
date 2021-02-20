import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';
import Stepper from "./Stepper";
var items = [{
  name: 'item 1',
  question: 'Do you have a pet cat?'
}, {
  name: 'item 2',
  question: 'Do you have a pet dog?'
}, {
  name: 'item 3',
  question: 'Do you have a pet goldfish?'
}];

var renderStepItem = function (item) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, item.name), /*#__PURE__*/React.createElement("h2", null, item.question));
};

storiesOf('common/stepper', module).addDecorator(withKnobs({
  escapeHTML: false
})).addDecorator(centered).add('default', function () {
  return /*#__PURE__*/React.createElement(Stepper, {
    items: object('items', items),
    renderStepItem: renderStepItem
  });
}).add('hide previous button', function () {
  return /*#__PURE__*/React.createElement(Stepper, {
    items: object('items', items),
    renderStepItem: renderStepItem,
    hidePrevButton: boolean('hide prev', true)
  });
});