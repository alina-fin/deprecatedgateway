# deprecatedgateway

This is functioning but using deprecated packages ApolloGraphQL Federation Gateway deployed on Serverless Lambda, created for https://github.com/apollographql/federation/issues/1523  

To deploy, you will need to have the following installed:
- NPM
- Serverless: https://www.serverless.com/framework/docs/getting-started

Also:
- Create a free AWS account and set up a named AWS Profile for Serverless to access it: https://www.serverless.com/framework/docs/providers/aws/guide/credentials/

Before deploying this gateway, first deploy:
- Products subgraph: https://github.com/alina-fin/productssubgraph
- Reviews subgraph: https://github.com/alina-fin/reviewssubgraph

Update the REPLACE part of the index.js file with the domains of the previously deployed subgraphs.

Run the following commands:
1. npm install
2. serverless deploy --aws-profile=[PROFILE]
