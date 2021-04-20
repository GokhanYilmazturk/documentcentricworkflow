sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
        },

        //gokhan
        createUsersModel: function () {
			var oModel = new JSONModel({
				"Users": [{
					"id": "1001",
					"userName": "gokhan.yilmazturk@itelligence.com.tr",
                    "name": {"givenName" : "Gokhan", "familyName" : "Yilmazturk"},
                    "emails": [{"value" : "gokhan.yilmazturk@itelligence.com.tr", "primary" : true},{"value" : "agokhanyilmazturk@gmail.com", "primary" : false}]
				}, {
					"id": "1002",
					"userName": "aliyilmaz",
                    "name": {"givenName" : "Ali", "familyName" : "Yilmaz"},
                    "emails": [{"value" : "ali.yilmaz@itelligence.com.tr", "primary" : true}]
				}, {
					"id": "1003",
					"userName": "berkaybas",
                    "name": {"givenName" : "Berkay", "familyName" : "Bas"},
                    "emails": [{"value" : "berkay.bas@itelligence.com.tr", "primary" : true}, {"value" : "aberkaybas@gmail.com", "primary" : false}]
				}]
			});
			oModel.setDefaultBindingMode("TwoWay");
			return oModel;
		},
        


	};
});