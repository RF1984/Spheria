//import React from "react";
//import CommentSection from "../comment/CommentSection"
//import CommentForm from "../comment/CommentForm"
import React, { Component } from "react";
import TasksApi from "../../api/TasksApi";


/*this is the original code:
function PostCard({post, onDeleteClick,onClick,onSubmit}) {
        const handleSubmit = () => {
            onSubmit({body: body});
             setBody("");
            };
    const [body, setBody] = React.useState("");
    const [isCommentDisplayed, setIsCommentDisplayed] = React.useState(false); */
    // new code here:
    // setting the state to empty field:
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
           // window.taskApi = TasksApi
           const response =  await TasksApi.addTaskValue(id);
            //window.updateBalance();
            this.setState({
                isDoneComponent: response.data,
            })
            //console.log(this.state.isDoneComponent)
            window.updateBalance();

        }
        render() {
                const { taskName, taskValue,isDoneComponent} = this.state;
                
                return (
                    <div className="card" style={cardStyle}>
                          <div className="card-body" >

                           <label htmlFor="type"> Task name:</label>
                           <input disabled type="text"
                           onChange={this.setTaskName} className="form-control"
                           value={this.props.task.taskName}
                           style={selectStyle} placeholder="no task name"></input>

                           <label htmlFor="type">Value: </label>
                           <input disabled type="text"
                           onChange={this.setTaskValue} className="form-control"
                           value={this.props.task.taskValue}
                           style={selectStyle}></input>
                           {!(isDoneComponent) ? <div>
                            <button type="button" class="btn btn-success" onClick={() => this.setDone(this.props.task.id)}>Done</button></div> 
                            : <div></div>
                             }
                            </div>
                            
                            

                     </div>

                      /* original code:
                    <div className="card mt-3">
                        <div className="card-body">
                            <p>
                               {post.body}
                            </p>

                            <button className="btn btn-danger" onClick={onDeleteClick}>Delete</button>
                            <button className="btn btn-primary ml-2" onClick={() => setIsCommentDisplayed(!isCommentDisplayed)}>Comment</button>
                            {
                            isCommentDisplayed?
                            <div>
                                <CommentSection post = {post}></CommentSection>
                            </div>  :<span></span>
                            }
                       </div>
                    </div> */
                )
         };
    }
    const selectStyle = {
        width: '100%',
        margin: 'auto',
        marginBottom: '30px'
    }

    const cardStyle = {
        width: '80%',
        margin: 'auto'
    }


export default TaskCard;