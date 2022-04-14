/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Modules/FlashSale/Resources/assets/admin/js/FlashSale.js":
/*!******************************************************************!*\
  !*** ./Modules/FlashSale/Resources/assets/admin/js/FlashSale.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var _FlashSaleProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlashSaleProduct */ \"./Modules/FlashSale/Resources/assets/admin/js/FlashSaleProduct.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar _default = /*#__PURE__*/function () {\n  function _default() {\n    _classCallCheck(this, _default);\n\n    this.productCount = 0;\n    this.addFlashSaleProducts(FleetCart.data['flash_sale.products']);\n\n    if (this.productCount === 0) {\n      this.addProduct();\n    }\n\n    this.addFlashSaleProductsError(FleetCart.errors['flash_sale.products']);\n    this.attachEventListeners();\n    this.makeProductPanelsSortable();\n  }\n\n  _createClass(_default, [{\n    key: \"addFlashSaleProducts\",\n    value: function addFlashSaleProducts(products) {\n      var _iterator = _createForOfIteratorHelper(products),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var attributes = _step.value;\n          this.addProduct(attributes);\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }\n  }, {\n    key: \"addProduct\",\n    value: function addProduct() {\n      var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      var productTemplate = new _FlashSaleProduct__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        productPanelNumber: this.productCount++,\n        product: attributes\n      });\n      $('#products-wrapper').append(productTemplate.render());\n      window.admin.selectize();\n    }\n  }, {\n    key: \"addFlashSaleProductsError\",\n    value: function addFlashSaleProductsError(errors) {\n      for (var key in errors) {\n        var parent = this.getInputFieldForKey(key).parent();\n        parent.addClass('has-error');\n        parent.append(\"<span class=\\\"help-block\\\">\".concat(errors[key][0], \"</span>\"));\n      }\n    }\n  }, {\n    key: \"getInputFieldForKey\",\n    value: function getInputFieldForKey(key) {\n      var keyParts = key.split('.'); // Replace all \"_\" to \"-\".\n\n      keyParts = keyParts.map(function (k) {\n        return k.split('_').join('-');\n      });\n      return $(\"#\".concat(keyParts.join('-')));\n    }\n  }, {\n    key: \"attachEventListeners\",\n    value: function attachEventListeners() {\n      var _this = this;\n\n      $('.add-product').on('click', function () {\n        _this.addProduct();\n      });\n    }\n  }, {\n    key: \"makeProductPanelsSortable\",\n    value: function makeProductPanelsSortable() {\n      Sortable.create(document.getElementById('products-wrapper'), {\n        handle: '.drag-icon',\n        animation: 150\n      });\n    }\n  }]);\n\n  return _default;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Nb2R1bGVzL0ZsYXNoU2FsZS9SZXNvdXJjZXMvYXNzZXRzL2FkbWluL2pzL0ZsYXNoU2FsZS5qcz8wNDViIl0sIm5hbWVzIjpbInByb2R1Y3RDb3VudCIsImFkZEZsYXNoU2FsZVByb2R1Y3RzIiwiRmxlZXRDYXJ0IiwiZGF0YSIsImFkZFByb2R1Y3QiLCJhZGRGbGFzaFNhbGVQcm9kdWN0c0Vycm9yIiwiZXJyb3JzIiwiYXR0YWNoRXZlbnRMaXN0ZW5lcnMiLCJtYWtlUHJvZHVjdFBhbmVsc1NvcnRhYmxlIiwicHJvZHVjdHMiLCJhdHRyaWJ1dGVzIiwicHJvZHVjdFRlbXBsYXRlIiwiRmxhc2hTYWxlUHJvZHVjdCIsInByb2R1Y3RQYW5lbE51bWJlciIsInByb2R1Y3QiLCIkIiwiYXBwZW5kIiwicmVuZGVyIiwid2luZG93IiwiYWRtaW4iLCJzZWxlY3RpemUiLCJrZXkiLCJwYXJlbnQiLCJnZXRJbnB1dEZpZWxkRm9yS2V5IiwiYWRkQ2xhc3MiLCJrZXlQYXJ0cyIsInNwbGl0IiwibWFwIiwiayIsImpvaW4iLCJvbiIsIlNvcnRhYmxlIiwiY3JlYXRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImhhbmRsZSIsImFuaW1hdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUdJLHNCQUFjO0FBQUE7O0FBQ1YsU0FBS0EsWUFBTCxHQUFvQixDQUFwQjtBQUVBLFNBQUtDLG9CQUFMLENBQTBCQyxTQUFTLENBQUNDLElBQVYsQ0FBZSxxQkFBZixDQUExQjs7QUFFQSxRQUFJLEtBQUtILFlBQUwsS0FBc0IsQ0FBMUIsRUFBNkI7QUFDekIsV0FBS0ksVUFBTDtBQUNIOztBQUVELFNBQUtDLHlCQUFMLENBQStCSCxTQUFTLENBQUNJLE1BQVYsQ0FBaUIscUJBQWpCLENBQS9CO0FBRUEsU0FBS0Msb0JBQUw7QUFDQSxTQUFLQyx5QkFBTDtBQUNIOzs7O1dBRUQsOEJBQXFCQyxRQUFyQixFQUErQjtBQUFBLGlEQUNKQSxRQURJO0FBQUE7O0FBQUE7QUFDM0IsNERBQWlDO0FBQUEsY0FBeEJDLFVBQXdCO0FBQzdCLGVBQUtOLFVBQUwsQ0FBZ0JNLFVBQWhCO0FBQ0g7QUFIMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUk5Qjs7O1dBRUQsc0JBQTRCO0FBQUEsVUFBakJBLFVBQWlCLHVFQUFKLEVBQUk7QUFDeEIsVUFBSUMsZUFBZSxHQUFHLElBQUlDLHlEQUFKLENBQXFCO0FBQUVDLDBCQUFrQixFQUFFLEtBQUtiLFlBQUwsRUFBdEI7QUFBMkNjLGVBQU8sRUFBRUo7QUFBcEQsT0FBckIsQ0FBdEI7QUFFQUssT0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJDLE1BQXZCLENBQThCTCxlQUFlLENBQUNNLE1BQWhCLEVBQTlCO0FBRUFDLFlBQU0sQ0FBQ0MsS0FBUCxDQUFhQyxTQUFiO0FBQ0g7OztXQUVELG1DQUEwQmQsTUFBMUIsRUFBa0M7QUFDOUIsV0FBSyxJQUFJZSxHQUFULElBQWdCZixNQUFoQixFQUF3QjtBQUNwQixZQUFJZ0IsTUFBTSxHQUFHLEtBQUtDLG1CQUFMLENBQXlCRixHQUF6QixFQUE4QkMsTUFBOUIsRUFBYjtBQUVBQSxjQUFNLENBQUNFLFFBQVAsQ0FBZ0IsV0FBaEI7QUFDQUYsY0FBTSxDQUFDTixNQUFQLHNDQUEwQ1YsTUFBTSxDQUFDZSxHQUFELENBQU4sQ0FBWSxDQUFaLENBQTFDO0FBQ0g7QUFDSjs7O1dBRUQsNkJBQW9CQSxHQUFwQixFQUF5QjtBQUNyQixVQUFJSSxRQUFRLEdBQUdKLEdBQUcsQ0FBQ0ssS0FBSixDQUFVLEdBQVYsQ0FBZixDQURxQixDQUdyQjs7QUFDQUQsY0FBUSxHQUFHQSxRQUFRLENBQUNFLEdBQVQsQ0FBYSxVQUFBQyxDQUFDLEVBQUk7QUFDekIsZUFBT0EsQ0FBQyxDQUFDRixLQUFGLENBQVEsR0FBUixFQUFhRyxJQUFiLENBQWtCLEdBQWxCLENBQVA7QUFDSCxPQUZVLENBQVg7QUFJQSxhQUFPZCxDQUFDLFlBQUtVLFFBQVEsQ0FBQ0ksSUFBVCxDQUFjLEdBQWQsQ0FBTCxFQUFSO0FBQ0g7OztXQUVELGdDQUF1QjtBQUFBOztBQUNuQmQsT0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQmUsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsWUFBTTtBQUNoQyxhQUFJLENBQUMxQixVQUFMO0FBQ0gsT0FGRDtBQUdIOzs7V0FFRCxxQ0FBNEI7QUFDeEIyQixjQUFRLENBQUNDLE1BQVQsQ0FBZ0JDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixrQkFBeEIsQ0FBaEIsRUFBNkQ7QUFDekRDLGNBQU0sRUFBRSxZQURpRDtBQUV6REMsaUJBQVMsRUFBRTtBQUY4QyxPQUE3RDtBQUlIIiwiZmlsZSI6Ii4vTW9kdWxlcy9GbGFzaFNhbGUvUmVzb3VyY2VzL2Fzc2V0cy9hZG1pbi9qcy9GbGFzaFNhbGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmxhc2hTYWxlUHJvZHVjdCBmcm9tICcuL0ZsYXNoU2FsZVByb2R1Y3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0Q291bnQgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmFkZEZsYXNoU2FsZVByb2R1Y3RzKEZsZWV0Q2FydC5kYXRhWydmbGFzaF9zYWxlLnByb2R1Y3RzJ10pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9kdWN0Q291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRQcm9kdWN0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFkZEZsYXNoU2FsZVByb2R1Y3RzRXJyb3IoRmxlZXRDYXJ0LmVycm9yc1snZmxhc2hfc2FsZS5wcm9kdWN0cyddKTtcclxuXHJcbiAgICAgICAgdGhpcy5hdHRhY2hFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIHRoaXMubWFrZVByb2R1Y3RQYW5lbHNTb3J0YWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEZsYXNoU2FsZVByb2R1Y3RzKHByb2R1Y3RzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgYXR0cmlidXRlcyBvZiBwcm9kdWN0cykge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFByb2R1Y3QoYXR0cmlidXRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFByb2R1Y3QoYXR0cmlidXRlcyA9IHt9KSB7XHJcbiAgICAgICAgbGV0IHByb2R1Y3RUZW1wbGF0ZSA9IG5ldyBGbGFzaFNhbGVQcm9kdWN0KHsgcHJvZHVjdFBhbmVsTnVtYmVyOiB0aGlzLnByb2R1Y3RDb3VudCsrLCBwcm9kdWN0OiBhdHRyaWJ1dGVzIH0pO1xyXG5cclxuICAgICAgICAkKCcjcHJvZHVjdHMtd3JhcHBlcicpLmFwcGVuZChwcm9kdWN0VGVtcGxhdGUucmVuZGVyKCkpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRtaW4uc2VsZWN0aXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRmxhc2hTYWxlUHJvZHVjdHNFcnJvcihlcnJvcnMpIHtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gZXJyb3JzKSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLmdldElucHV0RmllbGRGb3JLZXkoa2V5KS5wYXJlbnQoKTtcclxuXHJcbiAgICAgICAgICAgIHBhcmVudC5hZGRDbGFzcygnaGFzLWVycm9yJyk7XHJcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmQoYDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiPiR7ZXJyb3JzW2tleV1bMF19PC9zcGFuPmApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRJbnB1dEZpZWxkRm9yS2V5KGtleSkge1xyXG4gICAgICAgIGxldCBrZXlQYXJ0cyA9IGtleS5zcGxpdCgnLicpO1xyXG5cclxuICAgICAgICAvLyBSZXBsYWNlIGFsbCBcIl9cIiB0byBcIi1cIi5cclxuICAgICAgICBrZXlQYXJ0cyA9IGtleVBhcnRzLm1hcChrID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGsuc3BsaXQoJ18nKS5qb2luKCctJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAkKGAjJHtrZXlQYXJ0cy5qb2luKCctJyl9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgJCgnLmFkZC1wcm9kdWN0Jykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFByb2R1Y3QoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlUHJvZHVjdFBhbmVsc1NvcnRhYmxlKCkge1xyXG4gICAgICAgIFNvcnRhYmxlLmNyZWF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdHMtd3JhcHBlcicpLCB7XHJcbiAgICAgICAgICAgIGhhbmRsZTogJy5kcmFnLWljb24nLFxyXG4gICAgICAgICAgICBhbmltYXRpb246IDE1MCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Modules/FlashSale/Resources/assets/admin/js/FlashSale.js\n");

/***/ }),

/***/ "./Modules/FlashSale/Resources/assets/admin/js/FlashSaleProduct.js":
/*!*************************************************************************!*\
  !*** ./Modules/FlashSale/Resources/assets/admin/js/FlashSaleProduct.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar _default = /*#__PURE__*/function () {\n  function _default(data) {\n    _classCallCheck(this, _default);\n\n    this.productPanelHtml = this.getProductPanelHtml(data);\n  }\n\n  _createClass(_default, [{\n    key: \"getProductPanelHtml\",\n    value: function getProductPanelHtml(data) {\n      data.product = this.normalizeAttributes(data.product);\n\n      var template = _.template($('#flash-sale-product-template').html());\n\n      return $(template(data));\n    }\n  }, {\n    key: \"normalizeAttributes\",\n    value: function normalizeAttributes(product) {\n      if ($.isEmptyObject(product)) {\n        return {\n          id: null,\n          pivot: {\n            campaign_end: null,\n            price: {\n              amount: null\n            },\n            qty: null\n          }\n        };\n      }\n\n      if (!$.isEmptyObject(FleetCart.errors['flash_sale.products'])) {\n        return {\n          id: product.id,\n          name: product.name,\n          pivot: {\n            campaign_end: product.campaign_end,\n            price: {\n              amount: product.price\n            },\n            qty: product.qty\n          }\n        };\n      }\n\n      return product;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.attachEventListeners();\n      window.admin.dateTimePicker(this.productPanelHtml.find('.datetime-picker'));\n      return this.productPanelHtml;\n    }\n  }, {\n    key: \"attachEventListeners\",\n    value: function attachEventListeners() {\n      var _this = this;\n\n      this.productPanelHtml.find('.delete-product-panel').on('click', function () {\n        _this.productPanelHtml.remove();\n      });\n    }\n  }]);\n\n  return _default;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Nb2R1bGVzL0ZsYXNoU2FsZS9SZXNvdXJjZXMvYXNzZXRzL2FkbWluL2pzL0ZsYXNoU2FsZVByb2R1Y3QuanM/ZGNlNSJdLCJuYW1lcyI6WyJkYXRhIiwicHJvZHVjdFBhbmVsSHRtbCIsImdldFByb2R1Y3RQYW5lbEh0bWwiLCJwcm9kdWN0Iiwibm9ybWFsaXplQXR0cmlidXRlcyIsInRlbXBsYXRlIiwiXyIsIiQiLCJodG1sIiwiaXNFbXB0eU9iamVjdCIsImlkIiwicGl2b3QiLCJjYW1wYWlnbl9lbmQiLCJwcmljZSIsImFtb3VudCIsInF0eSIsIkZsZWV0Q2FydCIsImVycm9ycyIsIm5hbWUiLCJhdHRhY2hFdmVudExpc3RlbmVycyIsIndpbmRvdyIsImFkbWluIiwiZGF0ZVRpbWVQaWNrZXIiLCJmaW5kIiwib24iLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJLG9CQUFZQSxJQUFaLEVBQWtCO0FBQUE7O0FBQ2QsU0FBS0MsZ0JBQUwsR0FBd0IsS0FBS0MsbUJBQUwsQ0FBeUJGLElBQXpCLENBQXhCO0FBQ0g7Ozs7V0FFRCw2QkFBb0JBLElBQXBCLEVBQTBCO0FBQ3RCQSxVQUFJLENBQUNHLE9BQUwsR0FBZSxLQUFLQyxtQkFBTCxDQUF5QkosSUFBSSxDQUFDRyxPQUE5QixDQUFmOztBQUVBLFVBQUlFLFFBQVEsR0FBR0MsQ0FBQyxDQUFDRCxRQUFGLENBQVdFLENBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDQyxJQUFsQyxFQUFYLENBQWY7O0FBRUEsYUFBT0QsQ0FBQyxDQUFDRixRQUFRLENBQUNMLElBQUQsQ0FBVCxDQUFSO0FBQ0g7OztXQUVELDZCQUFvQkcsT0FBcEIsRUFBNkI7QUFDekIsVUFBSUksQ0FBQyxDQUFDRSxhQUFGLENBQWdCTixPQUFoQixDQUFKLEVBQThCO0FBQzFCLGVBQU87QUFBRU8sWUFBRSxFQUFFLElBQU47QUFBWUMsZUFBSyxFQUFFO0FBQUVDLHdCQUFZLEVBQUUsSUFBaEI7QUFBc0JDLGlCQUFLLEVBQUU7QUFBRUMsb0JBQU0sRUFBRTtBQUFWLGFBQTdCO0FBQStDQyxlQUFHLEVBQUU7QUFBcEQ7QUFBbkIsU0FBUDtBQUNIOztBQUVELFVBQUksQ0FBRVIsQ0FBQyxDQUFDRSxhQUFGLENBQWdCTyxTQUFTLENBQUNDLE1BQVYsQ0FBaUIscUJBQWpCLENBQWhCLENBQU4sRUFBZ0U7QUFDNUQsZUFBTztBQUNIUCxZQUFFLEVBQUVQLE9BQU8sQ0FBQ08sRUFEVDtBQUVIUSxjQUFJLEVBQUVmLE9BQU8sQ0FBQ2UsSUFGWDtBQUdIUCxlQUFLLEVBQUU7QUFBRUMsd0JBQVksRUFBRVQsT0FBTyxDQUFDUyxZQUF4QjtBQUFzQ0MsaUJBQUssRUFBRTtBQUFFQyxvQkFBTSxFQUFFWCxPQUFPLENBQUNVO0FBQWxCLGFBQTdDO0FBQXdFRSxlQUFHLEVBQUVaLE9BQU8sQ0FBQ1k7QUFBckY7QUFISixTQUFQO0FBS0g7O0FBRUQsYUFBT1osT0FBUDtBQUNIOzs7V0FFRCxrQkFBUztBQUNMLFdBQUtnQixvQkFBTDtBQUVBQyxZQUFNLENBQUNDLEtBQVAsQ0FBYUMsY0FBYixDQUE0QixLQUFLckIsZ0JBQUwsQ0FBc0JzQixJQUF0QixDQUEyQixrQkFBM0IsQ0FBNUI7QUFFQSxhQUFPLEtBQUt0QixnQkFBWjtBQUNIOzs7V0FFRCxnQ0FBdUI7QUFBQTs7QUFDbkIsV0FBS0EsZ0JBQUwsQ0FBc0JzQixJQUF0QixDQUEyQix1QkFBM0IsRUFBb0RDLEVBQXBELENBQXVELE9BQXZELEVBQWdFLFlBQU07QUFDbEUsYUFBSSxDQUFDdkIsZ0JBQUwsQ0FBc0J3QixNQUF0QjtBQUNILE9BRkQ7QUFHSCIsImZpbGUiOiIuL01vZHVsZXMvRmxhc2hTYWxlL1Jlc291cmNlcy9hc3NldHMvYWRtaW4vanMvRmxhc2hTYWxlUHJvZHVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3RQYW5lbEh0bWwgPSB0aGlzLmdldFByb2R1Y3RQYW5lbEh0bWwoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvZHVjdFBhbmVsSHRtbChkYXRhKSB7XHJcbiAgICAgICAgZGF0YS5wcm9kdWN0ID0gdGhpcy5ub3JtYWxpemVBdHRyaWJ1dGVzKGRhdGEucHJvZHVjdCk7XHJcblxyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJCgnI2ZsYXNoLXNhbGUtcHJvZHVjdC10ZW1wbGF0ZScpLmh0bWwoKSk7XHJcblxyXG4gICAgICAgIHJldHVybiAkKHRlbXBsYXRlKGRhdGEpKTtcclxuICAgIH1cclxuXHJcbiAgICBub3JtYWxpemVBdHRyaWJ1dGVzKHByb2R1Y3QpIHtcclxuICAgICAgICBpZiAoJC5pc0VtcHR5T2JqZWN0KHByb2R1Y3QpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGlkOiBudWxsLCBwaXZvdDogeyBjYW1wYWlnbl9lbmQ6IG51bGwsIHByaWNlOiB7IGFtb3VudDogbnVsbCB9LCBxdHk6IG51bGwgfSB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCEgJC5pc0VtcHR5T2JqZWN0KEZsZWV0Q2FydC5lcnJvcnNbJ2ZsYXNoX3NhbGUucHJvZHVjdHMnXSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlkOiBwcm9kdWN0LmlkLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogcHJvZHVjdC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgcGl2b3Q6IHsgY2FtcGFpZ25fZW5kOiBwcm9kdWN0LmNhbXBhaWduX2VuZCwgcHJpY2U6IHsgYW1vdW50OiBwcm9kdWN0LnByaWNlIH0sIHF0eTogcHJvZHVjdC5xdHkgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9kdWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmF0dGFjaEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZG1pbi5kYXRlVGltZVBpY2tlcih0aGlzLnByb2R1Y3RQYW5lbEh0bWwuZmluZCgnLmRhdGV0aW1lLXBpY2tlcicpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdFBhbmVsSHRtbDtcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2hFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3RQYW5lbEh0bWwuZmluZCgnLmRlbGV0ZS1wcm9kdWN0LXBhbmVsJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RQYW5lbEh0bWwucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Modules/FlashSale/Resources/assets/admin/js/FlashSaleProduct.js\n");

/***/ }),

/***/ "./Modules/FlashSale/Resources/assets/admin/js/main.js":
/*!*************************************************************!*\
  !*** ./Modules/FlashSale/Resources/assets/admin/js/main.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _FlashSale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlashSale */ \"./Modules/FlashSale/Resources/assets/admin/js/FlashSale.js\");\n\nnew _FlashSale__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nwindow.admin.removeSubmitButtonOffsetOn(['#products']);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Nb2R1bGVzL0ZsYXNoU2FsZS9SZXNvdXJjZXMvYXNzZXRzL2FkbWluL2pzL21haW4uanM/MDRkMCJdLCJuYW1lcyI6WyJGbGFzaFNhbGUiLCJ3aW5kb3ciLCJhZG1pbiIsInJlbW92ZVN1Ym1pdEJ1dHRvbk9mZnNldE9uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFJQSxrREFBSjtBQUVBQyxNQUFNLENBQUNDLEtBQVAsQ0FBYUMsMEJBQWIsQ0FBd0MsQ0FBQyxXQUFELENBQXhDIiwiZmlsZSI6Ii4vTW9kdWxlcy9GbGFzaFNhbGUvUmVzb3VyY2VzL2Fzc2V0cy9hZG1pbi9qcy9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZsYXNoU2FsZSBmcm9tICcuL0ZsYXNoU2FsZSc7XHJcblxyXG5uZXcgRmxhc2hTYWxlKCk7XHJcblxyXG53aW5kb3cuYWRtaW4ucmVtb3ZlU3VibWl0QnV0dG9uT2Zmc2V0T24oWycjcHJvZHVjdHMnXSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Modules/FlashSale/Resources/assets/admin/js/main.js\n");

/***/ }),

/***/ 6:
/*!*******************************************************************!*\
  !*** multi ./Modules/FlashSale/Resources/assets/admin/js/main.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\xampp\htdocs\ecom\Modules\FlashSale\Resources\assets\admin\js\main.js */"./Modules/FlashSale/Resources/assets/admin/js/main.js");


/***/ })

/******/ });