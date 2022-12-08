import {createEffect, createSignal} from "solid-js";

const MySolidComponent = () => {
    const [text,setText] = createSignal("This was Solid")
    createEffect(() => {
        setTimeout(() => setText("This is Solid"),5000)
    })
    return <div>{text()}</div>
}

export default MySolidComponent