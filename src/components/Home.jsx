const Home = () => {
    
    let paper1=80;

    let result=paper1>49 ?<h1>Pass</h1>: <h1>Fail</h1>
    //var=condtion ? true block : false block
  
    return (
    <div>{result}</div>
  )
}

export default Home