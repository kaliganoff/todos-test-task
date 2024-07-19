import React from "react";

interface BoundaryProps {
  fallback: JSX.Element;
  children: JSX.Element;
}

interface BoundaryState {
  hasError: boolean;
}

interface ErrorInfo {
  componentStack: string;
}

class ErrorBoundary extends React.Component<BoundaryProps, BoundaryState> {
  constructor(props: BoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info.componentStack);
  }

  render() {
    const { hasError } = this.state;
    const { children, fallback } = this.props;
    if (hasError) {
      return fallback;
    }

    return children;
  }
}

export default ErrorBoundary;
