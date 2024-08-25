// Layout Imports
import LayoutWrapper from '@layouts/LayoutWrapper'
import VerticalLayout from '@layouts/VerticalLayout'

// Component Imports
import Providers from '@components/Providers'
import Navigation from '@components/layout/vertical/Navigation'
import Navbar from '@components/layout/vertical/Navbar'
import VerticalFooter from '@components/layout/vertical/Footer'
import BlankLayout from '@/@layouts/BlankLayout'

const Layout = async ({ children }) => {
  // Vars
  const direction = 'ltr'

  return (
    <Providers direction={direction}>
    <BlankLayout
    
    children={children}
    />
    </Providers>
  )
}

export default Layout
