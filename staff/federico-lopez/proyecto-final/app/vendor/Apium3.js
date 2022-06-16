console.log('%BERRE APIUM v1.2', 'font-size: 36px; background: linear-gradient(to right, #30CFD0 0%, #330867 100%); color: white;')

class Apium {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    call(method, urlOrPath, options) {
        const url = urlOrPath.toLowerCase().startsWith('http://') || urlOrPath.toLowerCase().startsWith('https://') ? urlOrPath : `${this.baseUrl}/${urlOrPath}`
        debugger
        let status

        return fetch(url, {
            'method': 'GET',
            'headers': {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MmFiMTBiYmI3YjcwNjcxYzFiZDNmMTIiLCJpYXQiOjE2NTUzOTQ0MzIsImV4cCI6MTY1NTM5ODAzMn0.p05VUs9iyjDRPJXOYcrHx40HY2WsfMNk5WWASSm6q0s'
            },
        })
            .then(response => {
                status = response.status

                return response.json()
            })
            .then(payload => {
                return ({ status, payload })
            })
            .catch(error => {
                return new Error(error)
            })
    }
}

export default Apium