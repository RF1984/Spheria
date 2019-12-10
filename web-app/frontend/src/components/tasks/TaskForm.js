import React from "react";

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


    return (
        <div style={taskStyle}>
                <div className="form-group">
                    <label htmlFor="type"> Task name:</label>
                     <input type="text"
                     value={taskName}
                     onChange={e => setTaskName(e.target.value)} className="form-control">
                     </input>
                 </div>



                <div className="form-group">
                    <label htmlFor="type"> Value:</label>


                    <input type="number" value={taskValue}
                    onChange={e => setTaskValue(e.target.value)}
                    className="form-control">
                    </input>
                </div>
                <button type="submit" className="btn btn-success" data-dismiss="modal" onClick={handleSubmit}>Create
                </button>
        </div>
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
    color: 'black'
}

export default TaskForm;