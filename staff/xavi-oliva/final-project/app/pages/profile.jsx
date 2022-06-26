import { ChangeName, ChangePassword, DeleteAccount, Div, FormContainer, ProfileListButton, Section } from "../components"
import { useState } from "react"
import { verifyTokenWithAPICall } from './helpers'
import { retrieveUser, unregisterUser, updateUser, updateUserPassword } from "../logic"
import { useRouter } from 'next/router'
import Cookies from 'cookies'

export default function Profile({ token, user }) {
    const router = useRouter()
    
    const cookies = new Cookies(req, res)

    const [view, setView] = useState(null)

    const handleEditProfileClick = () => {
        if (view === 'editProfile') setView(null)

        else setView('editProfile')
    }
    const handleChangePasswordClick = () => {
        if (view === 'changePassword') setView(null)

        else setView('changePassword')
    }

    const handleDeleteAccountClick = () => {
        if (view === 'deleteAccount') setView(null)

        else setView('deleteAccount')
    }


    const handleProfileFormSubmit = event => {
        event.preventDefault()

        const name = event.target.name.value
        const surnames = event.target.surnames.value
        const phone = event.target.phone.value

        try {
            updateUser(token, { name, surnames, phone })

            router.push('/admin')

        } catch (error) {
            console.error(error)
        }
    }

    const handleChangePasswordSubmit = event => {
        event.preventDefault()

        const oldPassword = event.target.oldPassword.value
        const password = event.target.password.value
        const repeatPassword = event.target.repeatPassword.value

        try {
            updateUserPassword(token, { oldPassword, password, repeatPassword })

            console.log('successfully updated')
            router.push('/admin')

        } catch (error) {
            console.error(error)
        }
    }

    const handleDeleteAccountSubmit = async event => {
        debugger
        event.preventDefault()

        const password = event.target.password.value
        const repeatPassword = event.target.repeatPassword.value

        event.target.reset()

        try {
            await unregisterUser(token, { password, repeatPassword })

            console.log('successfully deleted')

            // delete sessionStorage.token
            cookies.set('token')
            router.push('/login')

            // handleFeedback('successfully logged in', 'succeed')

        } catch (error) {
            console.error(error)
            // handleFeedback(error.message)
        }
    }


    return <>
        <Section className='section-scroll'>
            <Div className="text-secondary bg-white w-full">
                <Div className='p-4 border-b border-primary'>
                    <h4 className='text-sm font-semibold text-secondary'>Hello {user.name} {user.surnames}</h4>
                </Div>
                <FormContainer>
                    <ProfileListButton onClick={handleEditProfileClick}>
                        Edit profile
                    </ProfileListButton>
                    {view === 'editProfile' && <ChangeName onSubmit={handleProfileFormSubmit} user={user} />}
                </FormContainer>

                <FormContainer>
                    <ProfileListButton onClick={handleChangePasswordClick}>
                        Change password
                    </ProfileListButton>
                    {view === 'changePassword' && <ChangePassword onSubmit={handleChangePasswordSubmit} user={user} />}
                </FormContainer>

                <FormContainer>
                    <ProfileListButton onClick={handleDeleteAccountClick}>
                        Delete account
                    </ProfileListButton>
                    {view === 'deleteAccount' && <DeleteAccount onSubmit={handleDeleteAccountSubmit} user={user} />}
                </FormContainer>
            </Div>
        </Section>
    </>
}

export async function getServerSideProps({ req, res }) {
    debugger
    const token = await verifyTokenWithAPICall(req, res)

    const user = await retrieveUser(token)

    return {
        props: { user, token }
    }
}