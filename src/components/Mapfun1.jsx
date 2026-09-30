const Mapfun1 = () => {
  
    let ages=[10,20,30,40,50];
    return (
        <ul>
         { ages.map( (value,index)=> <li key={index}>{index}-{value}</li>   )}
         </ul>
  )
}

export default Mapfun1