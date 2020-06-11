import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';

export default class ContentSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
        return (
            <section className="section">
              <div className="container container--md">
                {_.get(section, 'title') && (
                <h2 className="section__title align-center">{_.get(section, 'title')}</h2>
                )}
                {_.get(section, 'content') && (
                <div className="section__copy">
                  {markdownify(_.get(section, 'content'))}
                </div>
                )}
              </div>
            </section>
        );
    }
}
