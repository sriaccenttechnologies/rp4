const Mapfun2 = () => {

    const   studentinfo=[ 
        {regno:1001,name:"Arun",age:17}  , 
        {regno:1002,name:"Ragu",age:18}  , 
        {regno:1003,name:"Bala",age:19}  ,   
    ]
  
    return (
    <>
    {  studentinfo.map(  (student)=>{
        return <h1>{student.regno}-{student.name}-{student.age}</h1> }  ) }
    </>
  )
}

export default Mapfun2