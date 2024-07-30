import "./MainProfileTextBox.css"
import MainProfileLine from "../../atoms/MainProfileLine";
import Text24 from "../../atoms/Text24";
import Text32 from "../../atoms/Text32";
import Text20 from "../../atoms/Text20";

function MainProfileTextBox() {
    return (
        <div className="MainProfileTextBox">
            <div className="First">
                <p style={{fontSize:"2rem", color:"#6B3906"}}>밤톨이</p>
                <Text24 text="님 오늘도 힘내요!"/>
            </div>
            <MainProfileLine/>
            <div className="Second">
                <div className="Mine">
                    <img src="/icons/MyChestNut.svg" height="31px"/>
                    <Text24 text="10"/>
                </div>
            </div>
            <MainProfileLine/>
            <div className="Third">
                <div className="Attend">
                    <img src="/icons/Fire.svg"/>
                    <Text20 text="연속"/>
                    <p style={{color: "#337AF7", fontSize:"1.5rem"}}>10</p>
                    <Text20 text="일 출석!"/>
                </div>

                <div className="Bar">
                    <img src="/image/Bar.png" width="21px"/>
                </div>
                
                <div className="Ranking">
                    <img src="/image/Ranking.png" height="31px"/>
                    <Text20 text="내 랭킹"/>
                    <Text24 text="2"/>
                    <Text24 text="위"/>
                </div>    
            </div>
            <MainProfileLine/>
            <div className="Fourth">
                <div className="InfoChange">
                    <img src="/icons/Setting.svg"/>
                    <Text20 text="내 정보 보기"/>
                </div>
                <div className="Bar">
                    <img src="/image/Bar.png" width="21px" height="100%"/>
                </div>
                <div>
                    <Text20 text="로그아웃"/>
                </div>
            </div>   

        </div>
    )
}

export default MainProfileTextBox;