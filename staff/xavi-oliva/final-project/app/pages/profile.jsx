import { ChangeName, ChangePassword, DeleteAccount, FormContainer, ProfileListButton, Section } from "../components"
import { useState } from "react"

export default function Profile({ router }) {
    const [view, setView] = useState(null)

    const handleChangeNameClick = () => {
        if (view === 'changeName') setView(null)
        
        else setView('changeName')
    }
    const handleChangePasswordClick = () => {
        if (view === 'changePassword') setView(null)
        
        else setView('changePassword')
    }

    const handleDeleteAccountClick = () => {
        if (view === 'deleteAccount') setView(null)
        
        else setView('deleteAccount')
    }

    return <>
        <Section className='section-scroll'>
            <div className="text-secondary bg-white w-full">
                <FormContainer>
                    <ProfileListButton onClick={handleChangeNameClick}>
                        Change name
                    </ProfileListButton>
                    {view === 'changeName' && <ChangeName />}
                </FormContainer>

                <FormContainer>
                    <ProfileListButton onClick={handleChangePasswordClick}>
                        Change password
                    </ProfileListButton>
                    {view === 'changePassword' && <ChangePassword />}
                </FormContainer>

                <FormContainer>
                    <ProfileListButton onClick={handleDeleteAccountClick}>
                        Delete account
                    </ProfileListButton>
                    {view === 'deleteAccount' && <DeleteAccount />}
                </FormContainer>
            </div>
        </Section>
    </>
}
