const http = require('http');
const bl = require('bl');

var url = process.argv[2];

http.get(url, res => {
	var res_arr = []; // is this used?
	var result = ''; // also this one?
	res.setEncoding('utf8');
	res.pipe(bl((err, data) => {
		console.log(data.toString().length);
		console.log(data.toString());
	}));
});
