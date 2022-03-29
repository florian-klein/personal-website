import React from "react"
import { graphql } from "gatsby"
import '../../markdown-pages/markdown.css'
import Layout from '../../components/layout'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    
    <Layout>
      <br></br>
      <br></br>
      <div className="main-wrapper">
      <h1>{frontmatter.title}</h1>
      <div
            className=""
            dangerouslySetInnerHTML={{ __html: html }}
      />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`