sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("com.shell.popr.prporel.controller.View1", {
			onInit: function () {
                var oFrontendModel = new sap.ui.model.json.JSONModel();
                this.getView().setModel(oFrontendModel, "oFrontend");
            },
            handleGoButtonPress: function (oEvent) {
                var sSelectedItemText = this.byId("POInput").getValue();
                this._readPO(sSelectedItemText);
            },
            _readPO: function (sPOnumber) {
                if (sPOnumber) {
                    var oFrontendModel = this.getView().getModel("oFrontend");
                    this.getView().getModel().read(
                        "/PurchaseOrderSet('" + sPOnumber + "')?$expand=PurchaseLineItemSet",
                        {
                            success: function (oData, oResponse) {
                                oFrontendModel.setData(oData);
                            }
                        });
                };
            }
        });
        

	});
