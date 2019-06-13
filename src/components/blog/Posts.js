import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import { GET_POSTS } from "../../queries/index";
import Post from "./Post";

class Posts extends Component {
  state = {
    search: ""
  };

  render() {
    return (
      <Fragment>
        <input onChange={e => this.setState({ search: e.target.value })} />
        <Query query={GET_POSTS} variables={{ query: this.state.search }}>
          {({ loading, error, data }) => {
            if (loading) return <div>Loading ...</div>;
            return (
              <ul>
                {data.posts.map(post => (
                  <Post key={post.id} {...post} />
                ))}
              </ul>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export { Posts as default };