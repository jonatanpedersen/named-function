module.exports = {createNamedFunction};

function createNamedFunction (name, body) {
	return {[name]: (...args) => body(...args)}[name];
}
