import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

interface Props {
  src: string;
}

const Image: React.FC<Props> = ({ src }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.allImageSharp.edges.find(
        (edge: any) => edge.node.fluid.originalName === src,
      );
      if (!image) {
        return null;
      }
      return <Img fluid={image.node.fluid} />;
    }}
  />
);

export default Image;
