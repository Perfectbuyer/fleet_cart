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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Themes/Storefront/resources/assets/admin/js/main.js":
/*!*************************************************************!*\
  !*** ./Themes/Storefront/resources/assets/admin/js/main.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.admin.removeSubmitButtonOffsetOn(['#logo', '#footer', '#newsletter', '#product_page', '#slider_banners', '#three_column_full_width_banners', '#brands', '#two_column_banners', '#three_column_banners', '#one_column_banner']);\n$('#storefront_theme_color').on('change', function (e) {\n  if (e.currentTarget.value === 'custom_color') {\n    $('#custom-theme-color').removeClass('hide');\n  } else {\n    $('#custom-theme-color').addClass('hide');\n  }\n});\n$('#storefront_mail_theme_color').on('change', function (e) {\n  if (e.currentTarget.value === 'custom_color') {\n    $('#custom-mail-theme-color').removeClass('hide');\n  } else {\n    $('#custom-mail-theme-color').addClass('hide');\n  }\n});\n$('#storefront-settings-edit-form').on('click', '.panel-image', function (e) {\n  var picker = new MediaPicker({\n    type: 'image'\n  });\n  picker.on('select', function (file) {\n    $(e.currentTarget).find('i').remove();\n    $(e.currentTarget).find('img').attr('src', file.path).removeClass('hide');\n    $(e.currentTarget).find('.banner-file-id').val(file.id);\n  });\n});\n$('.product-type').on('change', function (e) {\n  var categoryProducts = $(e.currentTarget).parents('.form-group').siblings('.category-products');\n  var productsLimit = $(e.currentTarget).parents('.form-group').siblings('.products-limit');\n  var customProducts = $(e.currentTarget).parents('.form-group').siblings('.custom-products');\n  categoryProducts.addClass('hide');\n  productsLimit.addClass('hide');\n  customProducts.addClass('hide');\n\n  if (e.currentTarget.value === 'category_products') {\n    categoryProducts.removeClass('hide');\n  }\n\n  if (e.currentTarget.value === 'latest_products' || e.currentTarget.value === 'recently_viewed_products') {\n    productsLimit.removeClass('hide');\n  }\n\n  if (e.currentTarget.value === 'custom_products') {\n    customProducts.removeClass('hide');\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9UaGVtZXMvU3RvcmVmcm9udC9yZXNvdXJjZXMvYXNzZXRzL2FkbWluL2pzL21haW4uanM/Njg3MyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZG1pbiIsInJlbW92ZVN1Ym1pdEJ1dHRvbk9mZnNldE9uIiwiJCIsIm9uIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJwaWNrZXIiLCJNZWRpYVBpY2tlciIsInR5cGUiLCJmaWxlIiwiZmluZCIsInJlbW92ZSIsImF0dHIiLCJwYXRoIiwidmFsIiwiaWQiLCJjYXRlZ29yeVByb2R1Y3RzIiwicGFyZW50cyIsInNpYmxpbmdzIiwicHJvZHVjdHNMaW1pdCIsImN1c3RvbVByb2R1Y3RzIl0sIm1hcHBpbmdzIjoiQUFBQUEsTUFBTSxDQUFDQyxLQUFQLENBQWFDLDBCQUFiLENBQXdDLENBQ3BDLE9BRG9DLEVBQzNCLFNBRDJCLEVBQ2hCLGFBRGdCLEVBQ0QsZUFEQyxFQUNnQixpQkFEaEIsRUFDbUMsa0NBRG5DLEVBRXBDLFNBRm9DLEVBRXpCLHFCQUZ5QixFQUVGLHVCQUZFLEVBRXVCLG9CQUZ2QixDQUF4QztBQUtBQyxDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QkMsRUFBN0IsQ0FBZ0MsUUFBaEMsRUFBMEMsVUFBQ0MsQ0FBRCxFQUFPO0FBQzdDLE1BQUlBLENBQUMsQ0FBQ0MsYUFBRixDQUFnQkMsS0FBaEIsS0FBMEIsY0FBOUIsRUFBOEM7QUFDMUNKLEtBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCSyxXQUF6QixDQUFxQyxNQUFyQztBQUNILEdBRkQsTUFFTztBQUNITCxLQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5Qk0sUUFBekIsQ0FBa0MsTUFBbEM7QUFDSDtBQUNKLENBTkQ7QUFRQU4sQ0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0NDLEVBQWxDLENBQXFDLFFBQXJDLEVBQStDLFVBQUNDLENBQUQsRUFBTztBQUNsRCxNQUFJQSxDQUFDLENBQUNDLGFBQUYsQ0FBZ0JDLEtBQWhCLEtBQTBCLGNBQTlCLEVBQThDO0FBQzFDSixLQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QkssV0FBOUIsQ0FBMEMsTUFBMUM7QUFDSCxHQUZELE1BRU87QUFDSEwsS0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJNLFFBQTlCLENBQXVDLE1BQXZDO0FBQ0g7QUFDSixDQU5EO0FBUUFOLENBQUMsQ0FBQyxnQ0FBRCxDQUFELENBQW9DQyxFQUFwQyxDQUF1QyxPQUF2QyxFQUFnRCxjQUFoRCxFQUFnRSxVQUFDQyxDQUFELEVBQU87QUFDbkUsTUFBSUssTUFBTSxHQUFHLElBQUlDLFdBQUosQ0FBZ0I7QUFBRUMsUUFBSSxFQUFFO0FBQVIsR0FBaEIsQ0FBYjtBQUVBRixRQUFNLENBQUNOLEVBQVAsQ0FBVSxRQUFWLEVBQW9CLFVBQUNTLElBQUQsRUFBVTtBQUMxQlYsS0FBQyxDQUFDRSxDQUFDLENBQUNDLGFBQUgsQ0FBRCxDQUFtQlEsSUFBbkIsQ0FBd0IsR0FBeEIsRUFBNkJDLE1BQTdCO0FBQ0FaLEtBQUMsQ0FBQ0UsQ0FBQyxDQUFDQyxhQUFILENBQUQsQ0FBbUJRLElBQW5CLENBQXdCLEtBQXhCLEVBQStCRSxJQUEvQixDQUFvQyxLQUFwQyxFQUEyQ0gsSUFBSSxDQUFDSSxJQUFoRCxFQUFzRFQsV0FBdEQsQ0FBa0UsTUFBbEU7QUFDQUwsS0FBQyxDQUFDRSxDQUFDLENBQUNDLGFBQUgsQ0FBRCxDQUFtQlEsSUFBbkIsQ0FBd0IsaUJBQXhCLEVBQTJDSSxHQUEzQyxDQUErQ0wsSUFBSSxDQUFDTSxFQUFwRDtBQUNILEdBSkQ7QUFLSCxDQVJEO0FBVUFoQixDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CQyxFQUFuQixDQUFzQixRQUF0QixFQUFnQyxVQUFDQyxDQUFELEVBQU87QUFDbkMsTUFBSWUsZ0JBQWdCLEdBQUdqQixDQUFDLENBQUNFLENBQUMsQ0FBQ0MsYUFBSCxDQUFELENBQW1CZSxPQUFuQixDQUEyQixhQUEzQixFQUEwQ0MsUUFBMUMsQ0FBbUQsb0JBQW5ELENBQXZCO0FBQ0EsTUFBSUMsYUFBYSxHQUFHcEIsQ0FBQyxDQUFDRSxDQUFDLENBQUNDLGFBQUgsQ0FBRCxDQUFtQmUsT0FBbkIsQ0FBMkIsYUFBM0IsRUFBMENDLFFBQTFDLENBQW1ELGlCQUFuRCxDQUFwQjtBQUNBLE1BQUlFLGNBQWMsR0FBR3JCLENBQUMsQ0FBQ0UsQ0FBQyxDQUFDQyxhQUFILENBQUQsQ0FBbUJlLE9BQW5CLENBQTJCLGFBQTNCLEVBQTBDQyxRQUExQyxDQUFtRCxrQkFBbkQsQ0FBckI7QUFFQUYsa0JBQWdCLENBQUNYLFFBQWpCLENBQTBCLE1BQTFCO0FBQ0FjLGVBQWEsQ0FBQ2QsUUFBZCxDQUF1QixNQUF2QjtBQUNBZSxnQkFBYyxDQUFDZixRQUFmLENBQXdCLE1BQXhCOztBQUVBLE1BQUlKLENBQUMsQ0FBQ0MsYUFBRixDQUFnQkMsS0FBaEIsS0FBMEIsbUJBQTlCLEVBQW1EO0FBQy9DYSxvQkFBZ0IsQ0FBQ1osV0FBakIsQ0FBNkIsTUFBN0I7QUFDSDs7QUFFRCxNQUFJSCxDQUFDLENBQUNDLGFBQUYsQ0FBZ0JDLEtBQWhCLEtBQTBCLGlCQUExQixJQUErQ0YsQ0FBQyxDQUFDQyxhQUFGLENBQWdCQyxLQUFoQixLQUEwQiwwQkFBN0UsRUFBeUc7QUFDckdnQixpQkFBYSxDQUFDZixXQUFkLENBQTBCLE1BQTFCO0FBQ0g7O0FBRUQsTUFBSUgsQ0FBQyxDQUFDQyxhQUFGLENBQWdCQyxLQUFoQixLQUEwQixpQkFBOUIsRUFBaUQ7QUFDN0NpQixrQkFBYyxDQUFDaEIsV0FBZixDQUEyQixNQUEzQjtBQUNIO0FBQ0osQ0FwQkQiLCJmaWxlIjoiLi9UaGVtZXMvU3RvcmVmcm9udC9yZXNvdXJjZXMvYXNzZXRzL2FkbWluL2pzL21haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYWRtaW4ucmVtb3ZlU3VibWl0QnV0dG9uT2Zmc2V0T24oW1xyXG4gICAgJyNsb2dvJywgJyNmb290ZXInLCAnI25ld3NsZXR0ZXInLCAnI3Byb2R1Y3RfcGFnZScsICcjc2xpZGVyX2Jhbm5lcnMnLCAnI3RocmVlX2NvbHVtbl9mdWxsX3dpZHRoX2Jhbm5lcnMnLFxyXG4gICAgJyNicmFuZHMnLCAnI3R3b19jb2x1bW5fYmFubmVycycsICcjdGhyZWVfY29sdW1uX2Jhbm5lcnMnLCAnI29uZV9jb2x1bW5fYmFubmVyJyxcclxuXSk7XHJcblxyXG4kKCcjc3RvcmVmcm9udF90aGVtZV9jb2xvcicpLm9uKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUuY3VycmVudFRhcmdldC52YWx1ZSA9PT0gJ2N1c3RvbV9jb2xvcicpIHtcclxuICAgICAgICAkKCcjY3VzdG9tLXRoZW1lLWNvbG9yJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI2N1c3RvbS10aGVtZS1jb2xvcicpLmFkZENsYXNzKCdoaWRlJyk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuJCgnI3N0b3JlZnJvbnRfbWFpbF90aGVtZV9jb2xvcicpLm9uKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUuY3VycmVudFRhcmdldC52YWx1ZSA9PT0gJ2N1c3RvbV9jb2xvcicpIHtcclxuICAgICAgICAkKCcjY3VzdG9tLW1haWwtdGhlbWUtY29sb3InKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcjY3VzdG9tLW1haWwtdGhlbWUtY29sb3InKS5hZGRDbGFzcygnaGlkZScpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbiQoJyNzdG9yZWZyb250LXNldHRpbmdzLWVkaXQtZm9ybScpLm9uKCdjbGljaycsICcucGFuZWwtaW1hZ2UnLCAoZSkgPT4ge1xyXG4gICAgbGV0IHBpY2tlciA9IG5ldyBNZWRpYVBpY2tlcih7IHR5cGU6ICdpbWFnZScgfSk7XHJcblxyXG4gICAgcGlja2VyLm9uKCdzZWxlY3QnLCAoZmlsZSkgPT4ge1xyXG4gICAgICAgICQoZS5jdXJyZW50VGFyZ2V0KS5maW5kKCdpJykucmVtb3ZlKCk7XHJcbiAgICAgICAgJChlLmN1cnJlbnRUYXJnZXQpLmZpbmQoJ2ltZycpLmF0dHIoJ3NyYycsIGZpbGUucGF0aCkucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAkKGUuY3VycmVudFRhcmdldCkuZmluZCgnLmJhbm5lci1maWxlLWlkJykudmFsKGZpbGUuaWQpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuJCgnLnByb2R1Y3QtdHlwZScpLm9uKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgbGV0IGNhdGVnb3J5UHJvZHVjdHMgPSAkKGUuY3VycmVudFRhcmdldCkucGFyZW50cygnLmZvcm0tZ3JvdXAnKS5zaWJsaW5ncygnLmNhdGVnb3J5LXByb2R1Y3RzJyk7XHJcbiAgICBsZXQgcHJvZHVjdHNMaW1pdCA9ICQoZS5jdXJyZW50VGFyZ2V0KS5wYXJlbnRzKCcuZm9ybS1ncm91cCcpLnNpYmxpbmdzKCcucHJvZHVjdHMtbGltaXQnKTtcclxuICAgIGxldCBjdXN0b21Qcm9kdWN0cyA9ICQoZS5jdXJyZW50VGFyZ2V0KS5wYXJlbnRzKCcuZm9ybS1ncm91cCcpLnNpYmxpbmdzKCcuY3VzdG9tLXByb2R1Y3RzJyk7XHJcblxyXG4gICAgY2F0ZWdvcnlQcm9kdWN0cy5hZGRDbGFzcygnaGlkZScpO1xyXG4gICAgcHJvZHVjdHNMaW1pdC5hZGRDbGFzcygnaGlkZScpO1xyXG4gICAgY3VzdG9tUHJvZHVjdHMuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuXHJcbiAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LnZhbHVlID09PSAnY2F0ZWdvcnlfcHJvZHVjdHMnKSB7XHJcbiAgICAgICAgY2F0ZWdvcnlQcm9kdWN0cy5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQudmFsdWUgPT09ICdsYXRlc3RfcHJvZHVjdHMnIHx8IGUuY3VycmVudFRhcmdldC52YWx1ZSA9PT0gJ3JlY2VudGx5X3ZpZXdlZF9wcm9kdWN0cycpIHtcclxuICAgICAgICBwcm9kdWN0c0xpbWl0LnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUuY3VycmVudFRhcmdldC52YWx1ZSA9PT0gJ2N1c3RvbV9wcm9kdWN0cycpIHtcclxuICAgICAgICBjdXN0b21Qcm9kdWN0cy5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgfVxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Themes/Storefront/resources/assets/admin/js/main.js\n");

/***/ }),

/***/ 20:
/*!*******************************************************************!*\
  !*** multi ./Themes/Storefront/resources/assets/admin/js/main.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\xampp\htdocs\ecom\Themes\Storefront\resources\assets\admin\js\main.js */"./Themes/Storefront/resources/assets/admin/js/main.js");


/***/ })

/******/ });