//for conditonal rendering you can use either && or a ternary.
//&& is just the logical AND operator, but tge way it works is
//the computer evaulates the conditon before the && and if it is 
//false it stops. IF it is true it goes on to evlauate the second
//conditon after the && which may just be an expression that it runs.
//Ternary is used for if then logic.

import React from "react"

export default function App() {
    const [messages, setMessages] = React.useState(["a", "b"])
    /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there are > 0 unread messages, display "You have <n> unread
     *   message(s)"
     *      - If there's exactly 1 unread message, it should read "message"
     *        (singular)
     */
    return (
        <div>
            {
                messages.length > 0 ? 
                <p>You have {messages.length} unread message{messages.length > 1 && "s"}</p> :
                <p> You're all caught up!</p>}
        </div>
    )
}

//the below may be a an easier way for a human to read the last conditional to change messages to message 
//depending on number of messages:

return (
    <div>
        {
            messages.length === 0 ?
            <h1>You're all caught up!</h1> :
            <h1>You have {messages.length} unread 
            {messages.length > 1 ? "messages" : "message"}</h1>
        }
    </div>
)
}
