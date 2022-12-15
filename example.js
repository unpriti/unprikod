const { Unprikod } = require("./main");

let unpri = new Unprikod("YOUR_TOKEN"); //GET FROM WEBSITE PESTO

unpri.exec(unpri.python, "print('hello world')").then(o => {
	console.log(o.runtime.output);
});
