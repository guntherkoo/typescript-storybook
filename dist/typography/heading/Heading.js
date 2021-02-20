function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

import React from 'react';
import classnames from 'classnames/bind';
import Text, { FontStates, ColorStates, SizeStates } from "../text";

require("./Heading.css");

var _styles = {
  "heading": "Heading__heading___1c6yy"
};
var styles = classnames.bind(_styles);
export var HeadingColorStates = ColorStates;
export var WeightStates;

(function (WeightStates) {
  WeightStates["H1"] = "heading-1";
  WeightStates["H1_LIGHT"] = "heading-1-light";
  WeightStates["H2"] = "heading-2";
  WeightStates["H2_LIGHT"] = "heading-2-light";
  WeightStates["H3"] = "heading-3";
  WeightStates["H3_LIGHT"] = "heading-3-light";
  WeightStates["H4"] = "heading-4";
  WeightStates["H4_LIGHT"] = "heading-4-light";
  WeightStates["H5"] = "heading-5";
  WeightStates["H5_LIGHT"] = "heading-5-light";
})(WeightStates || (WeightStates = {}));

;

var getTextPropsByWeight = function (weight) {
  switch (weight) {
    case WeightStates.H1:
      return {
        size: SizeStates.HEADING_1,
        font: FontStates.BOLD
      };

    case WeightStates.H1_LIGHT:
      return {
        size: SizeStates.HEADING_1,
        font: FontStates.LIGHT
      };

    case WeightStates.H2:
      return {
        size: SizeStates.HEADING_2,
        font: FontStates.BOLD
      };

    case WeightStates.H2_LIGHT:
      return {
        size: SizeStates.HEADING_2,
        font: FontStates.LIGHT
      };

    case WeightStates.H3:
      return {
        size: SizeStates.HEADING_3,
        font: FontStates.BOLD
      };

    case WeightStates.H3_LIGHT:
      return {
        size: SizeStates.HEADING_3,
        font: FontStates.LIGHT
      };

    case WeightStates.H4:
      return {
        size: SizeStates.HEADING_4,
        font: FontStates.BOLD
      };

    case WeightStates.H4_LIGHT:
      return {
        size: SizeStates.HEADING_4,
        font: FontStates.LIGHT
      };

    case WeightStates.H5:
      return {
        size: SizeStates.HEADING_5,
        font: FontStates.BOLD
      };

    case WeightStates.H5_LIGHT:
      return {
        size: SizeStates.HEADING_5,
        font: FontStates.LIGHT
      };

    default:
      return null;
  }
};

;

var Heading = function (_a) {
  var className = _a.className,
      children = _a.children,
      weight = _a.weight,
      color = _a.color,
      tag = _a.tag;
  var text_props = getTextPropsByWeight(weight);
  var composed_classname = classnames(styles('heading', weight), className);
  return /*#__PURE__*/React.createElement(Text, _extends({}, text_props, {
    tag: tag,
    color: color,
    className: composed_classname
  }), children);
};

Heading.defaultProps = {
  color: ColorStates.ALMOST_BLACK,
  weight: WeightStates.H1,
  tag: 'h1'
};
export default Heading;