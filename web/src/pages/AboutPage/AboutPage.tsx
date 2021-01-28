import { Link, routes } from '@redwoodjs/router'

import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

const AboutPage = () => {
  return (
    <BlogLayout>
      <h2>AboutPage</h2>
      <p>
        Find me in <code>./web/src/pages/AboutPage/AboutPage.js</code>
      </p>
    </BlogLayout>
  )
}

export default AboutPage
