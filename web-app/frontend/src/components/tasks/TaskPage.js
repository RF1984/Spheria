import React, { Component } from "react";
import TaskForm from "./TaskForm";
import TasksApi from "../../api/TasksApi";
import TaskCard from "./TaskCard";
import UserApi from "../../api/UserApi";
import "./TaskPage.css";





class TaskPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks : [],
            showTaskForm : false,
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
                showTaskForm: false,
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
                  <div>
                       <div>
                         <img src="spotlightLeft.svg" class="rounded float-left" width="80" height="80"alt="logo"/>
                         <img src="spotlight.svg" class="rounded float-right" width="80" height="80"alt="logo"/>

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
                   
                   <div className="alert alert-success shadow-lg" role="alert">
                   <img src="homework.svg" class="rounded float-right" width="120" alt="logo"/>
                   
                   <p className="alert-text">Are You Teaching Kids Responsibility? 
                   Create a simple task, give them opportunity to learn work ethics and prepare them for a real life. 
                   Achieving something starts with a simple step!</p>
                    
                    <button className="create" type="button shadow-lg"
                    className="btn btn-warning btn-lg btn-block float-left"
                    style={buttonStyle} onClick={()=>this.setState({showTaskForm: true})}>
                         <i className="fa fa-plus"></i> Create a new task
                   </button>                 
                   <div class="clearfix"></div>
                   
                    </div>

                    
                     <div>
                         &nbsp;
                         { this.state.showTaskForm ?
                      <TaskForm onClickCreateTask = {(taskData) => this.onClickCreateTask(taskData)} /> : ""
                         }
                      </div>
                     </div>

                      <div className="d-flex flex-row flex-wrap">
                       {tasks.map(task =>
                        <TaskCard key={task.id} task={task}/>
                        )}
                       </div>

                   </div>

        );
    }
}

 const cardStyle = {
     width: '20%',
     maxWidth: '100px',
     margin: '5px',
  }


  const buttonStyle = {
      marginRight: '1px',
      marginBottom: '20px',
   }
export default TaskPage;