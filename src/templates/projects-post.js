import React from "react"
import { graphql, Link } from "gatsby"
import PostTemplate from "./post-template"
import Badge from "react-bootstrap/Badge"

const SubTitle = ({ tags, projectlink, githublink }) => (
  <div>
    <div className="mb-3">
    {tags.map(tag => (
      <Badge key={tag} pill variant="dark" className="px-3 mr-1">
        <h5 className="text-white my-0">{tag}</h5>
      </Badge>
    ))}
    </div>
    <div className="mb-5">
      <Link to={githublink} style={{ textDecoration: "none" }}>
        <Badge key={githublink} pill variant="info" className="px-3 mr-1">
          <h5 className="text-white my-0">githublink</h5>
        </Badge>
      </Link>{"           "}
      <Link to={projectlink} style={{ textDecoration: "none" }}>
        <Badge key={projectlink} pill variant="info" className="px-3 mr-1">
          <h5 className="text-white my-0">projectlink</h5>
        </Badge>
      </Link>
    </div>
  </div>
)

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <PostTemplate
      title={post.frontmatter.title}
      subTitle={<SubTitle 
        tags={post.frontmatter.tags}
        projectlink={post.frontmatter.projectlink}
        githublink={post.frontmatter.githublink}
          />}
      excerpt={post.excerpt}
      html={post.html}
    />
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        projectlink
        githublink
        tags
      }
      excerpt
    }
  }
`
