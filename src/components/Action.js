import React from 'react';
import _ from 'lodash';

import {Link, classNames, safePrefix} from '../utils';

export default class Action extends React.Component {
    render() {
        let action = _.get(this.props, 'action');
        return (
            <Link className={classNames({'btn': _.get(action, 'style') !== 'link', 'btn--secondary': _.get(action, 'style') === 'secondary'})} to={safePrefix(_.get(action, 'url'))} {...(_.get(action, 'new_window') ? ({target: '_blank', rel: 'noopener'}) : null)}>{_.get(action, 'label')}</Link>
        );
    }
}
