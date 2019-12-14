
import React, { Component } from "react";
import TasksApi from "../../api/TasksApi";

/**
 * Task card if the element where we show the tasks that were created
 * it will show description and value that.
 * It will also have a button "done" so the kid can press when he've done a task, so it will get the value in the account
 * Button will change to a "check" symbol and task cannot be done again
 */
    class TaskCard extends Component {
        constructor(props) {
            super(props)
            this.state = {
                taskName: '',
                taskValue: '',
                isDoneComponent: this.props.task.done,


            }
        };
        // changing the state
        setTaskName = (e) => {
           e.preventDefault();
           this.setState({
                taskName: e.target.value
            });
        };
        // changing the value
        setTaskValue = (e) => {
            e.preventDefault();
            this.setState({
                taskValue: e.target.value
            });
        };
        async setDone(id){
           
           const response =  await TasksApi.addTaskValue(id);
            
            this.setState({
                isDoneComponent: response.data,
            })
            window.updateBalance();

        }
        render() {
                const { taskName, taskValue,isDoneComponent} = this.state;
                
                return (
                    <div className="col-4 mb-4" style={cardStyle}>
                        <button type="button" class="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                          <div className="card-body bg-warning rounded shadow">

                                
                                <input disabled type="text"
                                onChange={this.setTaskName} className="form-control"
                                value={this.props.task.taskName}
                                style={selectStyle1} placeholder="no task name"></input>

                                 <input disabled type="text"
                                 onChange={this.setTaskValue} className="form-control"
                                 value={this.props.task.taskValue + " SEK"}
                                 style={selectStyle}></input>
                                 <img src="strategy.svg" class="rounded" width="50" height="50"alt="logo"/>
                           
                               {!(isDoneComponent) ?

                                <button type="button" class="btn btn-success" onClick={() => this.setDone(this.props.task.id)}>Done
                                </button>

                            : <img src="tick.svg" class="rounded float-right" width="50" height="50"alt="logo"/>
                             }
                             </div>
                     </div>
                )
         };
    }
    const selectStyle = {
        width: '100%',
        margin: 'auto',
        marginBottom: '30px'
    }
    const selectStyle1 = {
        width: '100%',
        margin: 'auto',
        marginBottom: '5px'
    }

    const cardStyle = {
        
    }


export default TaskCard;