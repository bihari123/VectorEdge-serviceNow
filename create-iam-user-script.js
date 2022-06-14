try { 


var restMessage = new sn_ws.RESTMessageV2();
restMessage.setBasicAuth("admin", "admin");
restMessage.setHttpMethod("post");
restMessage.setEndpoint("https://morning-plateau-89816.herokuapp.com/aws");
restMessage.setRequestBody("{\"username\" : \"lokskosksoasdasd\", \"awsCode\":0}");
var response = restMessage.execute();


 var responseBody = response.getBody();
 var httpStatus = response.getStatusCode();
gs.addInfoMessage(responseBody);
	gs.info("user created");
	gs.addInfoMessage("user created  by "+ gs.getUserName());
	gs.addInfoMessage("response:\n"+responseBody);
}
catch(ex) {
 var message = ex.message;
}
