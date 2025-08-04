import { animated, useChain, useSpring, useSpringRef, useSprings, useSpringValue, useTrail } from '@react-spring/web'
import { useEffect } from 'react';

export function Donghua() {
    const width = useSpringValue(0, {
        config: {
            duration: 2000
        }
    });

     const width1 = useSpringValue(0, {
        config: {
            mass: 20,
            friction: 10,
            tension: 400
        }
    });

    useEffect(() =>{
        width.start(300)

        width1.start(300)
    })


    // const styles = useSpring({
    //      from: {
    //         width: 0,
    //         height: 0
    //     },
    //     to: {
    //         width: 200,
    //         height: 200
    //     },
    //     config: {
    //         // duration: 2000
    //         mass: 20,
    //         friction: 10,
    //         tension: 400
    //     }
    // })
    
//     const [styles1, api] = useSpring(() => {
//         return {
//             from: {
//                 width: 100,
//                 height: 100
//             },
//             config: {
//                 // duration: 2000
//                 mass: 2,
//                 friction: 10,
//                 tension: 400
//             }
//         }
//   })

//   function handleClick() {
//     api.start({
//         width: 200,
//         height: 200
//     })
//   }


//   const [springs, api] = useSprings(3, () => {
//     return {
//         from: {
//             width: 0
//         },
//         // to: {
//         //     width: 300
//         // },
//         config: {
//             duration: 1000
//         }
//     }
//   })

//   const [springs, api] = useTrail(3, () => {
//     return {
//         from: {
//             width: 0
//         },
//         // to: {
//         //     width: 300
//         // },
//         config: {
//             duration: 1000
//         }
//     }
//   })

//   useEffect(() => {
//     api.start({ width: 300 });  
//   })

  const api1 = useSpringRef()
  
  const [springs] = useTrail(
    3,
    () => ({
      ref: api1,
      from: { width: 0 },
      to: { width: 300 },
      config: {
        duration: 1000
      }
    }),
    []
  )

  const api2 = useSpringRef()
  
  const [springs2] = useSprings(
    3,
    () => ({
      ref: api2,
      from: { height: 100 },
      to: { height: 50},
      config: {
        duration: 1000
      }
    }),
    []
  )

  useChain([api1, api2], [0, 1], 500)

    return <>
        {/* <animated.div className="box bg-blue h-25" style={{width}}></animated.div> */}
        <br />
        {/* <animated.div className="box bg-blue h-25" style={{width: width1}}></animated.div> */}
        <br />
        {/* <animated.div className="box bg-blue h-25" style={styles}></animated.div> */}
        <br />
        {/* <animated.div className="box bg-blue h-25" style={styles1} onClick={handleClick}></animated.div> */}
        {/* <>
            {
                springs.map(styles => {
                    return <>
                        <animated.div className="box bg-blue h-25" style={styles}></animated.div>
                        <br />
                    </>
                })
            }
        </> */}

        <div>
            {
                springs.map((styles1, index) => (
                    <animated.div style={{...styles1, ...springs2[index]}} className='box bg-blue h-25'></animated.div>
                ))
            }
        </div>
    </>
}