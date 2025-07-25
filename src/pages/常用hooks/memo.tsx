import { memo, useEffect, useState } from "react"

function Bbb(props) {
    console.log('bbb render');

    return <div>{props.count}</div>
}

// props变化才会重新渲染
const MemoBbb = memo(Bbb)

export function Aaa() {
    const [, setCount] = useState(1)

    console.log('Aaa render')

    // useEffect(() => {
    //     setInterval(() => {
    //         setCount(Math.random())
    //     }, 2000)
    // }, [])

    return <div>
        <MemoBbb count={666}></MemoBbb>
    </div>
}