import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log('You encountered an error: ', error, errorInfo)
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <h4>Something went wrong here...</h4>
    }

    return this.props.children
  }
}

export default ErrorBoundary
