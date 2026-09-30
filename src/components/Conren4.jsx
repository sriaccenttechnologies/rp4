export function AminPanel(){
    return <h1>Admin Panel</h1>
}

export function UserPanel(){
    return <h1>User Panel</h1>
}

const Conren4 = (props) => {
    
    let {isAdmin}=props    
    console.log(isAdmin)
  
    return isAdmin ? <AminPanel/> : <UserPanel/>
}

export default Conren4