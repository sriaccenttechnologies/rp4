const Conren2 = () => {
  
  let paper1=70;

    return (
    <>
    {  paper1>49 && <h1 style={ {backgroundColor:"green"} }>Pass</h1>  }
    {  paper1<50 && <h1 style={ {backgroundColor:"red"} }>Fail</h1>  }
    </>
  )
}

export default Conren2

