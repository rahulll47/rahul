sap.ui.define(
	["sap/ui/core/mvc/Controller"],
	function (Controller) {
		

		return Controller.extend("rahul.controller.View1", {

			onInit: function () {
           
            // there is nothing like oModel here, as oModel is model object created in model.js, 
            //we can call the medthod which was returning the oModel object = CreateJSONModel
            // So we can access our model object by- 
            //address_where_mentioned_function/method_is_present.CreateJSONModel();
            // Its like address.method (wo address jaha se method ko utha rahe hai)
            // we have not written adrress directly, we given address by using dependencies
            // As our controller depend on rahul.model.models for the model object, so this is the dependency 
            // for the controller
            // "Models" has our address
            // Through this we are just linking our controller to our model (model will
            // provide model object to our controller)
            sap.ui.getCore().setModel(oModel);
            },
            
            
            onReload: function(){
                // this.getView().byId("inpid1").setValue("Rahul");
                // this.getView().byId("inpid2").setValue("Jethi");
                // this.getView().byId("inpid3").setValue("Aklera");
                
            }
		});
	});
