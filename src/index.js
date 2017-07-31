import hoistNonReactStatic from 'hoist-non-react-statics'
import React, { Component } from 'react'
const ReactDOM = require('react-dom')

const enhanceWithClickOutside => (WrappedComponent) {

    class EnhancedComponent extends Component {
        constructor(props) {
            super(props);
        }

        render() {
            return (
                <WrappedComponent {...this.props}/>
            );
        }
    }

    return hoistNonReactStatic(EnhancedComponent, WrappedComponent);
};

export default enhanceWithClickOutside