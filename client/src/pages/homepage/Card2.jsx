
export default function Card2({Studentname,Developer,para}){
    return (
        <div className="card2">
            <div className="oppo">
                <p>{Studentname}</p>
            </div>
            <div className="developer"><p style={{color : "#1a2f46", fontSize : "2em", fontWeight : "bold", paddingBottom : "20%"}}>{Developer}</p>
                <p style={{color : "#1a2f46", fontSize : "1.2em", fontWeight :"500"}}>{para}</p>
            </div>
            <div className="explore">
                <button style={{padding : "10% 10%", borderRadius : "4px", border : "none", fontSize : "1em"}}>Explore</button>
            </div>
        </div>
    );
}