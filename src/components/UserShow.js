import './UserShow.css'
const UserShow = ({ number, user }) => {

    return (
        <div className={'Userblock' + number % 2}>
            <div className={'photo' + number % 2}>
                <img src={user.picture.large} alt={user.phone} />
            </div>
            <div className='profile'>
                <div>Name: {user.name.first} {user.name.last}</div>
                <div>Gender: {user.gender}</div>
                <div>Birthday: {user.dob.date}</div>
                <div>Country: {user.location.country}</div>
                <div>City: {user.location.city}</div>
                <div>E-mail: {user.email}</div>
                <div>Phone: {user.phone}</div>
            </div>
        </div>
    )
}

export default UserShow;