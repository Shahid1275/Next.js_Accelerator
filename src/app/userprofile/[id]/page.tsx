 const UserProfile = async ({params}:{params:{id:string}}) => {
    const {id} = await params
    return(<div>User profile : {id}</div>)
}
export default UserProfile