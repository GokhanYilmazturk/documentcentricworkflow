/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/sap/bpm/CITS/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
