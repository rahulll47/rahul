sap.ui.define([
    "sap/ui/core/format/NumberFormat"
], function(Formatting) {
    'use strict';
   return {

    myFormatterFunction: function(inp){
        if(inp){
           return inp.toUpperCase();
        }
      },

      formatTheCurrency: function(amount,currCode){

      var oCurrencyFormat = Formatting.getCurrencyInstance();

      return oCurrencyFormat.format(amount,currCode); 

    }

   }
    

});