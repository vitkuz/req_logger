const express = require('express');
const app = express();

const log = require('./loger')('myapp');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Listening!'));

app.get('*', (req,res,next) => {
  // console.log(req);
  
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.set('Content-Type', 'application/json');
  
  console.log(req.route);
  console.log(req.query.q);
  console.log(req.path);
  console.log(req.params);
  
  res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
  res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
  res.append('Warning', '199 Miscellaneous warning');
  
  res.send('OK');
  
  console.log(`
  -----------------------
    Response Headers:
  -----------------------
    ${res._header}
    
    ${res.get('Content-Type')};
    ${res.get('X-Powered-By')};
    ${res.get('Set-Cookie')};
    ${res.get('Accept-Language')};
    ${res.get('Connection')};
    ${res.get('Access-Control-Allow-Headers')};
    ${res.get('Access-Control-Allow-Methods')};
    ${res.get('Access-Control-Allow-Origin')};
  -----------------------
    Request Headers:
  -----------------------
    ${JSON.stringify(req.headers)}
    
  `);
  
  // log.info(req.headers);
  // log.info(req.protocol);
  // log.info(req.signedCookies);
  // log.info(req.get('Content-Type'));
  // log.info(req.xhr);
  // log.info(req.get('accept'));
  //
  // log.info(req.get('Content-Type'));
  
  // console.log(res._header);
 
  
  
  log.info(`
  -----------------------
    Response Headers:
  -----------------------
    ${res._header}
    
    ${res.get('Content-Type')};
    ${res.get('X-Powered-By')};
    ${res.get('Set-Cookie')};
    ${res.get('Accept-Language')};
    ${res.get('Connection')};
    ${res.get('Access-Control-Allow-Headers')};
    ${res.get('Access-Control-Allow-Methods')};
    ${res.get('Access-Control-Allow-Origin')};
  -----------------------
    Request Headers:
  -----------------------
    ${JSON.stringify(req.headers)}
    
  `)
  
});


