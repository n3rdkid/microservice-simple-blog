import React from "react";
export default ({ comments }) => {

    const renderedComments = comments.map(comment => <li key={comment.id}>{comment.body}</li>)

    return <ul>
        {renderedComments}
    </ul>
}