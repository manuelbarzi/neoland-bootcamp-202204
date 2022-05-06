const { useState, useEffect } = React


function Result(props) {

    const { value } = props

    const [state, setState] = useState(value)
    
    useEffect(() => {
        debugger
        setState(value)
    }, [value])

    return <div className="Result">{state}</div>
}