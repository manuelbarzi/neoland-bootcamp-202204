import '../styles/globals.css'

if (typeof XMLHttpRequest === 'undefined') {
  var XMLHttpRequest = require('xhr2');
  
  global.XMLHttpRequest = XMLHttpRequest
}

function MyApp({ Component, pageProps }) {
  return <div className="box-border w-full min-h-screen h-full bg-primary">
  <Component {...pageProps} />
  </div>
}

export default MyApp