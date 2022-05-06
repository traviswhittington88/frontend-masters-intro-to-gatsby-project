import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout.js';
// this tells Gatsby this is a page query, anythign we run with export const query gets injected into the component as 'data'
// at build time , take this query and convert the results into a prop called data which is a json object based on the grapqhl that ran
// page queries get access to that pages 'context'
export const query = graphql`  
query CocktailQuery {
  file(name: {eq: "cocktail"}) {
    childImageSharp {
      gatsbyImageData(placeholder: DOMINANT_COLOR)
    }
  }
}`;

export default function AboutPage({ data }) {
    return (
        <Layout
            title="About This Site"
            description="More information about this site."
        >
            <GatsbyImage
                image={getImage(data.file)}
                alt="a cocktail set inside an elaborate floral arrangement with dry ice mist curling around it"
            />
            <main>
                <h1>
                    About
                </h1>
                <Link to="/">Back to home</Link>
            </main>
        </Layout>
    )
}