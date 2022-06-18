import { ProfileListButton, Section } from "../components";


export default function Profile() {
    return <>
        <Section className='section-scroll'>
            <div className="text-secondary bg-white w-full">
                <ProfileListButton>
                    Change name
                </ProfileListButton>

                <ProfileListButton>
                    Change password
                </ProfileListButton>

                <ProfileListButton>
                    Delete account
                </ProfileListButton>
            </div>
        </Section>
    </>
}
