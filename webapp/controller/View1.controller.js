sap.ui.define(
    ["sap/ui/core/mvc/Controller",
    "rahul/model/models",
    "rahul/util/lifeSaver"],
	function (Controller,Models,Saver) {

         
		return Controller.extend("rahul.controller.View1", {

             Formatter: Saver,
			onInit: function () {
            //    this.oView = this.getView();

            //jo path apan denge wahi se model object data lega
            var oModel = Models.createJSONModel("model/mockdata/sample.json");
            sap.ui.getCore().setModel(oModel);
            // var oModel2 = Models.createJSONModel("model/mockdata/dataset.json");
            // sap.ui.getCore().setModel(oModel2,"hulk");
            
            var oModelResource = Models.createResourceModel();
            sap.ui.getCore().setModel(oModelResource,"i18n");
            
            
            },

            

           
                 


            //This is first method to do Element Binding
            //[onRowSelect is event Handler(function made by SAP), while letsDoElementBinding is our own function]

            // onRowSelect: function(tom){
            //     var oRowContext = tom.getParameter("rowContext");
            //     var sPath = oRowContext.getPath();
            //     var oSimpleForm = this.getView().byId("Simpleformid");
            //     oSimpleForm.bindElement(sPath);
            //  },

           // we can also write the above code like this:
           //[In the below code, we have called a function (via this.functionName) and passed a 
           // input to that function. Notice that, "tom" has all the information regarding which row is selected
           // and we have passed "tom" to that function & input of that function is also a parameter, so
           // oEvent=tom]
           
            onRowSelect: function(tom){
                this.letsDoElementBinding(tom);
                
             },

             letsDoElementBinding:function(oEvent){
               
                var oRowContext = oEvent.getParameter("rowContext");
                var sPath = oRowContext.getPath();
                var oSimpleForm = this.getView().byId("Simpleformid");
                oSimpleForm.bindElement(sPath);
            }

            //  myFormatterFunction: function(inp){
            //     if(inp){
            //        return inp.toUpperCase();
            //     }
  
            //   },

            

            // onReload: function(){
            //        var oModel = sap.ui.getCore().getModel();
            //     //    oModel.setProperty("/EmployeeData/0/hunk",false);
            //     //    oModel.setProperty("/EmployeeData/0/hunk",false);
            //        oModel.setProperty("/EmployeeData/1/Name","Zinta");
                   


                // this.getView().byId("inpid1").setValue("Rahul");
                // this.getView().byId("inpid2").setValue("Jethi");
                // this.getView().byId("inpid3").setValue("Aklera");
                
          //  }

            // onShowMe:function(){
            //      var oModel = sap.ui.getCore().getModel();
            //      var data = oModel.getProperty("/EmployeeData/1");
            //        console.log(data);
            // },

                 
		});
	});
