import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer>
      <div style={{ float: "right" }}>
        <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
          rss
        </a>
      </div>
      <a
        href="https://github.com/vincenthirtz"
        rel="noopener noreferrer"
        target="_blank"
        title="Lien vers la page github de Vincent Hirtz"
      >
        github
      </a>{" "}
      &bull;{" "}
      <a
        href="https://twitter.com/alukaard76"
        rel="noopener noreferrer"
        target="_blank"
        title="Lien vers la page twitter de Vincent Hirtz"
      >
        twitter
      </a>{" "}
      &bull; <Link to="/photos">photos</Link>
      <p>
        © {new Date().getFullYear()}, Mis à disposition grâce à{` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
    </footer>
  )
}

export default Footer
