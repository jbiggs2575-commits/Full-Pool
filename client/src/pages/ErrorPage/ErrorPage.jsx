import { Component } from 'react'

class ErrorBoundry extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error(error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>There was an error.</h2>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundry