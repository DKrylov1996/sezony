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
exports.id = "app/api/uploads/route";
exports.ids = ["app/api/uploads/route"];
exports.modules = {

/***/ "@aws-sdk/client-s3":
/*!*************************************!*\
  !*** external "@aws-sdk/client-s3" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "sharp":
/*!************************!*\
  !*** external "sharp" ***!
  \************************/
/***/ ((module) => {

module.exports = require("sharp");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuploads%2Froute&page=%2Fapi%2Fuploads%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuploads%2Froute.ts&appDir=C%3A%5CUsers%5Ckompik%5CDocuments%5CVScode%5Csezony%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ckompik%5CDocuments%5CVScode%5Csezony&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuploads%2Froute&page=%2Fapi%2Fuploads%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuploads%2Froute.ts&appDir=C%3A%5CUsers%5Ckompik%5CDocuments%5CVScode%5Csezony%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ckompik%5CDocuments%5CVScode%5Csezony&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_kompik_Documents_VScode_sezony_src_app_api_uploads_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/uploads/route.ts */ \"(rsc)/./src/app/api/uploads/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/uploads/route\",\n        pathname: \"/api/uploads\",\n        filename: \"route\",\n        bundlePath: \"app/api/uploads/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\kompik\\\\Documents\\\\VScode\\\\sezony\\\\src\\\\app\\\\api\\\\uploads\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_kompik_Documents_VScode_sezony_src_app_api_uploads_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/uploads/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ1cGxvYWRzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ1cGxvYWRzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGdXBsb2FkcyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNrb21waWslNUNEb2N1bWVudHMlNUNWU2NvZGUlNUNzZXpvbnklNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2tvbXBpayU1Q0RvY3VtZW50cyU1Q1ZTY29kZSU1Q3Nlem9ueSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDOEI7QUFDM0c7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXpvbnkvP2I3NmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxca29tcGlrXFxcXERvY3VtZW50c1xcXFxWU2NvZGVcXFxcc2V6b255XFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHVwbG9hZHNcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3VwbG9hZHMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS91cGxvYWRzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS91cGxvYWRzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxca29tcGlrXFxcXERvY3VtZW50c1xcXFxWU2NvZGVcXFxcc2V6b255XFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHVwbG9hZHNcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3VwbG9hZHMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuploads%2Froute&page=%2Fapi%2Fuploads%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuploads%2Froute.ts&appDir=C%3A%5CUsers%5Ckompik%5CDocuments%5CVScode%5Csezony%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ckompik%5CDocuments%5CVScode%5Csezony&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/uploads/route.ts":
/*!**************************************!*\
  !*** ./src/app/api/uploads/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   runtime: () => (/* binding */ runtime)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/storage */ \"(rsc)/./src/lib/storage.ts\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var sharp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sharp */ \"sharp\");\n/* harmony import */ var sharp__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sharp__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst runtime = \"nodejs\";\nasync function POST(request) {\n    const session = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_4__.getSession)();\n    if (!session) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Unauthorized\"\n        }, {\n            status: 401\n        });\n    }\n    const formData = await request.formData();\n    const file = formData.get(\"file\");\n    if (!file || !(file instanceof File)) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Файл не найден\"\n        }, {\n            status: 400\n        });\n    }\n    const buffer = Buffer.from(await file.arrayBuffer());\n    const originalExtension = path__WEBPACK_IMPORTED_MODULE_1___default().extname(file.name) || \".jpg\";\n    const isImage = file.type.startsWith(\"image/\");\n    const isVector = file.type === \"image/svg+xml\";\n    const isAnimated = file.type === \"image/gif\";\n    let outputBuffer = buffer;\n    let extension = originalExtension;\n    let contentType = file.type || \"application/octet-stream\";\n    if (isImage && !isVector && !isAnimated) {\n        outputBuffer = await sharp__WEBPACK_IMPORTED_MODULE_5___default()(buffer).rotate().resize({\n            width: 2000,\n            height: 2000,\n            fit: \"inside\",\n            withoutEnlargement: true\n        }).webp({\n            quality: 82\n        }).toBuffer();\n        extension = \".webp\";\n        contentType = \"image/webp\";\n    }\n    const filename = `${crypto__WEBPACK_IMPORTED_MODULE_2___default().randomUUID()}${extension}`;\n    const url = await (0,_lib_storage__WEBPACK_IMPORTED_MODULE_3__.storeFile)({\n        buffer: outputBuffer,\n        filename,\n        contentType\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        url\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91cGxvYWRzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ25CO0FBQ0k7QUFDYztBQUNGO0FBQ2Q7QUFFbkIsTUFBTU0sVUFBVSxTQUFTO0FBRXpCLGVBQWVDLEtBQUtDLE9BQWdCO0lBQ3pDLE1BQU1DLFVBQVUsTUFBTUwscURBQVVBO0lBQ2hDLElBQUksQ0FBQ0ssU0FBUztRQUNaLE9BQU9ULHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFlLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3BFO0lBRUEsTUFBTUMsV0FBVyxNQUFNTCxRQUFRSyxRQUFRO0lBQ3ZDLE1BQU1DLE9BQU9ELFNBQVNFLEdBQUcsQ0FBQztJQUUxQixJQUFJLENBQUNELFFBQVEsQ0FBRUEsQ0FBQUEsZ0JBQWdCRSxJQUFHLEdBQUk7UUFDcEMsT0FBT2hCLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFpQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUN0RTtJQUVBLE1BQU1LLFNBQVNDLE9BQU9DLElBQUksQ0FBQyxNQUFNTCxLQUFLTSxXQUFXO0lBQ2pELE1BQU1DLG9CQUFvQnBCLG1EQUFZLENBQUNhLEtBQUtTLElBQUksS0FBSztJQUNyRCxNQUFNQyxVQUFVVixLQUFLVyxJQUFJLENBQUNDLFVBQVUsQ0FBQztJQUNyQyxNQUFNQyxXQUFXYixLQUFLVyxJQUFJLEtBQUs7SUFDL0IsTUFBTUcsYUFBYWQsS0FBS1csSUFBSSxLQUFLO0lBRWpDLElBQUlJLGVBQWVaO0lBQ25CLElBQUlhLFlBQVlUO0lBQ2hCLElBQUlVLGNBQWNqQixLQUFLVyxJQUFJLElBQUk7SUFFL0IsSUFBSUQsV0FBVyxDQUFDRyxZQUFZLENBQUNDLFlBQVk7UUFDdkNDLGVBQWUsTUFBTXhCLDRDQUFLQSxDQUFDWSxRQUN4QmUsTUFBTSxHQUNOQyxNQUFNLENBQUM7WUFBRUMsT0FBTztZQUFNQyxRQUFRO1lBQU1DLEtBQUs7WUFBVUMsb0JBQW9CO1FBQUssR0FDNUVDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQUcsR0FDbkJDLFFBQVE7UUFDWFYsWUFBWTtRQUNaQyxjQUFjO0lBQ2hCO0lBRUEsTUFBTVUsV0FBVyxDQUFDLEVBQUV2Qyx3REFBaUIsR0FBRyxFQUFFNEIsVUFBVSxDQUFDO0lBRXJELE1BQU1hLE1BQU0sTUFBTXhDLHVEQUFTQSxDQUFDO1FBQzFCYyxRQUFRWTtRQUNSWTtRQUNBVjtJQUNGO0lBRUEsT0FBTy9CLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7UUFBRWlDO0lBQUk7QUFDakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXpvbnkvLi9zcmMvYXBwL2FwaS91cGxvYWRzL3JvdXRlLnRzP2VmZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XG5pbXBvcnQgeyBzdG9yZUZpbGUgfSBmcm9tICdAL2xpYi9zdG9yYWdlJztcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICdAL2xpYi9hdXRoJztcbmltcG9ydCBzaGFycCBmcm9tICdzaGFycCc7XG5cbmV4cG9ydCBjb25zdCBydW50aW1lID0gJ25vZGVqcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKTtcbiAgaWYgKCFzZXNzaW9uKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdVbmF1dGhvcml6ZWQnIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG4gIH1cblxuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldCgnZmlsZScpO1xuXG4gIGlmICghZmlsZSB8fCAhKGZpbGUgaW5zdGFuY2VvZiBGaWxlKSkge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAn0KTQsNC50Lsg0L3QtSDQvdCw0LnQtNC10L0nIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gIH1cblxuICBjb25zdCBidWZmZXIgPSBCdWZmZXIuZnJvbShhd2FpdCBmaWxlLmFycmF5QnVmZmVyKCkpO1xuICBjb25zdCBvcmlnaW5hbEV4dGVuc2lvbiA9IHBhdGguZXh0bmFtZShmaWxlLm5hbWUpIHx8ICcuanBnJztcbiAgY29uc3QgaXNJbWFnZSA9IGZpbGUudHlwZS5zdGFydHNXaXRoKCdpbWFnZS8nKTtcbiAgY29uc3QgaXNWZWN0b3IgPSBmaWxlLnR5cGUgPT09ICdpbWFnZS9zdmcreG1sJztcbiAgY29uc3QgaXNBbmltYXRlZCA9IGZpbGUudHlwZSA9PT0gJ2ltYWdlL2dpZic7XG5cbiAgbGV0IG91dHB1dEJ1ZmZlciA9IGJ1ZmZlcjtcbiAgbGV0IGV4dGVuc2lvbiA9IG9yaWdpbmFsRXh0ZW5zaW9uO1xuICBsZXQgY29udGVudFR5cGUgPSBmaWxlLnR5cGUgfHwgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSc7XG5cbiAgaWYgKGlzSW1hZ2UgJiYgIWlzVmVjdG9yICYmICFpc0FuaW1hdGVkKSB7XG4gICAgb3V0cHV0QnVmZmVyID0gYXdhaXQgc2hhcnAoYnVmZmVyKVxuICAgICAgLnJvdGF0ZSgpXG4gICAgICAucmVzaXplKHsgd2lkdGg6IDIwMDAsIGhlaWdodDogMjAwMCwgZml0OiAnaW5zaWRlJywgd2l0aG91dEVubGFyZ2VtZW50OiB0cnVlIH0pXG4gICAgICAud2VicCh7IHF1YWxpdHk6IDgyIH0pXG4gICAgICAudG9CdWZmZXIoKTtcbiAgICBleHRlbnNpb24gPSAnLndlYnAnO1xuICAgIGNvbnRlbnRUeXBlID0gJ2ltYWdlL3dlYnAnO1xuICB9XG5cbiAgY29uc3QgZmlsZW5hbWUgPSBgJHtjcnlwdG8ucmFuZG9tVVVJRCgpfSR7ZXh0ZW5zaW9ufWA7XG5cbiAgY29uc3QgdXJsID0gYXdhaXQgc3RvcmVGaWxlKHtcbiAgICBidWZmZXI6IG91dHB1dEJ1ZmZlcixcbiAgICBmaWxlbmFtZSxcbiAgICBjb250ZW50VHlwZVxuICB9KTtcblxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyB1cmwgfSk7XG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJwYXRoIiwiY3J5cHRvIiwic3RvcmVGaWxlIiwiZ2V0U2Vzc2lvbiIsInNoYXJwIiwicnVudGltZSIsIlBPU1QiLCJyZXF1ZXN0Iiwic2Vzc2lvbiIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsImZvcm1EYXRhIiwiZmlsZSIsImdldCIsIkZpbGUiLCJidWZmZXIiLCJCdWZmZXIiLCJmcm9tIiwiYXJyYXlCdWZmZXIiLCJvcmlnaW5hbEV4dGVuc2lvbiIsImV4dG5hbWUiLCJuYW1lIiwiaXNJbWFnZSIsInR5cGUiLCJzdGFydHNXaXRoIiwiaXNWZWN0b3IiLCJpc0FuaW1hdGVkIiwib3V0cHV0QnVmZmVyIiwiZXh0ZW5zaW9uIiwiY29udGVudFR5cGUiLCJyb3RhdGUiLCJyZXNpemUiLCJ3aWR0aCIsImhlaWdodCIsImZpdCIsIndpdGhvdXRFbmxhcmdlbWVudCIsIndlYnAiLCJxdWFsaXR5IiwidG9CdWZmZXIiLCJmaWxlbmFtZSIsInJhbmRvbVVVSUQiLCJ1cmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/uploads/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SESSION_COOKIE_NAME: () => (/* binding */ SESSION_COOKIE_NAME),\n/* harmony export */   clearSessionCookie: () => (/* binding */ clearSessionCookie),\n/* harmony export */   createSessionToken: () => (/* binding */ createSessionToken),\n/* harmony export */   getSession: () => (/* binding */ getSession),\n/* harmony export */   requireAdminSession: () => (/* binding */ requireAdminSession),\n/* harmony export */   setSessionCookie: () => (/* binding */ setSessionCookie)\n/* harmony export */ });\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/jwt/sign.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/jwt/verify.js\");\n\n\nconst SESSION_COOKIE_NAME = \"sezony_session\";\nfunction getJwtSecret() {\n    const secret = process.env.AUTH_SECRET;\n    if (!secret) {\n        throw new Error(\"AUTH_SECRET is not set\");\n    }\n    return new TextEncoder().encode(secret);\n}\nasync function createSessionToken(payload) {\n    const secret = getJwtSecret();\n    return new jose__WEBPACK_IMPORTED_MODULE_1__.SignJWT({\n        email: payload.email\n    }).setProtectedHeader({\n        alg: \"HS256\"\n    }).setSubject(payload.id).setIssuedAt().setExpirationTime(\"7d\").sign(secret);\n}\nasync function getSession() {\n    const cookieStore = (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)();\n    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;\n    if (!token) return null;\n    try {\n        const { payload } = await (0,jose__WEBPACK_IMPORTED_MODULE_2__.jwtVerify)(token, getJwtSecret());\n        return {\n            id: payload.sub,\n            email: payload.email\n        };\n    } catch  {\n        return null;\n    }\n}\nfunction setSessionCookie(token) {\n    const cookieStore = (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)();\n    cookieStore.set(SESSION_COOKIE_NAME, token, {\n        httpOnly: true,\n        secure: \"development\" === \"production\",\n        sameSite: \"lax\",\n        path: \"/\",\n        maxAge: 60 * 60 * 24 * 7\n    });\n}\nfunction clearSessionCookie() {\n    const cookieStore = (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)();\n    cookieStore.set(SESSION_COOKIE_NAME, \"\", {\n        path: \"/\",\n        maxAge: 0\n    });\n}\nasync function requireAdminSession() {\n    const session = await getSession();\n    if (!session) {\n        throw new Error(\"UNAUTHORIZED\");\n    }\n    return session;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0c7QUFFMUMsTUFBTUcsc0JBQXNCO0FBRTVCLFNBQVNDO0lBQ1AsTUFBTUMsU0FBU0MsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0lBQ3RDLElBQUksQ0FBQ0gsUUFBUTtRQUNYLE1BQU0sSUFBSUksTUFBTTtJQUNsQjtJQUNBLE9BQU8sSUFBSUMsY0FBY0MsTUFBTSxDQUFDTjtBQUNsQztBQUVPLGVBQWVPLG1CQUFtQkMsT0FBc0M7SUFDN0UsTUFBTVIsU0FBU0Q7SUFDZixPQUFPLElBQUlILHlDQUFPQSxDQUFDO1FBQUVhLE9BQU9ELFFBQVFDLEtBQUs7SUFBQyxHQUN2Q0Msa0JBQWtCLENBQUM7UUFBRUMsS0FBSztJQUFRLEdBQ2xDQyxVQUFVLENBQUNKLFFBQVFLLEVBQUUsRUFDckJDLFdBQVcsR0FDWEMsaUJBQWlCLENBQUMsTUFDbEJDLElBQUksQ0FBQ2hCO0FBQ1Y7QUFFTyxlQUFlaUI7SUFDcEIsTUFBTUMsY0FBY3ZCLHFEQUFPQTtJQUMzQixNQUFNd0IsUUFBUUQsWUFBWUUsR0FBRyxDQUFDdEIsc0JBQXNCdUI7SUFDcEQsSUFBSSxDQUFDRixPQUFPLE9BQU87SUFFbkIsSUFBSTtRQUNGLE1BQU0sRUFBRVgsT0FBTyxFQUFFLEdBQUcsTUFBTVgsK0NBQVNBLENBQUNzQixPQUFPcEI7UUFDM0MsT0FBTztZQUFFYyxJQUFJTCxRQUFRYyxHQUFHO1lBQVliLE9BQU9ELFFBQVFDLEtBQUs7UUFBVztJQUNyRSxFQUFFLE9BQU07UUFDTixPQUFPO0lBQ1Q7QUFDRjtBQUVPLFNBQVNjLGlCQUFpQkosS0FBYTtJQUM1QyxNQUFNRCxjQUFjdkIscURBQU9BO0lBQzNCdUIsWUFBWU0sR0FBRyxDQUFDMUIscUJBQXFCcUIsT0FBTztRQUMxQ00sVUFBVTtRQUNWQyxRQUFRekIsa0JBQXlCO1FBQ2pDMEIsVUFBVTtRQUNWQyxNQUFNO1FBQ05DLFFBQVEsS0FBSyxLQUFLLEtBQUs7SUFDekI7QUFDRjtBQUVPLFNBQVNDO0lBQ2QsTUFBTVosY0FBY3ZCLHFEQUFPQTtJQUMzQnVCLFlBQVlNLEdBQUcsQ0FBQzFCLHFCQUFxQixJQUFJO1FBQUU4QixNQUFNO1FBQUtDLFFBQVE7SUFBRTtBQUNsRTtBQUVPLGVBQWVFO0lBQ3BCLE1BQU1DLFVBQVUsTUFBTWY7SUFDdEIsSUFBSSxDQUFDZSxTQUFTO1FBQ1osTUFBTSxJQUFJNUIsTUFBTTtJQUNsQjtJQUNBLE9BQU80QjtBQUNUO0FBRStCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2V6b255Ly4vc3JjL2xpYi9hdXRoLnRzPzY2OTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycyc7XG5pbXBvcnQgeyBTaWduSldULCBqd3RWZXJpZnkgfSBmcm9tICdqb3NlJztcblxuY29uc3QgU0VTU0lPTl9DT09LSUVfTkFNRSA9ICdzZXpvbnlfc2Vzc2lvbic7XG5cbmZ1bmN0aW9uIGdldEp3dFNlY3JldCgpIHtcbiAgY29uc3Qgc2VjcmV0ID0gcHJvY2Vzcy5lbnYuQVVUSF9TRUNSRVQ7XG4gIGlmICghc2VjcmV0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdBVVRIX1NFQ1JFVCBpcyBub3Qgc2V0Jyk7XG4gIH1cbiAgcmV0dXJuIG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShzZWNyZXQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlU2Vzc2lvblRva2VuKHBheWxvYWQ6IHsgaWQ6IHN0cmluZzsgZW1haWw6IHN0cmluZyB9KSB7XG4gIGNvbnN0IHNlY3JldCA9IGdldEp3dFNlY3JldCgpO1xuICByZXR1cm4gbmV3IFNpZ25KV1QoeyBlbWFpbDogcGF5bG9hZC5lbWFpbCB9KVxuICAgIC5zZXRQcm90ZWN0ZWRIZWFkZXIoeyBhbGc6ICdIUzI1NicgfSlcbiAgICAuc2V0U3ViamVjdChwYXlsb2FkLmlkKVxuICAgIC5zZXRJc3N1ZWRBdCgpXG4gICAgLnNldEV4cGlyYXRpb25UaW1lKCc3ZCcpXG4gICAgLnNpZ24oc2VjcmV0KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb24oKSB7XG4gIGNvbnN0IGNvb2tpZVN0b3JlID0gY29va2llcygpO1xuICBjb25zdCB0b2tlbiA9IGNvb2tpZVN0b3JlLmdldChTRVNTSU9OX0NPT0tJRV9OQU1FKT8udmFsdWU7XG4gIGlmICghdG9rZW4pIHJldHVybiBudWxsO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSBhd2FpdCBqd3RWZXJpZnkodG9rZW4sIGdldEp3dFNlY3JldCgpKTtcbiAgICByZXR1cm4geyBpZDogcGF5bG9hZC5zdWIgYXMgc3RyaW5nLCBlbWFpbDogcGF5bG9hZC5lbWFpbCBhcyBzdHJpbmcgfTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFNlc3Npb25Db29raWUodG9rZW46IHN0cmluZykge1xuICBjb25zdCBjb29raWVTdG9yZSA9IGNvb2tpZXMoKTtcbiAgY29va2llU3RvcmUuc2V0KFNFU1NJT05fQ09PS0lFX05BTUUsIHRva2VuLCB7XG4gICAgaHR0cE9ubHk6IHRydWUsXG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxuICAgIHNhbWVTaXRlOiAnbGF4JyxcbiAgICBwYXRoOiAnLycsXG4gICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiA3XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJTZXNzaW9uQ29va2llKCkge1xuICBjb25zdCBjb29raWVTdG9yZSA9IGNvb2tpZXMoKTtcbiAgY29va2llU3RvcmUuc2V0KFNFU1NJT05fQ09PS0lFX05BTUUsICcnLCB7IHBhdGg6ICcvJywgbWF4QWdlOiAwIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVxdWlyZUFkbWluU2Vzc2lvbigpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKTtcbiAgaWYgKCFzZXNzaW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVTkFVVEhPUklaRUQnKTtcbiAgfVxuICByZXR1cm4gc2Vzc2lvbjtcbn1cblxuZXhwb3J0IHsgU0VTU0lPTl9DT09LSUVfTkFNRSB9O1xyXG4iXSwibmFtZXMiOlsiY29va2llcyIsIlNpZ25KV1QiLCJqd3RWZXJpZnkiLCJTRVNTSU9OX0NPT0tJRV9OQU1FIiwiZ2V0Snd0U2VjcmV0Iiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIkFVVEhfU0VDUkVUIiwiRXJyb3IiLCJUZXh0RW5jb2RlciIsImVuY29kZSIsImNyZWF0ZVNlc3Npb25Ub2tlbiIsInBheWxvYWQiLCJlbWFpbCIsInNldFByb3RlY3RlZEhlYWRlciIsImFsZyIsInNldFN1YmplY3QiLCJpZCIsInNldElzc3VlZEF0Iiwic2V0RXhwaXJhdGlvblRpbWUiLCJzaWduIiwiZ2V0U2Vzc2lvbiIsImNvb2tpZVN0b3JlIiwidG9rZW4iLCJnZXQiLCJ2YWx1ZSIsInN1YiIsInNldFNlc3Npb25Db29raWUiLCJzZXQiLCJodHRwT25seSIsInNlY3VyZSIsInNhbWVTaXRlIiwicGF0aCIsIm1heEFnZSIsImNsZWFyU2Vzc2lvbkNvb2tpZSIsInJlcXVpcmVBZG1pblNlc3Npb24iLCJzZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/storage.ts":
/*!****************************!*\
  !*** ./src/lib/storage.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   storeFile: () => (/* binding */ storeFile)\n/* harmony export */ });\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/client-s3 */ \"@aws-sdk/client-s3\");\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst uploadDir = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"public\", \"uploads\");\nfunction getS3Client() {\n    const endpoint = process.env.S3_ENDPOINT;\n    const accessKeyId = process.env.S3_ACCESS_KEY;\n    const secretAccessKey = process.env.S3_SECRET_KEY;\n    if (!endpoint || !accessKeyId || !secretAccessKey) {\n        return null;\n    }\n    return new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.S3Client({\n        region: process.env.S3_REGION || \"us-east-1\",\n        endpoint,\n        credentials: {\n            accessKeyId,\n            secretAccessKey\n        }\n    });\n}\nasync function storeFile(options) {\n    const client = getS3Client();\n    const bucket = process.env.S3_BUCKET;\n    if (client && bucket) {\n        const key = `uploads/${options.filename}`;\n        await client.send(new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.PutObjectCommand({\n            Bucket: bucket,\n            Key: key,\n            Body: options.buffer,\n            ContentType: options.contentType\n        }));\n        const publicBase = process.env.S3_PUBLIC_URL || endpointToPublicUrl();\n        if (!publicBase) {\n            throw new Error(\"S3_PUBLIC_URL is not set\");\n        }\n        return `${publicBase.replace(/\\/$/, \"\")}/${key}`;\n    }\n    await (0,fs_promises__WEBPACK_IMPORTED_MODULE_1__.mkdir)(uploadDir, {\n        recursive: true\n    });\n    const target = path__WEBPACK_IMPORTED_MODULE_2___default().join(uploadDir, options.filename);\n    await (0,fs_promises__WEBPACK_IMPORTED_MODULE_1__.writeFile)(target, options.buffer);\n    return `/uploads/${options.filename}`;\n}\nfunction endpointToPublicUrl() {\n    const endpoint = process.env.S3_ENDPOINT;\n    if (!endpoint) return null;\n    return endpoint.replace(/\\/$/, \"\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3N0b3JhZ2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnRTtBQUNqQjtBQUN2QjtBQUV4QixNQUFNSyxZQUFZRCxnREFBUyxDQUFDRyxRQUFRQyxHQUFHLElBQUksVUFBVTtBQUVyRCxTQUFTQztJQUNQLE1BQU1DLFdBQVdILFFBQVFJLEdBQUcsQ0FBQ0MsV0FBVztJQUN4QyxNQUFNQyxjQUFjTixRQUFRSSxHQUFHLENBQUNHLGFBQWE7SUFDN0MsTUFBTUMsa0JBQWtCUixRQUFRSSxHQUFHLENBQUNLLGFBQWE7SUFFakQsSUFBSSxDQUFDTixZQUFZLENBQUNHLGVBQWUsQ0FBQ0UsaUJBQWlCO1FBQ2pELE9BQU87SUFDVDtJQUVBLE9BQU8sSUFBSWQsd0RBQVFBLENBQUM7UUFDbEJnQixRQUFRVixRQUFRSSxHQUFHLENBQUNPLFNBQVMsSUFBSTtRQUNqQ1I7UUFDQVMsYUFBYTtZQUFFTjtZQUFhRTtRQUFnQjtJQUM5QztBQUNGO0FBRU8sZUFBZUssVUFBVUMsT0FJL0I7SUFDQyxNQUFNQyxTQUFTYjtJQUNmLE1BQU1jLFNBQVNoQixRQUFRSSxHQUFHLENBQUNhLFNBQVM7SUFFcEMsSUFBSUYsVUFBVUMsUUFBUTtRQUNwQixNQUFNRSxNQUFNLENBQUMsUUFBUSxFQUFFSixRQUFRSyxRQUFRLENBQUMsQ0FBQztRQUN6QyxNQUFNSixPQUFPSyxJQUFJLENBQ2YsSUFBSTNCLGdFQUFnQkEsQ0FBQztZQUNuQjRCLFFBQVFMO1lBQ1JNLEtBQUtKO1lBQ0xLLE1BQU1ULFFBQVFVLE1BQU07WUFDcEJDLGFBQWFYLFFBQVFZLFdBQVc7UUFDbEM7UUFHRixNQUFNQyxhQUFhM0IsUUFBUUksR0FBRyxDQUFDd0IsYUFBYSxJQUFJQztRQUNoRCxJQUFJLENBQUNGLFlBQVk7WUFDZixNQUFNLElBQUlHLE1BQU07UUFDbEI7UUFDQSxPQUFPLENBQUMsRUFBRUgsV0FBV0ksT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUViLElBQUksQ0FBQztJQUNsRDtJQUVBLE1BQU12QixrREFBS0EsQ0FBQ0csV0FBVztRQUFFa0MsV0FBVztJQUFLO0lBQ3pDLE1BQU1DLFNBQVNwQyxnREFBUyxDQUFDQyxXQUFXZ0IsUUFBUUssUUFBUTtJQUNwRCxNQUFNdkIsc0RBQVNBLENBQUNxQyxRQUFRbkIsUUFBUVUsTUFBTTtJQUN0QyxPQUFPLENBQUMsU0FBUyxFQUFFVixRQUFRSyxRQUFRLENBQUMsQ0FBQztBQUN2QztBQUVBLFNBQVNVO0lBQ1AsTUFBTTFCLFdBQVdILFFBQVFJLEdBQUcsQ0FBQ0MsV0FBVztJQUN4QyxJQUFJLENBQUNGLFVBQVUsT0FBTztJQUN0QixPQUFPQSxTQUFTNEIsT0FBTyxDQUFDLE9BQU87QUFDakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXpvbnkvLi9zcmMvbGliL3N0b3JhZ2UudHM/YWZlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQdXRPYmplY3RDb21tYW5kLCBTM0NsaWVudCB9IGZyb20gJ0Bhd3Mtc2RrL2NsaWVudC1zMyc7XG5pbXBvcnQgeyBta2Rpciwgd3JpdGVGaWxlIH0gZnJvbSAnZnMvcHJvbWlzZXMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmNvbnN0IHVwbG9hZERpciA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncHVibGljJywgJ3VwbG9hZHMnKTtcblxuZnVuY3Rpb24gZ2V0UzNDbGllbnQoKSB7XG4gIGNvbnN0IGVuZHBvaW50ID0gcHJvY2Vzcy5lbnYuUzNfRU5EUE9JTlQ7XG4gIGNvbnN0IGFjY2Vzc0tleUlkID0gcHJvY2Vzcy5lbnYuUzNfQUNDRVNTX0tFWTtcbiAgY29uc3Qgc2VjcmV0QWNjZXNzS2V5ID0gcHJvY2Vzcy5lbnYuUzNfU0VDUkVUX0tFWTtcblxuICBpZiAoIWVuZHBvaW50IHx8ICFhY2Nlc3NLZXlJZCB8fCAhc2VjcmV0QWNjZXNzS2V5KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gbmV3IFMzQ2xpZW50KHtcbiAgICByZWdpb246IHByb2Nlc3MuZW52LlMzX1JFR0lPTiB8fCAndXMtZWFzdC0xJyxcbiAgICBlbmRwb2ludCxcbiAgICBjcmVkZW50aWFsczogeyBhY2Nlc3NLZXlJZCwgc2VjcmV0QWNjZXNzS2V5IH1cbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdG9yZUZpbGUob3B0aW9uczoge1xuICBidWZmZXI6IEJ1ZmZlcjtcbiAgZmlsZW5hbWU6IHN0cmluZztcbiAgY29udGVudFR5cGU6IHN0cmluZztcbn0pIHtcbiAgY29uc3QgY2xpZW50ID0gZ2V0UzNDbGllbnQoKTtcbiAgY29uc3QgYnVja2V0ID0gcHJvY2Vzcy5lbnYuUzNfQlVDS0VUO1xuXG4gIGlmIChjbGllbnQgJiYgYnVja2V0KSB7XG4gICAgY29uc3Qga2V5ID0gYHVwbG9hZHMvJHtvcHRpb25zLmZpbGVuYW1lfWA7XG4gICAgYXdhaXQgY2xpZW50LnNlbmQoXG4gICAgICBuZXcgUHV0T2JqZWN0Q29tbWFuZCh7XG4gICAgICAgIEJ1Y2tldDogYnVja2V0LFxuICAgICAgICBLZXk6IGtleSxcbiAgICAgICAgQm9keTogb3B0aW9ucy5idWZmZXIsXG4gICAgICAgIENvbnRlbnRUeXBlOiBvcHRpb25zLmNvbnRlbnRUeXBlXG4gICAgICB9KVxuICAgICk7XG5cbiAgICBjb25zdCBwdWJsaWNCYXNlID0gcHJvY2Vzcy5lbnYuUzNfUFVCTElDX1VSTCB8fCBlbmRwb2ludFRvUHVibGljVXJsKCk7XG4gICAgaWYgKCFwdWJsaWNCYXNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1MzX1BVQkxJQ19VUkwgaXMgbm90IHNldCcpO1xuICAgIH1cbiAgICByZXR1cm4gYCR7cHVibGljQmFzZS5yZXBsYWNlKC9cXC8kLywgJycpfS8ke2tleX1gO1xuICB9XG5cbiAgYXdhaXQgbWtkaXIodXBsb2FkRGlyLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcbiAgY29uc3QgdGFyZ2V0ID0gcGF0aC5qb2luKHVwbG9hZERpciwgb3B0aW9ucy5maWxlbmFtZSk7XG4gIGF3YWl0IHdyaXRlRmlsZSh0YXJnZXQsIG9wdGlvbnMuYnVmZmVyKTtcbiAgcmV0dXJuIGAvdXBsb2Fkcy8ke29wdGlvbnMuZmlsZW5hbWV9YDtcbn1cblxuZnVuY3Rpb24gZW5kcG9pbnRUb1B1YmxpY1VybCgpIHtcbiAgY29uc3QgZW5kcG9pbnQgPSBwcm9jZXNzLmVudi5TM19FTkRQT0lOVDtcbiAgaWYgKCFlbmRwb2ludCkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBlbmRwb2ludC5yZXBsYWNlKC9cXC8kLywgJycpO1xufVxyXG4iXSwibmFtZXMiOlsiUHV0T2JqZWN0Q29tbWFuZCIsIlMzQ2xpZW50IiwibWtkaXIiLCJ3cml0ZUZpbGUiLCJwYXRoIiwidXBsb2FkRGlyIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJnZXRTM0NsaWVudCIsImVuZHBvaW50IiwiZW52IiwiUzNfRU5EUE9JTlQiLCJhY2Nlc3NLZXlJZCIsIlMzX0FDQ0VTU19LRVkiLCJzZWNyZXRBY2Nlc3NLZXkiLCJTM19TRUNSRVRfS0VZIiwicmVnaW9uIiwiUzNfUkVHSU9OIiwiY3JlZGVudGlhbHMiLCJzdG9yZUZpbGUiLCJvcHRpb25zIiwiY2xpZW50IiwiYnVja2V0IiwiUzNfQlVDS0VUIiwia2V5IiwiZmlsZW5hbWUiLCJzZW5kIiwiQnVja2V0IiwiS2V5IiwiQm9keSIsImJ1ZmZlciIsIkNvbnRlbnRUeXBlIiwiY29udGVudFR5cGUiLCJwdWJsaWNCYXNlIiwiUzNfUFVCTElDX1VSTCIsImVuZHBvaW50VG9QdWJsaWNVcmwiLCJFcnJvciIsInJlcGxhY2UiLCJyZWN1cnNpdmUiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/storage.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuploads%2Froute&page=%2Fapi%2Fuploads%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuploads%2Froute.ts&appDir=C%3A%5CUsers%5Ckompik%5CDocuments%5CVScode%5Csezony%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ckompik%5CDocuments%5CVScode%5Csezony&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();