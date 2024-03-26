export default function Card ({Name,Achievements}){
    return (
        <div className="card">
            <div className="head">
                <img src="./assets/profile.svg" alt="" />
            </div>
            <div className="name"><p>{Name}</p><p>{Achievements}</p></div>
        </div>
    );
}