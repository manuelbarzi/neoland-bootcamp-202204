import { ChangeName, ChangePassword, DeleteAccount, Div, FormContainer, ProfileListButton, Section } from "../components"
import { useState } from "react"
import { verifyTokenWithAPICall } from './helpers'
import { retrieveUser, unregisterUser, updateUser, updateUserPassword } from "../logic"
import { useRouter } from 'next/router'
import { FunctionalContext } from "../contexts/functional-context"

export default function Profile({ token, user }) {
    const { setFeedback } = FunctionalContext.useFeedback()
    const router = useRouter()

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

            setFeedback({ level: 'success', message: 'Name, Surnames and/or Phone successfully updated' })

            router.push('/admin')

        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }

    const handleChangePasswordSubmit = event => {
        event.preventDefault()

        const oldPassword = event.target.oldPassword.value
        const password = event.target.password.value
        const repeatPassword = event.target.repeatPassword.value

        try {
            updateUserPassword(token, { oldPassword, password, repeatPassword })

            setFeedback({ level: 'success', message: 'Password successfully updated' })

            router.push('/admin')

        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
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

            cookies.set('token')

            setFeedback({ level: 'success', message: 'Successfully deleted, we are sorry to see you go!' })

            router.push('/login')

        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }


    return <>
        <Section className='section-scroll'>
            <Div className="text-secondary bg-white w-full">
                <Div className='p-4 border-b border-primary bg-primary bg-opacity-5'>
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
                    {view === 'deleteAccount' && <DeleteAccount /* onSubmit={handleDeleteAccountSubmit} */ user={user} />}
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