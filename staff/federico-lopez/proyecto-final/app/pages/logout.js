import { removeCookie } from '../helpers'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Logout(props) {
    const router = useRouter()

    useEffect(() => {
        router.push('/')
    })
    return <>LogOut...</>
}

export async function getServerSideProps({ req, res }) {
    await removeCookie(req, res, 'token')

    return {
        props: {}
    }
}

