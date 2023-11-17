"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (!this.state.error) {
      return this.props.children;
    }

    return (
      <section>
        <h4>Something went wrong</h4>
        <pre>{JSON.stringify(this.state.error, null, 2)}</pre>
        <pre>{JSON.stringify(this.state.errorInfo, null, 2)}</pre>
      </section>
    );
  }
}
