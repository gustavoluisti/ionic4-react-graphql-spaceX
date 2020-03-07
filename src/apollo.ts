import ApolloClient from 'apollo-boost'

const uri = process.env.REAC_APP_API_URL

const client = new ApolloClient({
  uri,
})

export { client }
