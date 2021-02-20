import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Heading, { WeightStates, HeadingColorStates } from "./Heading";
var example_text = 'Welcome to MainStreet!';
var weights = Object.entries(WeightStates);
storiesOf('typography/heading', module).addDecorator(withKnobs({
  escapeHTML: false
})).addDecorator(centered).add('default', function () {
  return /*#__PURE__*/React.createElement(Heading, {
    tag: "h1",
    weight: select('weight', WeightStates, WeightStates.H1),
    color: select('color', HeadingColorStates, HeadingColorStates.DARK_NAVY)
  }, text('text', example_text));
}).add('weights', function () {
  return /*#__PURE__*/React.createElement(React.Fragment, null, weights.map(function (weight) {
    return /*#__PURE__*/React.createElement(Heading, {
      key: weight[1],
      weight: weight[1],
      color: HeadingColorStates.ALMOST_BLACK
    }, example_text);
  }));
});