import React, { Component } from 'react';
import { connect } from 'react-redux';
import './trailer.css';

class Trailer extends Component {
    render() {
        return (
            <div className="trailerBackground">
                <div className="formTitle">
                    <i class="fas fa-truck-moving"></i> Trailer
                </div>
                <div className="formBody">
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {};
};
const mapDispatchToProps = dispatch => {
    return {};
};
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Trailer);