import { useRef } from 'react';

function Counter(props) {
    const add = useRef();
    const sub = useRef();

    function dec() {
        if(props.val > 0){
            var val = props.val;
            val--;
            props.setter("numCases", val);
        }
    }
    
    function inc() {
        var val = props.val;
        val++;
        props.setter("numCases", val);  
    }

    return (
        <div className="flex gap-12 text-xl mt-1">
            <p ref={sub} className={props.val === 0 ? "cursor-pointer text-farahgray-300 font-bold no-select" : "cursor-pointer font-bold no-select"} onClick={dec}>−</p>
            <p className="w-12 text-center">{props.val}</p>
            <p ref={add} className="cursor-pointer font-bold no-select" onClick={inc}>+</p>
        </div>
    );
}

export default Counter;