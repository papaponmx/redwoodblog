import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return (
    <>
      <nav>
        <h1>
          <Link to={routes.home()}>My Blog</Link>
        </h1>
        <Link to={routes.contact()}>ContactPage</Link>
        <Link to={routes.about()}>About</Link>
      </nav>
      {children}
    </>
  )
}

export default BlogLayout
