
sap.ui.define([
    "sap/ui/core/util/MockServer"
  ], function(MockServer) {
    "use strict";
  
    return {
      init: function() {
        // Instantiate the MockServer
        //https://adeps4p0.saplab.3as-cloud.de:44300
        var oMockServer = new MockServer({
          rootUri: "sap/opu/odata/sap/ZALM_FSAPP_UI_SRV/"
        });
  
        // Configure the MockServer with your mock data
        oMockServer.simulate("metadata.xml",{
          sMockdataBaseUrl: "/mockdata/",
          bGenerateMissingMockData : true
        });
  
        // Set the delay to simulate network latency (optional)
        // oMockServer.setRequestsDelay(1);
        // oMockServer.attachBefore("Users", function (oEvent) {
        //   oEvent.getParameter("request").respondFile(
        //     200,
        //     {},
        //     "/mockdata/Users.json"
        //   );
        // });
        // Start the MockServer
        oMockServer.start();
  
        console.log("MockServer is running at " + oMockServer.getRootUri());
      }
    };
  });