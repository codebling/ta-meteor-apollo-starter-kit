import React from 'react';
import PropTypes from 'prop-types';
import { withApollo } from 'react-apollo';
import { propType } from 'graphql-anywhere';
import userFragment from '../apollo-client/fragments/user.graphql';
import { LogoutBtn } from '../components/auth/index.js';

//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
const HomePage = ({ client, curUser }) => (
  <div className="full-width">
    <LogoutBtn onLogoutHook={() => client.resetStore()} />
    <pre>{JSON.stringify(curUser, null, 2)}</pre>
  </div>
);

HomePage.propTypes = {
  client: PropTypes.shape({
    resetStore: PropTypes.func.isRequired,
  }).isRequired,
  curUser: propType(userFragment).isRequired,
};

// withApollo provides access to client.resetStore()
export default withApollo(HomePage);