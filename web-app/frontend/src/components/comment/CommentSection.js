import React from "react";
import CommentForm from "./CommentForm";
import CommentsApi from "../../api/CommentsApi"
class CommentSection extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            comments : []
        };
    }
    
    async createComment(commentData) {
        console.log(commentData)
        commentData.post=this.props.post
        console.log(commentData) 
        try {
            const response = await CommentsApi.createComment(commentData);
            const comment = response.data;
            const newComments = this.state.comments.concat(comment);

            this.setState({
                comments: newComments,
            });
        } catch (e) {
            console.error(e);
        }
    }

    componentDidMount() {
        CommentsApi.getCommentByPostId(this.props.post.id)
            .then(({data}) => this.setState({comments: data}))
            .catch(err => console.error(err));  
    }
    render() {
        //const [isCommentDisplayed, setIsCommentDisplayed] = React.useState(false);
        const {comments} = this.state;
        return (
            <div>
                <div className="card-body">
                   <ul>
                       {
                           comments.map(({body, id}) => (<li key={id}>{body}</li>))
                       }
                       
                   </ul>
                    <CommentForm onSubmit={(commentData) => this.createComment(commentData)}></CommentForm>
                </div>
            
            </div>
        );
    }
}
export default CommentSection;
