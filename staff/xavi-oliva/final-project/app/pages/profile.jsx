import { Header, Footer, CommonMain, ProfileListButton } from "../components";


export default function Profile() {
    return <>
        <div className="flex flex-col h-screen">
            <Header />
            <CommonMain>
                <div className="text-secondary bg-white w-screen">
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
            </CommonMain>
            <Footer />
        </div>
    </>
}
