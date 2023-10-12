import UserShow from "./UserShow";
const UserList = ({ Userdata }) => {
    console.log(Userdata);
    const rerender = Userdata.map((user,uid)=>{
        return(
            <UserShow key={uid} number={uid+1} user={user} />
        )
    })
    return (
        <div>
            {rerender}
        </div>
    )
}

export default UserList;