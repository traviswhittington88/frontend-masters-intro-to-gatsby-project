import * as React from 'react';
import { Link } from 'gatsby'; // for link to full listing
import Layout from './layout.js'; // get the content of mdx and insert the details into this layout component

export default function PostLayout({ children, pageContext }) {  // pageContext is nested in props
    const { title, description } = pageContext.frontmatter;
    return (
        <Layout
            title={title}
            description={description}
        >
            {children}
            <Link to="/">&larr; back</Link>
        </Layout>
    );
}