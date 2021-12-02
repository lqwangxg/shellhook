module.exports = function(app){

  
  var shell = require('shelljs');
 
  app.get('/', function(req, res) {
    res.sendStatus( 200 );
  })

  app.post( '/', ( req, res ) => {
    console.log( 'received webhook', req.body );
    shell.exec('echo "received:"'+ req.body +' >git.log');
    res.sendStatus( 200 );
  } );

  app.get('/git', function(req, res){
    res.send("git push message arrived. message written to <a href='git.log'>git.log</a>.");
    shell.exec('echo "hello world from shell." >git.log');
  });

  app.get('/hook', function(request, response) {
    shell.echo('request.url:' + request.url);
    if(request.params){
      shell.echo('request.url:' + JSON.stringify(request.params));
    }
    response.send('url:' + request.url + "\n" + " params="+ JSON.stringify(request.params));
  });

  app.get('/:model/:id', function(req, res) {
    const model = req.params.model; // 'user'
    const id = req.params.id; // '1'
    const content={ model, id ,'method':'get' };
    shell.exec('echo ' + JSON.stringify(content)+ ' >git.log');
    res.json(content);
  });

  //const body = { name: 'Jean-Luc Picard', rank: 'Captain' };
  //const res = await axios.put('http://localhost:3000', body);

  app.put('/hook', function(req, res) {
    const name = req.body.name; // 'Jean-Luc Picard'
    const rank = req.body.rank; // 'Captain'
    const content={ 'name':name,'rank': rank,'method':'put' };
    shell.exec('echo ' + JSON.stringify(content)+ ' >git.log');
    res.json(content);
  });

  app.post('/hook', function(req, res) {
    const name = req.body.name; // 'Jean-Luc Picard'
    const rank = req.body.rank; // 'Captain'
    const content={ 'name':name,'rank': rank,'method':'post' };
    shell.exec('echo ' + JSON.stringify(content)+ ' >git.log');
    res.json(content);
  });
  //other routes..
}