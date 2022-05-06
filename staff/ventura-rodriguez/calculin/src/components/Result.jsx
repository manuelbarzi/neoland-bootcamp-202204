const { useState } = React


function Result({value}) {
    const [result, setResult] = useState(value)
    return <div className="Result">{result}</div>
}