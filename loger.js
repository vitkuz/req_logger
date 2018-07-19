var path = require('path');
var bunyan = require('bunyan');

function wrapper(name) {
  
  const config = {
    name,
    streams: [
      {
        level: 'info',
        path: 'myapp-error.log'  // log ERROR and above to a file
      }
    ]
  };
  
  var  logger = bunyan.createLogger(config);
  
  return logger;
}

module.exports = wrapper;