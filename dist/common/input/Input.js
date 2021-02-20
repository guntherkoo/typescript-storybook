import React, { useState, useEffect } from 'react';
import classnames from 'classnames/bind';

require("./Input.css");

var _styles = {
  "container": "Input__container___16lrW",
  "filled": "Input__filled___1Dgjg",
  "focused": "Input__focused___2wXOh"
};
var styles = classnames.bind(_styles);
export var TypeState;

(function (TypeState) {
  TypeState["TEXT"] = "text";
  TypeState["NUMBER"] = "number";
  TypeState["PASSWORD"] = "password";
})(TypeState || (TypeState = {}));

;
;

var Input = function (_a) {
  var className = _a.className,
      name = _a.name,
      type = _a.type,
      label = _a.label,
      value = _a.value,
      onChange = _a.onChange;

  var _b = useState(false),
      onFocus = _b[0],
      setOnFocus = _b[1];

  var _c = useState(false),
      isFilled = _c[0],
      setIsFilled = _c[1];

  useEffect(function () {
    if (value.length > 0) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, [onFocus]);
  var composed_classname = classnames(styles('container', {
    'focused': onFocus,
    'filled': isFilled
  }), className);
  return /*#__PURE__*/React.createElement("div", {
    className: composed_classname
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: name
  }, label), /*#__PURE__*/React.createElement("input", {
    id: name,
    name: name,
    type: type,
    placeholder: label,
    value: value,
    onFocus: function () {
      return setOnFocus(true);
    },
    onBlur: function () {
      return setOnFocus(false);
    },
    onChange: function (e) {
      return onChange(e.target.value);
    }
  }));
};

export default Input;