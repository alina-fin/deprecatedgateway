const { ApolloServer } = require('apollo-server-lambda');
//const { ApolloServer } = require('apollo-server');
const { ApolloGateway} = require('@apollo/gateway');

const createHandler = async() => {
    const gateway = new ApolloGateway({
    serviceList: [
      { name: 'products', url: 'REPLACE' },
      { name: 'reviews', url: 'REPLACE' }
    ]
  });

  const server = new ApolloServer({
    playground: {endpoint: '/dev/graphql'},
    gateway,
    subscriptions: false
  })

  return server.createHandler();
};

exports.graphql = function(event, context, callback) {
  createHandler().then(function(handler){
    return handler(event, context, callback)
  }
  );
};


