sap.ui.define([
   "sap.ui.core.mvc.Controller",
   "sap/ui/model/Filter",
   "sap/ui/model/FilterOperator"
], function(Controller, Filter, FilterOperator) {
    'use strict';

    return Controller.extend(capgemini.sa.finance.controller.View1,{
         
        onNext:function(){
            var oAppCon = this.getViewById().getParent();

            oAppCon.to("idView2");

        },

        onNavNext : function(oEvent){
               this.onNext();
        },

    

        onClick:function(){
            this.onNext();
            //we have called onNext function inside our onClick function
            //so now, whenever user will click on submit button he will be directed to second view
        },

        onDelete:function(oEvent){
            var oSelected = oEvent.getParameter("listItem");
            var oList = oEvent.getSource();
            oList.removeItem(oSelected);

           
        },

        onSearch:function(oEvent){
            var sSearch = oEvent.getParameter("query");
            
            //below three line are for liveChange event
            if(sSearch === "" || sSearch === undefined){
                sSearch = oEvent.getParameter("newValue");
            }

            var oFilter = new Filter("name", FilterOperator.contains, sSearch);
            var oFilter2 = new Filter("taste", FilterOperator.contains, sSearch);
            
            //collecting all filters in a array
            var aFilter = [oFilter,oFilter2];

            //putting operators between all filters conditions
            var oMaster = new Filter({
                filters: aFilter,
                and: false
            });

            var oList = this.getView().byId("idLST"); 

            oList.getBinding("items").filter(oMaster);
            // search me likha hua ya to "name" se match hona chahiye ya
            // "taste" se match hona chahiye
        }
    })
    
});