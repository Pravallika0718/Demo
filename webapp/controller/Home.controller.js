sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("capg.route301221.controller.Home", {
            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
            },
            onPress:function(){
                this.oRouter.navTo("Route");

            }
        });
    });
