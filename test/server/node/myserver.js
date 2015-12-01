/* 20151126 */

app.post('/auth/login',function(req,res){
	var tokenUrl='http://www.test.com/token';
	var apiUrl='http://www.test.com';
	var params={
		email:req.body.email,
		password:req.body.password
	};
	request.post(tokenUrl,{json:true,form:params},function(err,res,token){
		var accessToken=token.access_token;
		var headers={Authorization:'Bearer '+accessToken};

		request.post({url:apiUrl,headers:headers,json:true},function(err,res,profile){

		})

	})
})