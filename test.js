var request = require("request");

function testApi(){
    var url = "http://localhost:3000/addTwoNumbers/a/b";
    request(url, function(error, response, body) {
        console.log(response, body)
      });
}

testApi()