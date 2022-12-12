const { Unprikod } = require("./main");

let unpri = new Unprikod("a4xgXyCFrcyM7YeaoaDLkaXaenVVxdMyNaojv3fqWKxVNACRESXhxqKWL5UTyfeH");

unpri.exec(unpri.python, "print('hello world')").then(o => {
	console.log(o.runtime.output);
});
