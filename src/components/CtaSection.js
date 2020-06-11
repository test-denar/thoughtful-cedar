import React from 'react';
import _ from 'lodash';

import {classNames} from '../utils';
import SectionActions from './SectionActions';

export default class CtaSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
        return (
            <section className="section section--cta">
              <div className="container container--lg">
                <div className={classNames('section__body', 'align-center', {'inverse bg-blue': _.get(section, 'has_background') && (_.get(section, 'background_color') === 'blue'), 'bg-gray': _.get(section, 'has_background') && (_.get(section, 'background_color') === 'gray')})}>
                  <div className="container container--md">
                    {_.get(section, 'title') && (
                    <h2 className="section__title">{_.get(section, 'title')}</h2>
                    )}
                    {_.get(section, 'subtitle') && (
                    <div className="section__copy">
                      <p>{_.get(section, 'subtitle')}</p>
                    </div>
                    )}
                    {_.get(section, 'actions') && (
                    <div className="section__actions btn-group">
                      <SectionActions {...this.props} actions={_.get(section, 'actions')} />
                    </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
