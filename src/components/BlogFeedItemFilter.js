import React from 'react';
import _ from 'lodash';

import {getData} from '../utils';
import BlogPostFeedItem from './BlogPostFeedItem';

export default class BlogFeedItemFilter extends React.Component {
    render() {
        let post = _.get(this.props, 'post_page');
        let section = _.get(this.props, 'blog_feed_section');
        let section_author = _.get(this.props, 'section_author');
        let section_category = _.get(this.props, 'section_category');
        return (
            section_author ? (
                _.get(post, 'frontmatter.author') && ((() => {
                    let post_author = getData(this.props.pageContext.site.data, _.get(post, 'frontmatter.author'));
                    return (
                        (post_author.slug === _.get(section_author, 'slug')) && (
                            <BlogPostFeedItem {...this.props} blog_feed_section={section} post_page={post} />
                        )
                    );
                })())
            ) : (section_category ? (
                _.map(_.get(post, 'frontmatter.categories'), (category, category_idx) => {
                    let post_category = getData(this.props.pageContext.site.data, category);
                    return (
                        (post_category.slug === _.get(section_category, 'slug')) && (
                            <BlogPostFeedItem key={category_idx} {...this.props} blog_feed_section={section} post_page={post} />
                        )
                    )
                })
            ) : 
                <BlogPostFeedItem {...this.props} blog_feed_section={section} post_page={post} />
            )
        );
    }
}
