import React from "react";
import "./ChapterMenu.css";
function ChapterMenu(){
    return(
        <div className="card">
            <div className="subcard">
                <div className="title">
                    <div className="titleFont">CH5. 단어</div>
                    <div className="imgbox">
                        <img className="imgcontent" src="https://via.placeholder.com/276x226" />
                    </div>
                </div>
                <button className="studybutton">
                    <div className="buttonbox">
                        <div style={{position: 'relative'}}>
                            <div className="playbox">
                                <div className="play-img"><img src="/icons/Play.svg"/></div>
                            </div>
                            <div className="playfont">학습하기</div>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    );
}
export default ChapterMenu;