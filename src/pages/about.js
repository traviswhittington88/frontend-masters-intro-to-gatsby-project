import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout.js';

export default function AboutPage() {
    return (
    <Layout 
    title="About This Site"
    description="More information about this site."
    >
    <main>
    <h1>
        About 
    </h1>
    <Link to="/">Back to home</Link>
    </main>
    </Layout>
    )
}