const Conren1 = () => {
  
    let paper1=80;

    if(paper1>49)
    {
        return( <h1 style={ {backgroundColor:"green"}  }>Pass</h1> )
    }
    else
    {
         return( <h1 style={ {backgroundColor:"red"}  }>Fail</h1> )
    }
}

export default Conren1