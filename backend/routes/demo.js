let express = require('express');
let router = express.Router();
let path = require('path');

router.get('/', function(req, res) {
    res.send('demo handler update');
})
router.get('/files/*filepath', function(req, res) {
    console.log('wildcard route');
    console.log('params ',req.params);
    res.send('demo handler update '+req.url);
});
router.get('/splat/{*splat}', function(req, res) {
    console.log('wildcard splat route');
    console.log('params ',req.params.splat);
    res.send('wildcard splat handler update '+req.url);
});
router.get('/ext/:file{.:ext}', (req, res) => {
    // GET /image.png => req.params = { file: 'image', ext: 'png' }
    // GET /image => req.params = { file: 'image' }
    console.log('ext route file ',req.params.file, ' ext',req.params.ext);
    res.send('ok');
});
router.get('/movies/:movieId', (req, res) => {

    res.send('movieId '+req.params.movieId);
});
router.get('/handler', function(req, res,next) {
    console.log('first handler');
    //res.send('first handler');
    next();
});
router.get('/handler', function(req, res) {
    console.log('second handler');
    res.send('second handler');
});

router.get('/handlers', function(req, res,next) {
    console.log('first handler');
    next();
},(req, res) => {
    console.log('second handler');
    res.send('second handler');
})
router.get('/send', function(req, res,next) {
    res.send({
        name: 'Jhon',
        age :30,
    });
});
router.get('/notfound', function(req, res,next) {
    //res.status(404).send('Not Found');
    res.status(404).send({
        message:'Not Found'
    });
});
router.get('/content', function(req, res,next) {
    //res.status(404).send('Not Found');
    /*
    res.set('Content-Type', 'text/plain');
    res.send({
        message:'Not Found'
    });
    */
    res.set('Content-Type', 'text/plain');
    res.send('<h1>Hello World!</h1>');
});
router.get('/json', function(req, res,next) {

    res.status(201).json({
        message : 'Hello World!'
    });
});
router.get('/end', function(req, res,next) {

    res.status(201);
    res.end();
});
router.get('/admin', function(req, res,next) {
    console.log('admin route');
    res.redirect('/demo/login');
});
router.get('/login', function(req, res,next) {

    console.log('login route');
    res.status(201);
    res.send('login route');
});
//illustrate security loophole
router.get('/sendFile', function(req, res,next){
    const fileName = req.query.name;
    console.log('fileName ', fileName);
    let file = path.resolve(fileName);
    console.log('File ',file);
    if(fileName.includes('..'))
    {
        res.status(401).send('Unauthorized');
        return;
    }
    else {
        next();
    }
});
router.get('/sendFile', function(req, res,next) {

    const fileName = req.query.name;
    const options = {
        root: path.join(__dirname,'../', 'public'),
        //dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }
    console.log('send File');
    /*
    res.sendFile(fileName,options,(err,data)=>{
        if (err) {
            next(err)
        } else {
            console.log('Sent:' )
        }
    });
    */

    let p = './public/'+fileName;

    console.log('resolve ',path.resolve(p));
    let fName = path.resolve(p);
    res.sendFile(fName,undefined,(err,data)=>{
        if (err) {
            console.log(err);
            next(err)
        } else {
            console.log('Sent:' )
        }
    });
});
//illustrate security loophole
router.get('/download', function(req, res,next) {
    const fileName = req.query.name;
    let p = './public/'+fileName;
    let fName = path.resolve(p);
    res.download(fName,(err)=>{
        if (err) {
            console.log(err);
            next(err)
        }
        else
        {
            console.log('Download:' )
        }
    })
});
module.exports = router;