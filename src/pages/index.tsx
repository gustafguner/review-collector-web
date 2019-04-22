import * as React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/seo';

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </>
);

export default IndexPage;
