import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Seo } from './seo.js';

export default function Layout({
    children,
    title = false,
    description = false,
    image = false,
    path = false,
}) {
        // graphql uses a tagged template denoted by the tag template literal <tagname>``
    // when you make a query the result ends up in the variable, in this case 'data'
    // inside data you have an object that represents the shape of the query used
    // e.g. data.site.siteMetadata.title
    // however if this is a POSTs array, you have to use array notation [0]
    const data = useStaticQuery(graphql`
    query GetSiteTitle {
        site {
            siteMetadata {
                title
            }
        }
    }
   `);
    // use ?. (optional chaining operator), returns an empty string when no data returned. `Nullish coalescing` will return an empty object
    // '?? {}' 
    // treat data like an object, using dot notation
    const meta = data?.site?.siteMetadata ?? {};
    return (
        <>
            <Seo title={title} description={description} image={image} path={path} />
            <header>
            <Link to="/">{meta.title}</Link>
            <nav>
                <Link to="/about">About</Link>
            </nav>
            </header>
            <main>{children}</main>
        </>
    )
}