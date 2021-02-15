import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Container, Badge, Col, Row } from "react-bootstrap"

export default ({ excerpt, featuredImages, tags, title, projectlink, githublink, to }) => {
  return (
    <Container className="text-justify">
      <Link to={to} style={{ textDecoration: "none" }}>
        <Row>
          {featuredImages &&
            featuredImages.map(image => (
              <Col key={image.src}>
                <Img fluid={image} className="m-auto w-75" />
              </Col>
            ))}
        </Row>
        <h2 className="mt-5">{title}</h2>
      </Link>
      {tags.map(tag => (
        <Badge key={tag} pill variant="dark" className="px-2 mr-1">
          {tag}
        </Badge>
      ))}
      <div className="mb-2">
      <Link to={githublink} style={{ textDecoration: "none" }}>
        <Badge key={githublink} pill variant="info" className="px-2 mr-1">
          githublink
        </Badge>
      </Link>{"           "}
      <Link to={projectlink} style={{ textDecoration: "none" }}>
        <Badge key={projectlink} pill variant="info" className="px-2 mr-1">
          projectlink
        </Badge>
      </Link>
      </div>
      <p className="pt-3 text-justify">{excerpt}</p>
    </Container>
  )
}
