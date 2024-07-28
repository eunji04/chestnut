import Text20 from "../../atoms/Text20"
import Text24 from "../../atoms/Text24"
import Text32 from "../../atoms/Text32"
import LastStudyButton from "../../molecules/Main/LastStudyButton"

import "./LastStudy.css"

function LastStudy({chapter, word}) {
    return (
        <div className="LastStudy">
            <div className="LastStudyHead">
                <Text20 text="오늘도 열심히 가보자고!"/>
            </div>
            <div className="LastStudyBody">
                <div className="LastStudyChapter">
                    <div className="LastStudyChapterLeft">
                        <Text24 text="학습 현황 : "/>
                        <Text24 text={chapter}/>
                    </div>
                    <img src="/icons/LastStudyIcon.svg"/>
                </div>
                <div>
                    <Text32 text={word}/>
                </div>
                <LastStudyButton/>
            </div>

        </div>
    )
}

export default LastStudy;