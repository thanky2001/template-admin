import React from 'react';

export function renderModal(id) {
    switch (id) {
        case 'add_roles':
            return (
                <form>
                    <div className="form-group">
                        <label>Role Name <span className="text-danger">*</span></label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="m-t-20 text-center">
                        <button className="btn btn-primary btn-lg">Create Role</button>
                    </div>
                </form>
            );
        case 'edit_roles':
            return (
                <form>
                    <div className="form-group">
                        <label>Role Name <span className="text-danger">*</span></label>
                        <input className="form-control" defaultValue="Team Leader" type="text" />
                    </div>
                    <div className="m-t-20 text-center">
                        <button className="btn btn-primary btn-lg">Save Changes</button>
                    </div>
                </form>

            );
        case 'delete':
            return (
                <form>
                    <div className="modal-body card-box">
                        <p>Are you sure want to delete this?</p>
                        <div className="m-t-20 text-left">
                            <a href="#" className="btn btn-white mr-2" data-dismiss="modal">Close</a>
                            <button type="submit" className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </form>
            )
        case 'add_leavetype':
            return (
                <form>
                    <div className="form-group">
                        <label>Leave Type <span className="text-danger">*</span></label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                        <label>Number of days <span className="text-danger">*</span></label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="m-t-20 text-center">
                        <button className="btn btn-primary btn-lg">Add Leave Type</button>
                    </div>
                </form>

            )
        case 'edit_leavetype':
            return (
                <form>
                    <div className="form-group">
                        <label>Leave Type <span className="text-danger">*</span></label>
                        <input className="form-control" type="text" defaultValue="Casual Leave" />
                    </div>
                    <div className="form-group">
                        <label>Number of days <span className="text-danger">*</span></label>
                        <input className="form-control" type="text" defaultValue={12} />
                    </div>
                    <div className="m-t-20 text-center">
                        <button className="btn btn-primary btn-lg">Save Changes</button>
                    </div>
                </form>

            )
        default:
            break;
    }
}
