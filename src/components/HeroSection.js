import React from 'react';
import _ from 'lodash';

import {classNames, toStyleObj, safePrefix} from '../utils';
import SectionActions from './SectionActions';

export default class HeroSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
        let background = _.get(section, 'background');
        let background_color = _.get(background, 'background_color') || 'white';
        let background_opacity_pct = _.get(background, 'background_image_opacity') || 100;
        let background_opacity = background_opacity_pct * 0.01;
        let background_size = _.get(background, 'background_image_size') || 'cover';
        let background_repeat = _.get(background, 'background_image_repeat') || 'no-repeat';
        return (
            <section className={classNames('section', 'hero', {'bg-image': _.get(section, 'has_background') && _.get(background, 'background_image'), 'inverse bg-blue': _.get(section, 'has_background') && (background_color === 'blue'), 'bg-gray': _.get(section, 'has_background') && (background_color === 'gray'), 'section--padding': _.get(section, 'has_background') || _.get(section, 'image')})}>
              {(_.get(section, 'has_background') && _.get(background, 'background_image')) && (
              <div className="bg-image__image" style={toStyleObj('background-image: url(\'' + safePrefix(_.get(background, 'background_image')) + '\'); opacity: ' + background_opacity + '; background-size: ' + background_size + '; background-repeat: ' + background_repeat)}/>
              )}
              <div className="container container--lg">
                <div className={classNames('flex', 'flex--middle', 'flex--center', 'flex--col-2', {'align-center': _.get(section, 'align') === 'center', 'align-right': _.get(section, 'align') === 'right'})}>
                  {_.get(section, 'image') && (
                  <div className={classNames('cell', 'section__media', {'section__media--right': _.get(section, 'image_position') === 'right'})}>
                    <img src={safePrefix(_.get(section, 'image'))} alt={_.get(section, 'title')} />
                  </div>
                  )}
                  <div className="cell section__body">
                    {_.get(section, 'title') && (
                    <h1 className="section__title">{_.get(section, 'title')}</h1>
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
