import React from 'react';
import _ from 'lodash';

import {getData, getPages} from '../utils';
import BlogFeedItemFilter from './BlogFeedItemFilter';

export default class BlogFeedSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
        let section_author = false;
        let section_category = false;
        let posts_all = getPages(this.props.pageContext.pages, '/blog');
        let posts_sorted = _.orderBy(posts_all, 'frontmatter.date', 'desc');
        let show_recent = _.get(section, 'show_recent');
        let recent_count = _.get(section, 'recent_count');
        let post_count = 0;
        if (_.get(section, 'author')) {
             section_author = getData(this.props.pageContext.site.data, _.get(section, 'author'));
        }
        if (_.get(section, 'category')) {
             section_category = getData(this.props.pageContext.site.data, _.get(section, 'category'));
        }
        return (
            <section className="section section--posts">
                {_.get(section, 'title') && (
                    <div className="container container--md align-center">
                        <h2 className="section__title">{_.get(section, 'title')}</h2>
                    </div>
                )}
                <div className="container container--lg">
                    <div className="flex flex--col-3">
                        {_.map(posts_sorted, (post, post_idx) => {
                            let is_post = _.get(post, 'frontmatter.template') === 'post';
                            return (
                                (is_post && ((show_recent === false) || (post_count < recent_count))) && ((() => {
                                     post_count = post_count + 1;
                                    return (
                                        <BlogFeedItemFilter key={post_idx} {...this.props} blog_feed_section={section} post_page={post} section_author={section_author} section_category={section_category} />
                                    );
                                })())
                            )
                        })}
                    </div>
                </div>
            </section>
        );
    }
}
