import React, { useState } from 'react';
import classnames from 'classnames/bind';
import Button, { ColorStates, VariantStates, SizeStates } from "../button";

require("./Stepper.css");

var _styles = {
  "actions": "Stepper__actions___5qkxW"
};
var styles = classnames.bind(_styles);
;

var Stepper = function (_a) {
  var className = _a.className,
      items = _a.items,
      renderStepItem = _a.renderStepItem,
      hidePrevButton = _a.hidePrevButton;

  var _b = useState(0),
      activeStep = _b[0],
      setActiveStep = _b[1];

  var composed_classname = classnames(styles('container'), className);

  var handleNext = function () {
    return setActiveStep(function (prevStep) {
      return prevStep + 1;
    });
  };

  var handlePrev = function () {
    return setActiveStep(function (prevStep) {
      return prevStep - 1;
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: composed_classname
  }, renderStepItem(items[activeStep]), /*#__PURE__*/React.createElement("div", {
    className: styles('actions')
  }, /*#__PURE__*/React.createElement(Button, {
    text: "Next",
    ariaLabel: "Next Step",
    color: ColorStates.ROYAL_BLUE,
    variant: VariantStates.CONTAINED,
    size: SizeStates.MEDIUM,
    onClick: function () {
      return handleNext();
    },
    disabled: activeStep === items.length - 1
  }), activeStep > 0 && !hidePrevButton && /*#__PURE__*/React.createElement(Button, {
    text: "Previous",
    ariaLabel: "Previous Step",
    color: ColorStates.ROYAL_BLUE,
    variant: VariantStates.OUTLINED,
    size: SizeStates.MEDIUM,
    onClick: function () {
      return handlePrev();
    }
  })));
};

Stepper.defaultProps = {
  hidePrevButton: false
};
export default Stepper;