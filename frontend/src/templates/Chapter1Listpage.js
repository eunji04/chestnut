import React,{useState} from "react";
import ChapterList from "../molecules/StudyList/ChapterList";
import useAuthStore from "../stores/authStore";
import axios from "axios";
function Chapter1Listpage(){
    const accessToken = useAuthStore((state) => (state.setAccessToken))
    const [data, setdata] =useState();
    axios.get("https://i11d107.p.ssafy.io/chestnutApi/study/chapter/1",{
        headers:{
            access: accessToken
        },
    }).then(response=>{
        if(response.data.code==200){
            setdata(response.data.data);
            
        }
       console.log(response)
       console.log(data);
    })
    .catch(error=>{
        console.log(error);
    });
    return(
        <ChapterList title={'CH1. 자음 / 모음'} />
    );
}
export default Chapter1Listpage;