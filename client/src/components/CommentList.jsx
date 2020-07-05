import React from "react";
export default ({ comments }) => {


    const renderedComments = comments.map(comment => {
        let body;
        if (comment.status === "pending")
            body = "Comment is pending."
        if (comment.status === "rejected")
            body = "Comment is rejected."
        if (comment.status === "approved")
            body = comment.body
        return < li key={comment.id} > {body}</li >
    })

    return <ul>
        {renderedComments}
    </ul>
}