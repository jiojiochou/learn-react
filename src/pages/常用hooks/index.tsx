import { produce } from 'immer'
import React, 
{ createContext, useContext, useEffect, useImperativeHandle, useLayoutEffect, useReducer, useRef, useState } 
from 'react'
import { Aaa } from './memo'

const personContext = createContext({
    name: 'ikun',
    slogan: 'ctrl'
})


function Ccc() {    
    const person = useContext(personContext)
    return <h4>context的值为: {JSON.stringify(person)}</h4>
}

function Bbb() {
    return <div><Ccc></Ccc></div>
}


export function Hooks() {
    const [count, setCount] = useState(() => {
        const num1 = 47
        const num2 = 50
        return num1 + num2
    })


    //同步执行后渲染
    useLayoutEffect(() => {
        // console.count("useLayoutEffect")
    }, [count])

    // 修改值之前执行一些固定的逻辑
    interface Data {
        result: number;
    }

    interface Action {
        type: 'add' | 'minus',
        num: number
    }
    function reducer(state: Data, action: Action) {
        switch(action.type) {
            case "add":
                return {
                    result: state.result + action.num
                }
            case "minus":
                return {
                    result: state.result - action.num
                }
        }

        return state;
    }

    // const [res, dispatch] = useReducer(reducer, { result: 0 })

    // useEffect(() => {
        // const timer = setInterval(() => {
            // console.count("useEffect")
        // }, 1000)

        // return () => {
        //     clearInterval(timer)
        // }
    // }, [count, res])

    const [red] = useReducer(reducer, 'zero', (param) => {
        return {
            result: param === "zero" ? 0 : 1
        }
    })


    function reducer1(state: object, action: Action) {

         switch(action.type) {
            case "add":
                return produce(state, (state) => {
                    state.a.c.e += action.num
                })
            case "minus":
                return produce(state, (state) => {
                    state.a.c.e -= action.num
                })
        }

        return state;
    }

    const [imer, dispatchImer] = useReducer(reducer1, 'zero', () => {
        return {
            a: {
                c: {
                    e: 0,
                    f: 0
                },
                d: 0
            },
            b: 0
        }
    })

    // useState 和 useReducer的值应用没有修改的话视图不会更新


    // 引用DOM
    const h4Ref = useRef<HTMLHeadingElement>(null);
    useEffect(() => {
        // console.log(h4Ref.current)
    })

    // 把子组件的DOM传出来
    // const WarpChild = React.forwardRef((_props, ref) => {
    //     return <div>
    //         <input ref={ref} type="text" value={"React.forwardRef"} />
    //     </div>
    // })

    // const childDOM = useRef<HTMLInputElement>(null)

    // useEffect(() =>{
    //     console.log("childDOM:", childDOM.current)
    // })

    // const WarpChild1 = React.forwardRef((_props, ref) => {
    //     const inputRef = useRef<HTMLInputElement>(null)

    //     useImperativeHandle(ref, () => {
    //         return {
    //             aaa() {
    //                 inputRef.current?.focus()
    //             }
    //         }
    //     }, [inputRef])

    //     return <div>
    //         <input ref={inputRef} type="text" />
    //     </div>
    // })
    // const ref = useRef<HTMLInputElement>(null)
    // useEffect(() => {
    //     ref.current?.aaa()
    // })

    
    
    return (
        <>
            {/* <div className="b-dashed b-1 b-gray text-center p-3 mb-3">
                <div>
                    <h4>useState</h4>
                    <div className='my-3'>{count}</div>
                    <button onClick={() => setCount(count+1)}>+</button>
                    &nbsp;&emsp;
                    <button onClick={() => setCount((preVal) => preVal - 1)}>-</button>
                </div>
            </div>
            <div className="b-dashed b-1 b-gray text-center p-3 mb-3">
                <div>
                    <h4>useEffect</h4>
                    <div>{count}</div>
                </div>
            </div>
            <div className="b-dashed b-1 b-gray text-center p-3 mb-3">
                <div>
                    <h4>useLayoutEffect</h4>
                    <div>{count}</div>
                </div>
            </div>
            <div className="b-dashed b-1 b-gray text-center p-3 mb-3">
                <div>
                    <h4>useLayoutEffect</h4>
                    <div>{count}</div>
                </div>
            </div>
            <div className="b-dashed b-1 b-gray text-center p-3 mb-3">
                <div>
                    <h4>useReducer</h4>
                    <div className='my-3'>{JSON.stringify(res)}</div>
                </div>
                <button className='cursor-pointer' onClick={() => dispatch({ type: 'add', num: 2 })}>加</button>
                &emsp;
                <button className='cursor-pointer' onClick={() => dispatch({ type: 'minus', num: 1 })}>减</button>
            </div>
            <div className="b-dashed b-1 b-gray text-center p-3 mb-3">
                <div>
                    <h4>useReducer</h4>
                    <div className='my-3'>{JSON.stringify(red)}</div>
                </div>
            </div>
            <div className="b-dashed b-1 b-gray text-center p-3 mb-3">
                <div>
                    <h4>useReducer</h4>
                    <div className='my-3'>{JSON.stringify(imer)}</div>
                    <button className='cursor-pointer' onClick={() => dispatchImer({ type: 'add', num: 1 })}>加</button>
                    &emsp;
                    <button className='cursor-pointer' onClick={() => dispatchImer({ type: 'minus', num: 1 })}>减</button>
                </div>
            </div>
            <div className="b-dashed b-1 b-gray text-center p-3 mb-3">
                <div>
                    <h4 ref={h4Ref}>useRef</h4>
                </div>
            </div>
            <div className="b-dashed b-1 b-gray text-center p-3 mb-3">
                <div>
                    <WarpChild ref={childDOM} />
                </div>
            </div>
            <div className="b-dashed b-1 b-gray text-center p-3 mb-3">
                <div>
                    <WarpChild ref={childDOM} />
                </div>
            </div>
            <div className="b-dashed b-1 b-gray text-center p-3 mb-3">
                <div>
                    <WarpChild1 ref={ref} />
                </div>
            </div> */}
            {/* <personContext.Provider value={{name: 'zs', slogan: 'ccc'}}>
                <div className="b-dashed b-1 b-gray text-center p-3 mb-3">
                    <div>
                        <h4>useContext</h4>
                        <div className="my-3"><Bbb></Bbb></div>
                    </div>
                </div>
            </personContext.Provider> */}
            <Aaa></Aaa>
        </>
    )
}