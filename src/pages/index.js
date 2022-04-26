import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby'; // useStaticQuery is a hook (the simplest option)
import Layout from '../components/layout.js';

export default function IndexPage() {

    return (
    <Layout>
    <h1>Hello Frontend Masters</h1>
    <Link to="/about">About Me</Link>
    </Layout>
    );
}