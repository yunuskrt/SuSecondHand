import '../public/globals.css'

import 'semantic-ui-css/semantic.min.css'
import Layout from '@components/layout'

function MyApp({ Component, pageProps }) {
	return <Layout app={<Component {...pageProps} />} />
}

export default MyApp
