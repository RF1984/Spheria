import React from "react";

function CommentForm({onSubmit}) {
    const [body, setBody] = React.useState("");

    const handleSubmit = () => {
        // Invoke the passed in event callback
        onSubmit({body: body});

        // Clear the input field
        setBody("");
    };

    return (
        <div>
            <div className="card-body">
                <div>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            value={body}
                            onChange={e => setBody(e.target.value)} />

                            <button className="btn btn-primary" onClick={() => handleSubmit()}>Submit</button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentForm;