sap.ui.define([
    'sap/ui/core/UIComponent'
], function(UIComponent) {
    'use strict';

    return UIComponent.extend("capgemini.sa.finance.Component",{

         metadata:{
             manifest: "json"
         },

         init: function(){
            UIComponent.prototype.init.apply(this);
         },

         createContent: function(){

            //Creating the object of App view
           var oView = sap.ui.view({
               //through the following line , component.js will direct systen to our view(App.view.xml) 
               viewName:'capgemini.sa.finance.view.App',
               type:'XML',
               id:"idAppView"
           })
           
            //Step-1 - Create object of all the view

            //Creating the object of View1 view
           var oView1 = sap.ui.view({
               viewName:'capgemini.sa.finance.view.View1',
               type:'XML',
               id:"idView1"
           })
           
             
            // Creating the object of View2 view
           var oView2 = sap.ui.view({
               viewName:'capgemini.sa.finance.view.View2',
               type:'XML',
               id:"idView2"
           })

           //Step-2 Get the APP Container Control object from APP.View.XML
           var oSAppCon = oView.byId("Sappcon");

           //Step-3 Inject the View1 and View2 inside the container
        //    oAppCon.addPage(oView1).addPage(oView2);
           oSAppCon.addMasterPage(oView1).addDetailPage(oView2);
           return oView;
           

         }
    })
    
});