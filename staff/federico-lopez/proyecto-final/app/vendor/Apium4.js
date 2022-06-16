console.log('%BERRE APIUM v1.2', 'font-size: 36px; background: linear-gradient(to right, #30CFD0 0%, #330867 100%); color: white;')

export async function berreApium(method, url, options) {
    debugger

    try {
        const response = await fetch(url, { 'method': 'GET', headers: { Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdW…U4OH0.7ngAi9SDJRmkJNYJnEwwLWjkqKQbQFA4DoXIH5HTk_Q' } })

    const { status } = response

    const payload = await response.json()

    return { status, payload }
} catch (error) {
    throw new Error(error)
}
}
export default berreApium