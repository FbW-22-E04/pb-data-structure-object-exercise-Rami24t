// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings
//write your code here
const favRecipe = {
    title: 'Masabbaha',
    servings: 3,
    ingredients: ['500 g boiled chickpeas (from 200 g dried chickpeas (see below) or 2x400 g tinned, rinsed and drained)', '125 ml chickpea cooking water or drinking water', '50 g (3 Tbsp) tahini', '1 tsp ground cumin', '1 Tbsp lemon juice, or to taste', 'salt and pepper', '200 g dried chickpeas', '1 bay leaf', '1 whole garlic, cut in half horizontally (no need to peel)', 'water', 'salt', '3 Tbsp extra virgin olive oil', '20 g pine nuts', '3 garlic cloves, thinly sliced', 'a generous handful of flat-leaf parsley (without thick stalks), finely chopped', '1 tsp Aleppo pepper (pul biber), or to taste', 'salt and pepper']
}

//Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
//write your code here

class Book {
    constructor(title, author, alreadyRead) {
        this.title = title;
        this.author = author;
        this.alreadyRead = alreadyRead;
    }
}
bookArray = [bookProphet = new Book('TheProphet', 'Kahlil Gibran', true), bookBeyondPsychology = new Book('Beyond Psychology', 'OSHO', true), bookSITS = new Book('Sculptor in the Sky', 'Teal Swan', true), bookTNES = new Book('The Neverending Story', 'Michael Ende', false), bookJTTW = new Book('Journey To The West', 'Master Wu Cheng\'en', false), bookJTTW = new Book('The Lord of The Rings', 'J.R.R. Tolkien', false)]
//Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".

for (aBook of bookArray) {
    console.log(`${aBook.title} by ${aBook.author}`);
}

//Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.
for (aBook of bookArray) {
    pretext = '';
    if (aBook.alreadyRead) pretext = 'You already read "'
    else
        pretext = 'You still need to read "'
    console.log(`${pretext}${aBook.title}" by ${aBook.author}`);
}
