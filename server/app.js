const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
  console.log(`connected to database`);
});

// bind express with graphql
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`now listening for requests on port ${PORT}`);
});
