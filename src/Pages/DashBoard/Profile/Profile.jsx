import Sidebar from '../../../components/DashBoard/Sidebar/Sidebar'
import './Profile.css'

const Profile = () => {
    return (
        <div className='app__main'>
            <div className='sidebar__main__con'>
                <Sidebar />
            </div>
            <div className='app__routes'>
                <div className='profile__con'>
                    <h1 className='text-2xl font-bold py-3 md:py-5 mx-4'>Your Profile</h1>
                    <div className="profile">
                        <div className="profile__left">
                            <div className="profile__card">
                                <div className="profile__card__input">
                                    <label>First Name</label>
                                    <input type="text" />
                                </div>
                                <div className="profile__card__input">
                                    <label>Last Name</label>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className="profile__card">
                                <div className="profile__card__input">
                                    <label>Email</label>
                                    <input type="email" />
                                </div>
                            </div>

                            <div className="profile__card">
                                <div className="profile__card__input">
                                    <label>Time zone</label>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className="profile__card">
                                <div className="profile__card__input">
                                    <label>Password</label>
                                    <input type="password" />
                                </div>
                                <div className="profile__card__input">
                                    <label>New Password</label>
                                    <input type="password" />
                                </div>
                                <div className="profile__card__input">
                                    <label>Confirm Password</label>
                                    <input type="password" />
                                </div>

                                <div className="profile__button">
                                    <button>Save</button>
                                </div>
                            </div>

                        </div>
                        <div className="profile__right">
                            <h1 className='text-2xl font-bold mx-4'>Optional Information</h1>

                            <div className="profile__card">
                                <div className="profile__card__input mt-4">
                                    <label>Website</label>
                                    <input type="text" />
                                </div>
                                <div className="profile__card__input mt-4">
                                    <label>Phone</label>
                                    <input type="text" />
                                </div>
                                <div className="profile__card__input mt-4">
                                    <label>Skype</label>
                                    <input type="text" />
                                </div>
                                <div className="profile__card__input mt-4">
                                    <label>Whatsapp Number</label>
                                    <input type="text" />
                                </div>
                                <div className="profile__card__input mt-4">
                                    <label>Address  </label>
                                    <input type="text" />
                                </div>

                                <div className="profile__button">
                                    <button>Save</button>
                                </div>
                            </div>

                            <div className="profile__card">
                                <h1 className='text-2xl font-bold mx-4'>Your API Key</h1>
                                <div className="profile__card__input mt-4">
                                    <label>Key</label>
                                    <input type="text" />
                                </div>

                                <div className="profile__button">
                                    <button>Generate New</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile