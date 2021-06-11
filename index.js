import express from 'express'
import resolvers from './resolvers'
import schema from './schema'
import {graphqlHTTP} from 'express-graphql'
const mongoose = require('mongoose')
const app =express();
const cors = require('cors');
const router = express.Router();
//allow cross-origin requests
app.use(cors());

app.get('/',(req,res)=>{
    res.send("Start")
})



const root = resolvers;

app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue: root,
    graphiql:true
}))


mongoose.connect(`mongodb+srv://bookUser:book123@cluster0.r0lge.mongodb.net/booktracking?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(4000,()=>console.log('running ar port 4000'))
}).catch(err => {
    console.log(err);
});

