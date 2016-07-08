var express = require('express');
var bodyParser = require('body-parser');
<<<<<<< HEAD
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');
=======
>>>>>>> 5ef5b2441cee0b7d6c8624a4d93c343a73513d9c

var app = express();

var port = process.env.PORT || 5000;
<<<<<<< HEAD
var nav = [{
    Link: '/Books',
    Text: 'Book'
}, {
    Link: '/Authors',
    Text: 'Author'
}];
var bookRouter = require('./src/routes/bookRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);
var authRouter = require('./src/routes/authRoutes')(nav);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({secret: 'library'}));

require('./src/config/passport')(app);
=======

var nav = [{
    Link: '/Books',
    Text: 'Book'
                }, {
    Link: '/Author', 
    Text: 'Author'
    }];

var bookRouter = require('./src/routes/bookroutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);
var authRouter = require('./src/routes/authRoutes')(nav);
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
>>>>>>> 5ef5b2441cee0b7d6c8624a4d93c343a73513d9c

app.set('views', './src/views');

app.set('view engine', 'ejs');

app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);
<<<<<<< HEAD
app.use('/Auth', authRouter);

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hello from render',
        nav: [{
            Link: '/Books',
            Text: 'Books'
        }, {
            Link: '/Authors',
            Text: 'Authors'
        }]
    });
});

app.get('/books', function (req, res) {
    res.send('Hello Books');
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
=======
app.use('Auth', authRouter);

app.get('/', function(req, res) {
    res.render('index', {
                    title: 'Hello from render',
                    nav: [{
                        
                            Link: '/Books',
                            Text: 'Books'
                        }, {
                            Link: '/Authors', 
                            Text: 'Authors'
                        }]
        }); //routing request and response
        });

app.get('/books', function(req, res) {
    res.send('books');
});
app.listen(port, function (err){
	console.log('running server on port' + port);

>>>>>>> 5ef5b2441cee0b7d6c8624a4d93c343a73513d9c
});