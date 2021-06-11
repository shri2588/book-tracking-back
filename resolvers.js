
import Books from './models/books'



const resolvers = {
    //get queries
    getBooks: () => {
        return Books.find();
    },



    //mutations
    
    // create books
    createBook: args => {
        const books = new Books({
            bookName: args.BookInput.bookName,
            bookAuthor: args.BookInput.bookAuthor,
            bookGenre: args.BookInput.bookGenre,
            imageId: args.BookInput.imageId
        })
        return books.save()
    },


}

export default resolvers;

