import express from 'express';
import bodyParser from 'body-parser';


const port = 3000;
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

let quotes = [
    {
    id: 1,
    quote: 'The purpose of our lives is to be happy.',
    author: 'Dalai Lama'
    },
{
    id: 2,
    quote: 'Life is what happens when you’re busy making other plans.',
    author: 'John Lennon'
},
{
    id: 3,
    quote: 'You only live once, but if you do it right, once is enough.',
    author: 'Mae West'
},
{
    id: 4,
    quote: 'If you want to live a happy life, tie it to a goal, not to people or things.',
    author: 'Albert Einstein'
},
{
    id: 5,
    quote: 'Never let the fear of striking out keep you from playing the game.',
    author: 'Babe Ruth'
},
{
    id: 6,
    quote: 'Money and success don’t change people; they merely amplify what is already there.',
    author: 'Will Smith'
},
{
    id: 7,
    quote: 'The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.',
    author: 'Henry Ford'
},
{
    id: 8,
    quote: 'In order to write about life first you must live it.',
    author: 'Ernest Hemingway'
},
{
    id: 9,
    quote: 'The big lesson in life, baby, is never be scared of anyone or anything.',
    author: 'Frank Sinatra'
},
{
    id: 10,
    quote: 'Life is not a problem to be solved, but a reality to be experienced.',
    author: 'Soren Kierkegaard'
},
{
    id: 11,
    quote: 'Turn your wounds into wisdom.',
    author: 'Oprah Winfrey'
},
{
    id: 12,
    quote: 'The way I see it, if you want the rainbow, you gotta put up with the rain.',
    author: 'Dolly Parton'
},
{
    id: 13,
    quote: 'Do all the good you can, for all the people you can, in all the ways you can, as long as you can.',
    author: 'Hillary Clinton'
},
{
    id: 14,
    quote: 'Do not settle for what life gives you; make life better and build something.',
    author: 'Ashton Kutcher'
}];


app.listen(port, () => {
    console.log(`Server is currently running on port ${port}`);
});

//GET Routes
//homepage
app.get('/', (req, res, next) => {
    res.send('<h1>Thanks for testing out this new API!</h1> &nbsp <p>This API will get you random quotes! &nbsp Visit the GET request /data for more information!');
});

//datapage
app.get('/data', (req, res, next) => {
    res.json({ Quotes: quotes })
})

//POST routes
app.post('/data', (req, res) => {
    // TODO
    const quoteBody = req.body.quote;
    const quoteAuthor = req.body.author;

    // If the quotes object already contains the quote submited, don't accept it.
    if (quotes.some(element => element.quote == quoteBody)) return res.json({ Error: 'Duplicate entry.' })

    //else do accept it.
    quotes.push({id: quotes.length + 1, quote: quoteBody, author: quoteAuthor})
    return res.json({ success: true })
});

//DELETE routes
app.delete('/data', (req, res) => {
    const quoteToDelete = req.body.id;

    if (quotes.some(element => element.id == quoteToDelete)) {
        quotes.splice(quoteToDelete - 1, 1);
        return res.json({ success: true })
    } else {
        return res.json({ Error: 'ID does not exist.' })
    }

})

//UPDATE route (PUT)
app.put('/data', (req, res) => {
    const quoteToUpdate = req.body.oldQuote;
    const updatedQuote = req.body.newQuote;

    const quotesToUpdate = quotes.findIndex(element => element.quote == quoteToUpdate);

    if (quotesToUpdate === -1) return res.json({ Error: 'Quote to update was not found.' });

    quotes[quotesToUpdate].quote = updatedQuote
    return res.json({ success: true });
});