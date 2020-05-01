import ApolloClient from 'apollo-boost';
import urls from 'res/urls';
import { getToken } from 'utils';

const token = getToken();

const client = new ApolloClient({
  uri: urls.graphql,
  headers: {'Authorization': `Bearer ${token}`}
});

export default client;