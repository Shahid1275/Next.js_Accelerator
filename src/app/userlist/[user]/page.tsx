const User = async ({params}:{params:{user:string}}) =>{
    const {user} = await params
    return(
    <div>
        <h2>info about user {user}
            </h2>
            <p>Hello i'm the {user}</p>
            </div>)
}

export default User