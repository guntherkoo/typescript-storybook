import React from 'react';
import classnames from 'classnames/bind';

require("./Button.css");

var _styles = {
  "btn": "Button__btn___2qvB4",
  "small": "Button__small___3auHM",
  "medium": "Button__medium___1lEzX",
  "large": "Button__large___P7_Ru",
  "contained": "Button__contained___2OTDv",
  "royal-blue": "Button__royal-blue___7wsQT",
  "dark-navy": "Button__dark-navy___2U7P9",
  "emerald": "Button__emerald___1HuKo",
  "outlined": "Button__outlined___1Mae5"
};
var styles = classnames.bind(_styles);
export var SizeStates;

(function (SizeStates) {
  SizeStates["SMALL"] = "small";
  SizeStates["MEDIUM"] = "medium";
  SizeStates["LARGE"] = "large";
})(SizeStates || (SizeStates = {}));

export var ColorStates;

(function (ColorStates) {
  ColorStates["ROYAL_BLUE"] = "royal-blue";
  ColorStates["DARK_NAVY"] = "dark-navy";
  ColorStates["EMERALD"] = "emerald";
})(ColorStates || (ColorStates = {}));

;
export var VariantStates;

(function (VariantStates) {
  VariantStates["OUTLINED"] = "outlined";
  VariantStates["CONTAINED"] = "contained";
})(VariantStates || (VariantStates = {}));

;
;

var Button = function (_a) {
  var className = _a.className,
      ariaLabel = _a.ariaLabel,
      disabled = _a.disabled,
      color = _a.color,
      text = _a.text,
      size = _a.size,
      variant = _a.variant,
      onClick = _a.onClick;
  var composed_classname = classnames(styles('btn', color, variant, size), className);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: composed_classname,
    "aria-label": ariaLabel,
    onClick: onClick,
    disabled: disabled
  }, text);
};

Button.defaultProps = {
  size: SizeStates.LARGE,
  color: ColorStates.DARK_NAVY,
  variant: VariantStates.CONTAINED
};
export default Button;