"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/employees";
exports.ids = ["pages/api/employees"];
exports.modules = {

/***/ "./pages/api/employees.ts":
/*!********************************!*\
  !*** ./pages/api/employees.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\n\nasync function createEmployee(req, res) {\n  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n    req\n  });\n\n  if (!session) {\n    return res.status(401).json({\n      unauthorized: true\n    });\n  }\n\n  const user = await prisma.user.findUnique({\n    where: {\n      email: session.user.email\n    }\n  });\n  const newEmployee = JSON.parse(req.body);\n\n  if (newEmployee.email === user.email) {\n    return res.status(500).json({\n      error: \"validation error: can't add yourself\"\n    });\n  }\n\n  const employee = await prisma.employee.create({\n    data: {\n      userId: user.id,\n      name: newEmployee.name,\n      email: newEmployee.email,\n      position: newEmployee.position,\n      role: newEmployee.role.value,\n      roleLabel: newEmployee.role.label\n    }\n  });\n\n  if (employee.id) {\n    res.status(200).json(employee);\n  } else {\n    return res.status(500).json({\n      error: 'could not create employee'\n    });\n  }\n}\n\nasync function deleteEmployee(req, res) {\n  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n    req\n  });\n\n  if (!session) {\n    return res.status(401).json({\n      unauthorized: true\n    });\n  }\n\n  const idOfEmployee = JSON.parse(req.body);\n  const employeeToDelete = await prisma.employee.delete({\n    where: idOfEmployee\n  });\n\n  if (employeeToDelete.id) {\n    res.status(200).json(employeeToDelete);\n  } else {\n    return res.status(500).json({\n      error: 'could not delete employee'\n    });\n  }\n}\n\nfunction handler(req, res) {\n  if (req.method === 'POST') {\n    return createEmployee(req, res);\n  }\n\n  if (req.method === 'DELETE') {\n    return deleteEmployee(req, res);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZW1wbG95ZWVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBLE1BQU1FLE1BQU0sR0FBRyxJQUFJRCx3REFBSixFQUFmOztBQUVBLGVBQWVFLGNBQWYsQ0FBOEJDLEdBQTlCLEVBQW1EQyxHQUFuRCxFQUF5RTtBQUNyRSxRQUFNQyxPQUFPLEdBQUcsTUFBTU4sNERBQVUsQ0FBQztBQUFFSSxJQUFBQTtBQUFGLEdBQUQsQ0FBaEM7O0FBRUEsTUFBSSxDQUFDRSxPQUFMLEVBQWM7QUFDVixXQUFPRCxHQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxNQUFBQSxZQUFZLEVBQUU7QUFBaEIsS0FBckIsQ0FBUDtBQUNIOztBQUVELFFBQU1DLElBQUksR0FBRyxNQUFNUixNQUFNLENBQUNRLElBQVAsQ0FBWUMsVUFBWixDQUF1QjtBQUN0Q0MsSUFBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRVAsT0FBTyxDQUFDSSxJQUFSLENBQWFHO0FBQXRCO0FBRCtCLEdBQXZCLENBQW5CO0FBSUEsUUFBTUMsV0FBVyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1osR0FBRyxDQUFDYSxJQUFmLENBQXBCOztBQUVBLE1BQUlILFdBQVcsQ0FBQ0QsS0FBWixLQUFzQkgsSUFBSSxDQUFDRyxLQUEvQixFQUFzQztBQUNsQyxXQUFPUixHQUFHLENBQ0xFLE1BREUsQ0FDSyxHQURMLEVBRUZDLElBRkUsQ0FFRztBQUFFVSxNQUFBQSxLQUFLLEVBQUU7QUFBVCxLQUZILENBQVA7QUFHSDs7QUFFRCxRQUFNQyxRQUFRLEdBQUcsTUFBTWpCLE1BQU0sQ0FBQ2lCLFFBQVAsQ0FBZ0JDLE1BQWhCLENBQXVCO0FBQzFDQyxJQUFBQSxJQUFJLEVBQUU7QUFDRkMsTUFBQUEsTUFBTSxFQUFFWixJQUFJLENBQUNhLEVBRFg7QUFFRkMsTUFBQUEsSUFBSSxFQUFFVixXQUFXLENBQUNVLElBRmhCO0FBR0ZYLE1BQUFBLEtBQUssRUFBRUMsV0FBVyxDQUFDRCxLQUhqQjtBQUlGWSxNQUFBQSxRQUFRLEVBQUVYLFdBQVcsQ0FBQ1csUUFKcEI7QUFLRkMsTUFBQUEsSUFBSSxFQUFFWixXQUFXLENBQUNZLElBQVosQ0FBaUJDLEtBTHJCO0FBTUZDLE1BQUFBLFNBQVMsRUFBRWQsV0FBVyxDQUFDWSxJQUFaLENBQWlCRztBQU4xQjtBQURvQyxHQUF2QixDQUF2Qjs7QUFXQSxNQUFJVixRQUFRLENBQUNJLEVBQWIsRUFBaUI7QUFDYmxCLElBQUFBLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCVyxRQUFyQjtBQUNILEdBRkQsTUFFTztBQUNILFdBQU9kLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVVLE1BQUFBLEtBQUssRUFBRTtBQUFULEtBQXJCLENBQVA7QUFDSDtBQUNKOztBQUVELGVBQWVZLGNBQWYsQ0FBOEIxQixHQUE5QixFQUFtREMsR0FBbkQsRUFBeUU7QUFDckUsUUFBTUMsT0FBTyxHQUFHLE1BQU1OLDREQUFVLENBQUM7QUFBRUksSUFBQUE7QUFBRixHQUFELENBQWhDOztBQUVBLE1BQUksQ0FBQ0UsT0FBTCxFQUFjO0FBQ1YsV0FBT0QsR0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsWUFBWSxFQUFFO0FBQWhCLEtBQXJCLENBQVA7QUFDSDs7QUFFRCxRQUFNc0IsWUFBWSxHQUFHaEIsSUFBSSxDQUFDQyxLQUFMLENBQVdaLEdBQUcsQ0FBQ2EsSUFBZixDQUFyQjtBQUVBLFFBQU1lLGdCQUFnQixHQUFHLE1BQU05QixNQUFNLENBQUNpQixRQUFQLENBQWdCYyxNQUFoQixDQUF1QjtBQUNsRHJCLElBQUFBLEtBQUssRUFBRW1CO0FBRDJDLEdBQXZCLENBQS9COztBQUlBLE1BQUlDLGdCQUFnQixDQUFDVCxFQUFyQixFQUF5QjtBQUNyQmxCLElBQUFBLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCd0IsZ0JBQXJCO0FBQ0gsR0FGRCxNQUVPO0FBQ0gsV0FBTzNCLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVVLE1BQUFBLEtBQUssRUFBRTtBQUFULEtBQXJCLENBQVA7QUFDSDtBQUNKOztBQUVjLFNBQVNnQixPQUFULENBQWlCOUIsR0FBakIsRUFBc0NDLEdBQXRDLEVBQTREO0FBQ3ZFLE1BQUlELEdBQUcsQ0FBQytCLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN2QixXQUFPaEMsY0FBYyxDQUFDQyxHQUFELEVBQU1DLEdBQU4sQ0FBckI7QUFDSDs7QUFFRCxNQUFJRCxHQUFHLENBQUMrQixNQUFKLEtBQWUsUUFBbkIsRUFBNkI7QUFDekIsV0FBT0wsY0FBYyxDQUFDMUIsR0FBRCxFQUFNQyxHQUFOLENBQXJCO0FBQ0g7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3dpdGgtdGFpbHdpbmRjc3MvLi9wYWdlcy9hcGkvZW1wbG95ZWVzLnRzPzQ1YTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUVtcGxveWVlKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXEgfSk7XG5cbiAgICBpZiAoIXNlc3Npb24pIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgdW5hdXRob3JpemVkOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgd2hlcmU6IHsgZW1haWw6IHNlc3Npb24udXNlci5lbWFpbCB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgbmV3RW1wbG95ZWUgPSBKU09OLnBhcnNlKHJlcS5ib2R5KTtcblxuICAgIGlmIChuZXdFbXBsb3llZS5lbWFpbCA9PT0gdXNlci5lbWFpbCkge1xuICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgICAgICAuc3RhdHVzKDUwMClcbiAgICAgICAgICAgIC5qc29uKHsgZXJyb3I6IFwidmFsaWRhdGlvbiBlcnJvcjogY2FuJ3QgYWRkIHlvdXJzZWxmXCIgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZW1wbG95ZWUgPSBhd2FpdCBwcmlzbWEuZW1wbG95ZWUuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdXNlcklkOiB1c2VyLmlkLFxuICAgICAgICAgICAgbmFtZTogbmV3RW1wbG95ZWUubmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiBuZXdFbXBsb3llZS5lbWFpbCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBuZXdFbXBsb3llZS5wb3NpdGlvbixcbiAgICAgICAgICAgIHJvbGU6IG5ld0VtcGxveWVlLnJvbGUudmFsdWUsXG4gICAgICAgICAgICByb2xlTGFiZWw6IG5ld0VtcGxveWVlLnJvbGUubGFiZWwsXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoZW1wbG95ZWUuaWQpIHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZW1wbG95ZWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnY291bGQgbm90IGNyZWF0ZSBlbXBsb3llZScgfSk7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBkZWxldGVFbXBsb3llZShyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pO1xuXG4gICAgaWYgKCFzZXNzaW9uKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IHVuYXV0aG9yaXplZDogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBpZE9mRW1wbG95ZWUgPSBKU09OLnBhcnNlKHJlcS5ib2R5KTtcblxuICAgIGNvbnN0IGVtcGxveWVlVG9EZWxldGUgPSBhd2FpdCBwcmlzbWEuZW1wbG95ZWUuZGVsZXRlKHtcbiAgICAgICAgd2hlcmU6IGlkT2ZFbXBsb3llZSxcbiAgICB9KTtcblxuICAgIGlmIChlbXBsb3llZVRvRGVsZXRlLmlkKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGVtcGxveWVlVG9EZWxldGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnY291bGQgbm90IGRlbGV0ZSBlbXBsb3llZScgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICByZXR1cm4gY3JlYXRlRW1wbG95ZWUocmVxLCByZXMpO1xuICAgIH1cblxuICAgIGlmIChyZXEubWV0aG9kID09PSAnREVMRVRFJykge1xuICAgICAgICByZXR1cm4gZGVsZXRlRW1wbG95ZWUocmVxLCByZXMpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJnZXRTZXNzaW9uIiwiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiY3JlYXRlRW1wbG95ZWUiLCJyZXEiLCJyZXMiLCJzZXNzaW9uIiwic3RhdHVzIiwianNvbiIsInVuYXV0aG9yaXplZCIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJlbWFpbCIsIm5ld0VtcGxveWVlIiwiSlNPTiIsInBhcnNlIiwiYm9keSIsImVycm9yIiwiZW1wbG95ZWUiLCJjcmVhdGUiLCJkYXRhIiwidXNlcklkIiwiaWQiLCJuYW1lIiwicG9zaXRpb24iLCJyb2xlIiwidmFsdWUiLCJyb2xlTGFiZWwiLCJsYWJlbCIsImRlbGV0ZUVtcGxveWVlIiwiaWRPZkVtcGxveWVlIiwiZW1wbG95ZWVUb0RlbGV0ZSIsImRlbGV0ZSIsImhhbmRsZXIiLCJtZXRob2QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/employees.ts\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/employees.ts"));
module.exports = __webpack_exports__;

})();