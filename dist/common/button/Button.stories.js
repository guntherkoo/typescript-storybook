import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import Button, { SizeStates, ColorStates, VariantStates } from "./Button";

var handleOnClick = function () {
  alert('You clicked the button!');
};

storiesOf('common/button', module).addDecorator(withKnobs({
  escapeHTML: false
})).addDecorator(centered).add('default', function () {
  return /*#__PURE__*/React.createElement(Button, {
    text: text('text', 'MainStreet'),
    ariaLabel: text('aria-label', 'Default Button'),
    onClick: function () {
      return handleOnClick();
    }
  });
}).add('contained', function () {
  return /*#__PURE__*/React.createElement(Button, {
    text: text('text', 'MainStreet'),
    ariaLabel: text('aria-label', 'Contained Button'),
    color: select('color', ColorStates, ColorStates.ROYAL_BLUE),
    variant: select('variant', VariantStates, VariantStates.CONTAINED),
    size: select('size', SizeStates, SizeStates.LARGE),
    onClick: function () {
      return handleOnClick();
    }
  });
}).add('outlined', function () {
  return /*#__PURE__*/React.createElement(Button, {
    text: text('text', 'MainStreet'),
    ariaLabel: text('aria-label', 'Outlined Button'),
    color: select('color', ColorStates, ColorStates.ROYAL_BLUE),
    variant: select('variant', VariantStates, VariantStates.OUTLINED),
    size: select('size', SizeStates, SizeStates.LARGE),
    onClick: function () {
      return handleOnClick();
    }
  });
}).add('disabled', function () {
  return /*#__PURE__*/React.createElement(Button, {
    text: text('text', 'MainStreet'),
    ariaLabel: text('aria-label', 'Disabled Button'),
    color: select('color', ColorStates, ColorStates.ROYAL_BLUE),
    variant: select('variant', VariantStates, VariantStates.CONTAINED),
    size: select('size', SizeStates, SizeStates.LARGE),
    onClick: function () {
      return handleOnClick();
    },
    disabled: boolean('disabled', true)
  });
});