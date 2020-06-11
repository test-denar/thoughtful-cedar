import React from 'react';
import _ from 'lodash';

import {classNames, safePrefix, markdownify} from '../utils';
import SectionActions from './SectionActions';

export default class FeaturesSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
        return (
            <section className="section section--features">
              {_.get(section, 'title') && (
              <div className="container container--md align-center">
                <h2 className="section__title">{_.get(section, 'title')}</h2>
              </div>
              )}
              <div className="container container--lg">
                {_.map(_.get(section, 'features'), (feature, feature_idx) => (
                <div key={feature_idx} className={classNames('flex', 'flex--middle', 'flex--center', 'flex--col-2', {'align-center': _.get(feature, 'align') === 'center', 'align-right': _.get(feature, 'align') === 'right'})}>
                  {_.get(feature, 'image') && (
                  <div className={classNames('cell', 'section__media', {'section__media--right': _.get(feature, 'image_position') === 'right'})}>
                    <img src={safePrefix(_.get(feature, 'image'))} alt={_.get(feature, 'title')} />
                  </div>
                  )}
                  <div className="section__body cell">
                    {_.get(feature, 'title') && (
                      _.get(section, 'title') ? (
                      <h3 className="section__title">{_.get(feature, 'title')}</h3>
                      ) : 
                      <h2 className="section__title">{_.get(feature, 'title')}</h2>
                    )}
                    {_.get(feature, 'content') && (
                    <div className="section__copy">
                      {markdownify(_.get(feature, 'content'))}
                    </div>
                    )}
                    {_.get(feature, 'actions') && (
                    <div className="section__actions btn-group">
                      <SectionActions {...this.props} actions={_.get(feature, 'actions')} />
                    </div>
                    )}
                  </div>
                </div>
                ))}
              </div>
            </section>
        );
    }
}
