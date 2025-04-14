const Projects = async({params}:{params:{all:string}}) => {
    const {all} = await params
    console.log(all)
    
    return(<div>Projects : {all}
    <h2>All Routess</h2>
    {all.map((p,index) => (
<li key={index}>{p}</li>
))}
    </div>)
}

export default Projects