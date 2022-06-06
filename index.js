const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./types');
const resolvers = require('./resolvers');
const context = require('./context');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    csrfPrevention: true,
});

server.listen().then(({url}) => {
    console.log(url);
});