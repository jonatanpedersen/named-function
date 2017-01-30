module.exports = {createNamedFunction};

function createNamedFunction (name, func) {
	return {[name]: (...args) => func(...args)}[name];
}
