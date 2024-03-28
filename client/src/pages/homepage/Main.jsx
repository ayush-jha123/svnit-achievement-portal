import './Main.css'
import Card from '../../components/Card_opp.jsx';
import CardAchievements from '../../components/Card_ach.jsx';
import Footer from '../../components/Footer.jsx';

export default function Main() {
    return (
        <div className="wrapper1">
            <div className="title">
                SARDAR VALLABHBHAI NATIONAL INSTITUTE OF TECHNOLOGY
            </div>
            <div className="tag">
                SURAT
            </div>
            <div className="heading">ACHIEVEMENT PORTAL</div>
            <div className="content">
                <div className="imag">
                    <img src="./assets/homepage.jpg" alt="" className='image1' />
                </div>
                <div className="intro1">
                    <p style={{color : "#203342", fontSize : "2.5em"}}>Achievemnet throufh effort or skill</p>
                    <p style={{color : "#203342", fontSize : "1.2em", fontWeight : "400"}}>It's possible this refers to a particular writing instructionor activity, like sorting persuasive paragraphs based on the strength of their arguments. In such cases the specific instructions would outline the sorting criteria and expected outcome.</p>
                </div>
            </div>
            <div className="wrapper2">
                <p style={{color : "#474a51", fontSize : "2.5em", fontWeight : "light", marginTop : "-2%"}}>RECENT</p>
                <p style={{color : "#192a3c", fontSize : "2em", fontWeight : "bold", paddingTop: "2%"}}>ACHIEVEMENT</p>
                <div className="table1">
                    < CardAchievements Name="Name" Achievements="Achievements"/>
                    < CardAchievements Name="Name" Achievements="Achievements"/>
                    < CardAchievements Name="Name" Achievements="Achievements"/>
                    < CardAchievements Name="Name" Achievements="Achievements"/>
                </div>
                <div className="head2"><p style={{color : "#192a3c", fontSize : "2.3em", fontWeight : "bold"}}>Opportuinities</p>
                <div className="table2">
                    < Card Studentname ="From Student" Developer="Developer" para="It's possible this refers to a particular writing"/>
                    < Card Studentname ="From Student" Developer="Developer" para="It's possible this refers to a particular writing"/>
                    < Card Studentname ="From Student" Developer="Developer" para="It's possible this refers to a particular writing"/>
                    < Card Studentname ="From Student" Developer="Developer" para="It's possible this refers to a particular writing"/>
                </div>
                </div>
                <p className='view'>View More</p>
            </div>
            <Footer/>
        </div>
    );
}
