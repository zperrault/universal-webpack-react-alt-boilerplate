import React from 'react'
import {Route, NotFoundRoute} from 'react-router'

import App from 'components/app'

const NotFound = React.createClass({
  render() {
    return <pre>Not found</pre>
  }
})

const routes = [
  <Route path="/" handler={App} />,
  <NotFoundRoute handler={NotFound} />,
]

export default routes
