import React, { Component } from 'react';
import './customModal.css';

export default class CustomModal extends Component {
    render() {
        let {nameMod,id}=this.props;
        return (
            <div id={id} className="modal custom-modal fade" role="dialog">
                <div className="modal-dialog">
                    <button type="button" className="close" data-dismiss="modal">×</button>
                    <div className="modal-content modal-md">
                        <div className="modal-header">
                            <h4 className="modal-title">{nameMod}</h4>
                        </div>
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
