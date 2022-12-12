const axios = require("axios");
let base_url = `https://pesto.teknologiumum.com/api/execute`;

class Unprikod {
	constructor(token) {
		this._token = token;
	}

	get token() {
		return this._token;
	}

	//Init Language
	get python() {
		return "Python";
	}
	get java() {
		return "Java";
	}
	get C() {
		return "C";
	}
	get CPlusPlus() {
		return "C++";
	}
	get javascript() {
		return "Javascript";
	}
	get php() {
		return "PHP";
	}
	get brainfuck() {
		return "Brainfuck";
	}
	get ruby() {
		return "Ruby";
	}
	get go() {
		return "Go";
	}
	get julia() {
		return "Julia";
	}
	get lua() {
		return "Lua";
	}
	get sqlite3() {
		return "SQLite3";
	}
	//End Init Language

	//Method
	async exec(lang, program) {
		let headers = {
			"X-Pesto-Token": this._token,
			"Content-Type": "application/json",
			Accept: "application/json",
		};

		let body = {
			language: lang,
			version: "latest",
			code: program,
		};

		let responses = null;
		await axios
			.post(base_url, body, {
				headers,
			})
			.then(response => {
				responses = response;
			})
			.catch(err => {
				console.err(err);
			});

		let datas = responses.data;
		let bodys = {
			lang: datas.language,
			ver: datas.version,
			compile: {
				output: datas.compile.output,
				stderr: datas.compile.stderr,
				stdout: datas.compile.stdout,
				exitCode: datas.compile.exitCode,
			},
			runtime: {
				output: datas.runtime.output,
				stderr: datas.runtime.stderr,
				stdout: datas.runtime.stdout,
				exitCode: datas.runtime.exitCode,
			},
		};

		return bodys;
	}
}

module.exports = { Unprikod };
