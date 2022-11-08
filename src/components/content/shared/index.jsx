import { ContentLink } from '@components/shared';
import { idToIcon } from '@juliya/utils';
import * as PropTypes from 'prop-types';
import React, { Component } from 'react';

class ProjectTitleBox extends Component {
  render() {
    let { title, dates, github, icon } = this.props;
    const image = (
      <img className="icon" src={idToIcon[icon]} alt="Project Source Icon" />
    );
    const content = (
      <div className="allText">
        {image}
        <span className="projectTitle"> {title} </span>({dates}){'    '}
      </div>
    );
    return <ContentLink content={content} href={github} />;
  }
}

ProjectTitleBox.propTypes = {
  title: PropTypes.string,
  dates: PropTypes.string,
  github: PropTypes.string,
  icon: PropTypes.any,
};

export { ProjectTitleBox };
