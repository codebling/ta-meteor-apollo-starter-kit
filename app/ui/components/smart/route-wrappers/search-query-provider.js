import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from '/app/ui/components/dumb/loading';

export const GET_USER = gql`
  query search {
    searchQuery
  }
`;

/**
 * @summary Injects global data (current user, global settings, whatever) into
 * child components.
 */

export const SearchQueryContext = React.createContext('');

class SearchQueryProvider extends React.PureComponent {
  render() {
    const { searchQueryData, children } = this.props;
    const { error, loading, searchQuery } = searchQueryData;

    if (error) {
      console.log(error);
      return null;
    }

    if (loading) {
      return <Loading />;
    }

    return (
      <SearchQueryContext.Provider value={searchQuery}>
        {children}
      </SearchQueryContext.Provider>
    );
  }
}

SearchQueryProvider.propTypes = {
  searchQueryData: PropTypes.shape({
    error: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    searchQuery: PropTypes.string,
    refetch: PropTypes.func.isRequired,
  }).isRequired,
};

export default compose(
  graphql(GET_USER, { options: { fetchPolicy: 'cache-only' }, name: 'searchQueryData' }),
)(SearchQueryProvider);
