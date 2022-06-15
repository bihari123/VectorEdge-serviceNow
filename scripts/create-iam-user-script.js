try {
    gs.info("script v2 called");
    //gs.addInfoMessage("script called");

	var loggedInUserName = gs.getUserName();
var loggedInUID = gs.getUserID()	;

	
    var restMessage = new sn_ws.RESTMessageV2();
    restMessage.setBasicAuth("admin", "admin");
    restMessage.setHttpMethod("post");
    restMessage.setEndpoint("https://morning-plateau-89816.herokuapp.com/aws");
    restMessage.setRequestBody("{\"loggedInUserName\" : \""+loggedInUserName+"\", \"loggedInUID\" :" +loggedInUID+"\",\"username\" : \"lok\", \"awsCode\":1}");

    var response = restMessage.execute();


    var responseBody = response.getBody();
    var httpStatus = response.getStatusCode();
    gs.addInfoMessage(responseBody);
   // gs.info("user created");
   // gs.addInfoMessage("user created  by " + gs.getUserName());
    gs.addInfoMessage("response:\n" + responseBody);
    gs.addInfoMessage("requestBody:\n" + restMesssage.RequestBody);

} catch (ex) {
    var message = ex.message;
    alert("some error");
   
    
}
