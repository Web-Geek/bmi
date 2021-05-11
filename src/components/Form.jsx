import React, { useState, useEffect, useRef } from 'react'
import Input from './Input'

function Form() {

    const [weight,setWeight] = useState('');
    const [height,setHeight] = useState('');
    const [bmi,setBmi] = useState(0);
    const [msg,setMsg] = useState('React BMI App');
    const [customClass,setCustomClass] = useState('');
    const [result,setResult] = useState('');
    const [isRenderedAgain,setRenderedAgain] = useState(false);
    const initialRender = useRef(true);

    function weightHandler(event){
        const inputWeight = parseInt(event.target.value);
        setWeight(inputWeight);
    }
    function heightHandler(event){
        const inputHeight = parseInt(event.target.value);
        setHeight(inputHeight);
    }
    function submitHandler(event){
        event.preventDefault();
        setRenderedAgain(true);
        var BMI = (weight)/((height/100)**2);
        BMI = BMI.toFixed(2);
        setBmi(BMI);
        setHeight('');
        setWeight('');
    }
    useEffect(() => {
        if(initialRender.current){
            initialRender.current=false;
        }else{
            console.log(bmi);
            if(bmi<18.5){
                setMsg("Gain some Weight child!!👶🍼");
                setCustomClass('skinny');
                setResult('😿You are Underweight')
            }else if(bmi>=18.5 && bmi <=24.9){
                setMsg("Hey Handsome!!😍");
                setCustomClass('normal');
                setResult('🤩You are Well & Good');
            }else if(bmi>24.9){
                setMsg("Do some Exercise Fat Rat!!🏋️‍♂️");
                setCustomClass('fat');
                setResult('🐷You are Overweight')
            }
        }
    },[bmi])

    return (
    <div>
        <div className={"card-header mb-4 " + customClass}>
            <h1>{msg}</h1>
        </div>
        <form onSubmit={submitHandler}>
            <Input
                id="weight"
                placeholder="weight (in kg)"
                onChange={weightHandler}
                value={weight}
             />
            <Input
                id="height"
                placeholder="height (in cm)"
                value={height}
                onChange={heightHandler}
            />
            <div className="form-group">
                <button className="btn btn-primary">Check BMI</button>
            </div>
            <div className="card-footer">
                {isRenderedAgain ? 
                    <p className="mt-4">" Your BMI is : {bmi} "</p>
                     : <p></p>
                }
                <h2>{result}</h2>
            </div>
        </form>
    </div>
    )
}

export default Form;

