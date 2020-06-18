import React from 'react';
import _ from 'lodash';

import {getData, Link} from '../utils';

export default class BlogPostCategories extends React.Component {
    render() {
        let categories = _.get(this.props, 'categories', null);
        let container_class = _.get(this.props, 'container_class', null);
        let category_len = _.size(categories);
        return (
            <div className={container_class}>
                <span>In </span>
                {
                _.map(categories, (category, category_idx) => {
                    let category_data = getData(this.props.pageContext.site.data, category);
                    return (<React.Fragment key={category_idx}>
                        <Link key={category_idx} to={'/blog/category/' + category_data.slug}>{category_data.title}</Link>{(!(category_idx === category_len - 1)) && (', ')}
                    </React.Fragment>)
                })}
            </div>
        );
    }
}
