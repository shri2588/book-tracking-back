import { buildSchema } from 'graphql'

const schema = buildSchema(`
    
    type books {
        id: ID!
        bookName: String!
        bookAuthor: String!
        bookGenre: String!
        imageId: String!
    }

    input bookInput {
        bookName: String!
        bookAuthor: String!
        bookGenre: String!
        imageId: String!
    }
 


    type Query {
        getBooks: [books]
    }

    type Mutation {
        createBook(BookInput: bookInput): books
    }
`)


export default schema;