/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comshell.popr./prpo_rel/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
