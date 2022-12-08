import {useEffect, useState} from "react";

const MyReactComponent = () => {
    const [text,setText] = useState("This was React")
    useEffect(() => {
        setTimeout(() => setText("This is React"),5000)
    })
    return <div>{text}</div>
}

export default MyReactComponent