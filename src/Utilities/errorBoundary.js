import React from "react";

class ErrorBoundary extends React.Component{
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({ hasError: true });
      // You can also log the error to an error reporting service
    //  logErrorToMyService(error, info);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>در این درخواست خطایی بوجود آمده است لطفا با ادمین تماس حاصل فرمایید</h1>;
      }
      return this.props.children;
    }
  }

  export default  ErrorBoundary;