import React from 'react';
import '../styles/global.css'

// export default function App({ Component, pageProps }) {
//     return <div>
//         {/* <div>Hi</div> */}
//         <Component {...pageProps} />
//         {/* <div>Hello</div> */}
//     </div>;
//   }

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }