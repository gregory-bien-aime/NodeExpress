var express = require('express');
var bookRouter = express.Router();
var mongodb = require('mondodb').MondoClient;
var objectId = require('mondodb').ObjectID;

var router = function(nav){
    var books = [
    {
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Lev',
        read: false
        
    },
    { 
        title: 'Les Miserables',
        genre: 'Historical Fiction',
        author: 'Lev Nikolayevich Tolstoy',
        read: false
    
    },
        
    
];
    bookRouter.route('/:id')
    .get(function (req, res) {
        res.render('bookListView'), {
                    title: 'Books',
                    nav: [{
                        Link: '/Books',
                        Text: 'Books'
                        }, {
                        Link: '/Authors', 
                        Text: 'Authors'
                        }],
                    books: books
        };
});
    
    bookRouter.route('/:id')
    .get(function (req, res) {
        var id = req .params.id;
        res.render('booksView'), {
                    title: 'Books',
                    nav: [{
                        Link: '/Books',
                        Text: 'Books'
                        }, {
                        Link: '/Authors', 
                        Text: 'Authors'
                        }],
                    books: books[id]
        };
});

    return bookRouter;
}   
module.exports = router;