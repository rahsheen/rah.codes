import React from "react"
import { css, Styled } from "theme-ui"
import BlogHeader from "gatsby-theme-blog/src/components/header"
import SiteHeader from "../../components/header"
import "../../pages/mystyles.scss"

export default ({ children, ...props }) => (
  <>
    <SiteHeader siteTitle="FooBar" />
    <BlogHeader {...props} />
    <div>
      <div
        css={css({
          maxWidth: `container`,
          mx: `auto`,
          px: 3,
          py: 4,
        })}
      >
        {children}
      </div>
    </div>
  </>
)
