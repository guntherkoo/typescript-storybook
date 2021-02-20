import React from 'react';
import classnames from 'classnames/bind';

require("./Text.css");

var _styles = {
  "text": "Text__text___3eVx1",
  "inherit-color": "Text__inherit-color___30vgW",
  "white": "Text__white___2ncio",
  "off-white": "Text__off-white___2qm9Q",
  "lighter-gray": "Text__lighter-gray___13yrj",
  "light-gray": "Text__light-gray___s3itO",
  "gray": "Text__gray___23jmM",
  "dark-gray": "Text__dark-gray___1V4IS",
  "darker-gray": "Text__darker-gray___2QYcT",
  "almost-black": "Text__almost-black___zX_er",
  "black": "Text__black___vIcC8",
  "royal-blue": "Text__royal-blue___1Pc_E",
  "emerald": "Text__emerald___8D-bH",
  "dark-navy": "Text__dark-navy___omGq0",
  "inherit-font": "Text__inherit-font___34PF0",
  "light": "Text__light___2jF5F",
  "all-caps-light": "Text__all-caps-light___1RB01",
  "regular": "Text__regular___Bh17t",
  "all-caps-regular": "Text__all-caps-regular___1wGrG",
  "bold": "Text__bold___2wRTr",
  "all-caps-bold": "Text__all-caps-bold___2mZ5r",
  "inherit-size": "Text__inherit-size___hM-VS",
  "default": "Text__default___1Xh7Y",
  "small": "Text__small___MoVgd",
  "medium": "Text__medium___1ocDa",
  "large": "Text__large___1i0u1",
  "heading-1": "Text__heading-1___28bmo",
  "heading-2": "Text__heading-2___2-6TT",
  "heading-3": "Text__heading-3___1w8g-",
  "heading-4": "Text__heading-4___1Is3D",
  "heading-5": "Text__heading-5___1sMXj"
};
var styles = classnames.bind(_styles);
export var ColorStates;

(function (ColorStates) {
  ColorStates["INHERIT"] = "inherit-color";
  ColorStates["WHITE"] = "white";
  ColorStates["OFFWHITE"] = "off-white";
  ColorStates["LIGHTER_GRAY"] = "lighter-gray";
  ColorStates["LIGHT_GRAY"] = "light-gray";
  ColorStates["GRAY"] = "gray";
  ColorStates["DARK_GRAY"] = "dark-gray";
  ColorStates["DARKER_GRAY"] = "darker-gray";
  ColorStates["ALMOST_BLACK"] = "almost-black";
  ColorStates["BLACK"] = "black";
  ColorStates["ROYAL_BLUE"] = "royal-blue";
  ColorStates["EMERALD"] = "emerald";
  ColorStates["DARK_NAVY"] = "dark-navy";
})(ColorStates || (ColorStates = {}));

;
export var FontStates;

(function (FontStates) {
  FontStates["INHERIT"] = "inherit-font";
  FontStates["LIGHT"] = "light";
  FontStates["ALL_CAPS_LIGHT"] = "all-caps-light";
  FontStates["REGULAR"] = "regular";
  FontStates["ALL_CAPS_REGULAR"] = "all-caps-regular";
  FontStates["BOLD"] = "bold";
  FontStates["ALL_CAPS_BOLD"] = "all-caps-bold";
})(FontStates || (FontStates = {}));

;
export var SizeStates;

(function (SizeStates) {
  SizeStates["INHERIT"] = "inherit-size";
  SizeStates["DEFAULT"] = "default";
  SizeStates["SMALL"] = "small";
  SizeStates["MEDIUM"] = "medium";
  SizeStates["LARGE"] = "large";
  SizeStates["HEADING_1"] = "heading-1";
  SizeStates["HEADING_2"] = "heading-2";
  SizeStates["HEADING_3"] = "heading-3";
  SizeStates["HEADING_4"] = "heading-4";
  SizeStates["HEADING_5"] = "heading-5";
})(SizeStates || (SizeStates = {}));

;
;

var Text = function (_a) {
  var className = _a.className,
      children = _a.children,
      color = _a.color,
      font = _a.font,
      size = _a.size,
      tag = _a.tag;
  var Tag = tag;
  var composed_classname = classnames(styles('text', color, font, size), className);
  return /*#__PURE__*/React.createElement(Tag, {
    className: composed_classname
  }, children);
};

Text.defaultProps = {
  color: ColorStates.ALMOST_BLACK,
  font: FontStates.REGULAR,
  size: SizeStates.DEFAULT,
  tag: 'p'
};
export default Text;