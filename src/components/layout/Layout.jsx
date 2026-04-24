import Footer from './Footer.jsx'
import Header from './Header.jsx'

function Layout({ children, currentPath }) {
  return (
    <div className="site-shell">
      <Header currentPath={currentPath} />
      <main className="site-main">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
