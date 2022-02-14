sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("capg.route301221.controller.Route", {
            onInit: function () {
                this.oRouter= this.getOwnerComponent().getRouter();
            },
            onBack:function()
            {
                this.oRouter.navTo("Home");
            }
        });
    });
