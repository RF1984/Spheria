import React, { Component } from "react";
import TaskForm from "./TaskForm";
import TasksApi from "../../api/TasksApi";
import TaskCard from "./TaskCard";
import UserApi from "../../api/UserApi";





class TaskPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks : []
        };
    }
        //task are created on click:
    async onClickCreateTask(taskData) {
        try {
            console.log("TaskPage onClick is Done");

            const response = await TasksApi.createTask(taskData);

            const task = response.data;

            const newTask = this.state.tasks.concat(task);

            //console.log(newTask);

            this.setState({
                tasks: newTask,
            });
        } catch (e) {
            console.error(e);
        }
    }

    /*async deletePost(post) {
        try {
            await PostsApi.deletePost(post.id);
            const newPosts = this.state.posts.filter(p => p.id !== post.id);
            this.setState({
                posts: newPosts,
            });
        } catch (e) {
            console.error(e);
        }
    }*/


    async componentDidMount() {
        const resu = await UserApi.getCurrentUser();
        const rest = await TasksApi.getTasksByUserId(resu.data.id)
         this.setState({tasks: rest.data})
         //console.log(this.state.tasks)
    }

    render() {
        const {tasks} = this.state;
        return (
        


        /* This div is the original one */
          /*  <div>
                <PostForm onSubmit={(postData) => this.createPost(postData)}/>

                {posts.map(post =>
                    <PostCard key={post.id} post={post} onDeleteClick={() => this.deletePost(post)}/>
                )}
            </div> */
            <div id="main-group">
                  <div className="container">
                       <div>
                        <br/>
                         <img src="spinning-top.svg" class="rounded float-left" width="90" height="90"alt="logo"/>
                         <img src="parenthood.svg" class="rounded float-right" width="90" height="90"alt="logo"/>

                       </div>
                  <div>
                         <center>
                         <p className="big-p">
                          Welcome to our task page!
                         </p>
                  <div>
                        </div>
                       </center>
                  </div>
                  
                   &nbsp;&nbsp;
                   
                   <div class="alert alert-success" role="alert">
                   <h4 class="alert-heading">Create a task</h4>
                   <p>Are You Teaching Kids Responsibility? Create a Simple Task Challenges for your Kids</p>
                    <hr></hr>
                    <p class="mb-0">Click plus to create a new task
                    &nbsp;&nbsp;
                    <button type="button"
                    className="btn btn-warning btn-lg"
                    style={buttonStyle}
                    data-toggle="modal"
                    data-target={"#taskFormModal"}> <i className="fa fa-plus"></i>
                   </button>
                   </p>
                    </div>


                    <button type="submit" disabled  
                    className="btn btn-warning btn-lg"
                    style={buttonStyle}> Create a task
                     </button>
                     <Modal id="taskFormModal" title="Create a task">
                      <TaskForm onClickCreateTask = {(taskData) => this.onClickCreateTask(taskData)} />
                      </Modal>
                     </div>
                      <div className="row">
                       {tasks.map(task =>
                        <TaskCard key={task.id} task={task}/>
                        )}
                       </div>

                   </div>

        );
    }
}

const Modal = ({ children, id, title }) =>
    <div id={id} className="modal fade" role="dialog" data-backdrop="false">
       <div className="modal-dialog">
                   <div className="modal-content bg-warning rounded">
                       <div className="modal-header bg-warning rounded">
                           <h4 className="modal-title">{title}</h4>

                           <button type="button" className="close" data-dismiss="modal"> &times;
                           </button>
                           <img src="parenthood1.svg" class="rounded float-right " width="50" height="50"alt="logo"/>
                       </div>
                       <div className="modal-body">
                           {children}
                       </div>
                   </div>
        </div>

    </div>



 const cardStyle = {
     width: '20%',
     maxWidth: '100px',
     margin: '5px',
  }


  const buttonStyle = {
      marginRight: '1px',
      marginBottom: '1px',
   }
export default TaskPage;