import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';
import Typography from '@material-ui/core/Typography';

class RightContainer extends Component {
  renderRepos() {
    const { repos } = this.props;
    console.log(repos);

    if (!isEmpty(repos)) {
      return repos.map(repo => {
        return(
          <div key={repo.name}>
            <Typography>{repo.name}</Typography>
            <Typography>{repo.description}</Typography>
            <Typography>{repo.created_at}</Typography>
            <a href={repo.html_url} target="_blank">
              link
            </a>
          </div>
        )
      });
    }
  }

  render() {
    return(
      <div>
        { this.renderRepos() }
      </div>
    )
  }
}

export default RightContainer;
