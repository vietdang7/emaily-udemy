// check which env to export the keys
if (ProcessingInstruction.env.NODE_ENV === 'production') {
    module.exports = require('./prod')
} else {
    module.exports = require('./dev');
}