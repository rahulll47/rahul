sap.ui.define([
    "sap.ui.core.mvc.Controller"
 ], function(Controller) {
     'use strict';
     
     return Controller.extend(capgemini.sa.finance.controller.View2,{
        
        Back:function(){
            var oAppCon = this.getView().getParent();
            oAppCon.to("idView1");
        },


        onPress:function(){
            var oSelected = 
            this.getView.byid("idLST").removeItem(oSelected);
        }
              
    })
 });