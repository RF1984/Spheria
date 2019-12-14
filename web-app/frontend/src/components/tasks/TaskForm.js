import React from "react";


/**
 * This is a form that is open once the user clicks on create task. 
 * It will ask for a task discription and a task value
 */
   function TaskForm( {onClickCreateTask} ) {
   //const [body, setBody] = React.useState("");
   const [taskName, setTaskName] = React.useState('');
   const [taskValue, setTaskValue] = React.useState('');

    console.log("TaskForm onClick Done");
    const handleSubmit = () => {

        //onSubmit({body: body});
        //console.log("Handle submit is completed");
        onClickCreateTask({
             taskName: taskName,
             taskValue: taskValue,
         });
        //console.log(taskName);
        //console.log(taskValue);

        // setBody("");
         setTaskName('');
         setTaskValue('');
    };

    const handleValueChange = (e) => {
        const newValue = e.target.value
        if (newValue.match(/^\d*$/)){
            setTaskValue(newValue);
        }
        e.preventDefault()
    }


    return (
        <center>
        <div style={taskStyle} >
                <div className="card-body bg-warning rounded">
                    <label htmlFor="type"> Task name:</label>
                     <input type="text"
                     value={taskName}
                     onChange={e => setTaskName(e.target.value)} className="form-control">
                     </input>
                 
                    <label htmlFor="type"> Value:</label>


                    <input type="text" value={taskValue}
                    onChange={handleValueChange}
                    className="form-control">
                    </input>
                
                <img src="parenthood1.svg" class="rounded float-right" width="50" height="50"alt="logo"/>
                <button type="submit" className="btn btn-success float-left" data-dismiss="modal" onClick={handleSubmit}>Create
                </button>
                <div class="clearfix"></div>
                </div>
        </div>
        </center>
//
       /* <div className="card">
            <div className="card-body">
                <h4 className="card-title" >What's on your mind?</h4>
                <div>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            value={body}
                            onChange={e => setBody(e.target.value)} />
                    </div>


                    <div className="form-group">
                        <button
                            className="btn btn-primary"
                            on
                            Click={handleSubmit}>
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>*/

                );
}
const taskStyle= {
    color: 'black',
    width: '50%',
    marginBottom: '20px',
    
}

export default TaskForm;