import React, { useState } from 'react'
const Qe = (props) => {
    const [count, setCount] = useState(0);
    const [ans, setAns] = useState(0);
    const [wrong, setWrong] = useState(0);

    const [prog, setProg] = useState([])
    const [Dec, setDec] = useState([])


    let conf = false;

    let dataList = [ans, wrong, prog, Dec];
    const checkAns = (e) => {
        if (count < 4) {
            props.Question.map((val) => {
                if (val.ans == e) {
                    conf = true;
                    console.log(prog);
                }
            })
            if (conf) {
                setAns(ans + 1)
                setProg([...prog, 1])
            }
            else {
                setWrong(wrong + 1)
                setDec([...Dec, 1])
            }
            setCount(count + 1)
        }
    }
    props.fun(dataList)
    return (
        <>
            <div className="progres">
                <div className="right-pro">
                    Right Ans
                    <div className="right">
                        {
                            prog.map(() => <span></span>)
                        }
                    </div>
                </div>
                <div className="right-pro">
                    Wrong Ans
                    <div className="wrog">
                        {
                            Dec.map(() => <span></span>)
                        }
                    </div>
                </div>


            </div>
            < div className="Question">

                {
                    props.Question[count].Q
                }
            </div>
            <div className="option">
                <div>
                    {
                        props.Question[count].in.map(val => <button onClick={() => checkAns(val)}>{val}</button>)
                    }
                </div>
            </div>
        </>
    )
}

export default Qe