import { connect } from 'react-redux';

export const connectRedux = (component, mapStateToProps) => {
    return connect(mapStateToProps, null, null, {
        forwardRef: true
    })(component);
};