var env = require('./env.json');

exports.config = function () {
    const node_env = process.env.NODE_ENV || 'development';
    console.log(node_env);
    return env[node_env];
}