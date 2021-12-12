/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"login_page/loginpage/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
