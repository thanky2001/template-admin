import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddTask extends Component {
    render() {
        let {tasks} = this.props;
        return (
            <div className="col-md-6">
                <div className="card task-panel">
                    <div className="card-header bg-white">
                        <div className="float-left">
                            <div className="add-task-btn-wrapper">
                                <span className="add-task-btn btn btn-white btn-sm">Add Task</span>
                            </div>
                        </div>
                        <ul className="nav float-right custom-menu">
                            <li className="nav-item dropdown dropdown-action">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-cog" /></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="#">Pending Tasks</a>
                                    <a className="dropdown-item" href="#">Completed Tasks</a>
                                    <a className="dropdown-item" href="#">All Tasks</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <div className="task-wrapper">
                            <div className="task-list-container">
                                <div className="task-list-body">
                                    <ul id="task-list">
                                        {
                                            tasks && tasks.map((task,index)=>{
                                                return(
                                                    <li key={index} className={task && task.active === 'active' ? "task completed" : "task" }>
                                                        <div className="task-container">
                                                            <span className="task-action-btn task-check">
                                                                <span className="action-circle large complete-btn" title={task && task.active ==='active' ? "Mark Incomplete" : "Mark Complete"}>
                                                                    <i className="material-icons">check</i>
                                                                </span>
                                                            </span>
                                                            <span className="task-label">{task.content}</span>
                                                            <span className="task-action-btn task-btn-right">
                                                                <span className="action-circle large" title="Assign">
                                                                    <i className="material-icons">person_add</i>
                                                                </span>
                                                                <span className="action-circle large delete-btn" title="Delete Task">
                                                                    <i className="material-icons">delete</i>
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="task-list-footer">
                                    <div className="new-task-wrapper">
                                        <textarea id="new-task" placeholder="Enter new task here. . ." defaultValue={""} />
                                        <span className="error-message hidden">You need to enter a task first</span>
                                        <span className="add-new-task-btn btn" id="add-task">Add Task</span>
                                        <span className="cancel-btn btn" id="close-task-panel">Close</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

let mapStateToProps = (state) => {
    return {
        tasks: state.infomations.tasks,
    }
}
export default connect(mapStateToProps, null)(AddTask);