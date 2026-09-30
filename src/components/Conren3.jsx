const Conren3 = (props) => {
  
    let {status}=props  

    switch(status)
    {
        case "loading":
            return <h1>Loading</h1>
        
        case "success":
            return <h1>success</h1>

        case "error":
            return <h1>error</h1>
        
        default:
            return <p>Unknown Status</p>

    }
    
}

export default Conren3