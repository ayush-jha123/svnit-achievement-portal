import './Main.css'
export default function Main (){
    return(
        <div className="main">
            <div className="content-1">
                <h2 style = {{color : "#1e2530", padding : "10px", fontSize : "2em", position :"relative", zIndex : "1"} }>Achievement Portal</h2>
                <h4 style = {{color : "#1e2530", padding : "10px", fontSize : "2em", position :"relative", zIndex : "1"}}>Login</h4>
                <h4 style= {{position: "absolute", left : "10px", fontSize : "1.5em", color : "#1e2530", bottom : "0px", zIndex : "1"}}>HOME</h4>
                <img src="./assets/forgot.png" alt="" className='image' />
            </div>
            <div className="content-2">
                <div className="intro" >It's possible this refers to a particular writing criteria and expected outcome.
                </div>
                <div className='INPUT'>
                    <div className="input-box">
                    <input type="text" placeholder='Email or User Id:' className='email'/>
                    <input type="text" placeholder='Password' className='password' />
                    </div> 
                </div>
                <div className="signin">
                    <button className='sign'>Sign In</button>
                </div>
            </div>
        </div>
    );
}