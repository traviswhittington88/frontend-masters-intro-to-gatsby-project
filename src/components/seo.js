import * as React from 'react';
import { Helmet }  from 'react-helmet'; // or Helmet
import { useStaticQuery, graphql } from 'gatsby';

export function Seo(props) {
    // props will be used to customize metadata
    const data = useStaticQuery(graphql`
    query GetSiteMetadata {
        site {
          siteMetadata {
            description
            title
            image
            siteUrl
          }
        }
      }
    `);

    const defaults = data?.site?.siteMetadata;

    const title = props.title || defaults.title;
    const description = props.description || defaults.description;
    // canonical url will be a full https url for both image and url.. needed for sharing in social media
    const image = new URL(props.image || defaults.image, defaults.siteUrl);
    const url = new URL(props.path || '/', defaults.siteUrl);

    return (
        /* Helmet is similar to a head tag */
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />
            {image && <meta name="image" content={image} />}

            {/* facebook metadata */}
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {image && <meta name="og:image" content={image} />}

            {/* Twitter metadata */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={image} /> }
            </Helmet>
    );
}
