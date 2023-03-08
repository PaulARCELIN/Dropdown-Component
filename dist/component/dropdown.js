"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = Dropdown;
require("./Dropdown.css");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Dropdown(_ref) {
  let {
    list,
    label,
    id,
    selection
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: "dropdown"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: id
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "dropdown-content"
  }, /*#__PURE__*/React.createElement("select", {
    id: id,
    onChange: e => selection(e.target.value)
  }, list.map(function (e) {
    return /*#__PURE__*/React.createElement("option", {
      key: e
    }, e);
  }))));
}
Dropdown.propTypes = {
  list: _propTypes.default.array,
  label: _propTypes.default.string,
  id: _propTypes.default.string,
  selection: _propTypes.default.func
};