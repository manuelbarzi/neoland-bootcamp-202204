import '../styles/globals.css'

if (typeof XMLHttpRequest === 'undefined') {
  var XMLHttpRequest = require('xhr2');
  
  global.XMLHttpRequest = XMLHttpRequest
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp