sap.ui.define(
    ["sap/ui/model/json/JSONModel", 
    "sap/ui/model/resource/ResourceModel"], 


    function(JSONModel,ResourceModel) {
    return{
      
        createJSONModel:function(sFilePath){

            var oModel = new JSONModel();
            oModel.loadData(sFilePath);
            return oModel

        },
        
        createResourceModel:function(){

            var oModel = new ResourceModel({
                bundleUrl:"i18n/i18n.properties"
            });
           
            return oModel
    }
  }   
});