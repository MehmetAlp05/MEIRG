import { useState } from "react"
import ReleaseInfo from "../components/releaseInfo";
import { useNavigate } from "react-router-dom";



export default function ReleaseUpload(){
    const navigate = useNavigate();
    const [type,setType]=useState("select");
    const [tempType,setTempType]=useState("select");
    return(
        <>
            <div>
                {(type==="select")&&<div className="releaseUpload">

                    <div className="block">
                        Please select the type of release.
                    </div>
                    <div className={tempType==="article" ? 'blockActive': "block"} onClick={()=>setTempType(tempType==="select" ? "article":"select")}>
                        Article
                    </div>
                    <div className={tempType==="video" ? 'blockActive': "block"} onClick={()=>setTempType(tempType==="select" ? "video":"select")}>
                        Video
                    </div>
                    <div className={tempType==="podcast" ? 'blockActive': "block"} onClick={()=>setTempType(tempType==="select" ? "podcast":"select")}>
                        Podcast
                    </div>
                    <div className="backforth">
                        <div className="miniBlock" onClick={()=>navigate("/profile")}>
                            Go Back
                        </div>
                        <div className="miniBlock" onClick={()=>setType(tempType)}>
                            Next Page
                        </div>
                    </div>
                </div>}
                
                {(type==="podcast")&&<div className="releaseUpload">
                    <div className="block">
                        You are adding a Podcast.
                    </div>
                    <div className="block">
                        <input placeholder="Add Title"></input>
                    </div>
                    <div className="block">
                        <textarea placeholder="Add Title"></textarea>
                    </div>
                    <div className="block">
                        <input placeholder="Add Title"></input>
                    </div>
                    
                    <div className="backforth">
                        <div className="miniBlock" onClick={()=>setType("select")}>
                            Go Back
                        </div>
                        <div className="miniBlock" onClick={()=>setType("previewPodcast")}>
                            Next Page
                        </div>
                    </div>
                </div>}
                {
                    (type==="previewPodcast")&& <div className="releaseUpload">
                        <div className="block">
                            Preview
                        </div>
                        <ReleaseInfo color="#07A640"/>
                        <div className="backforth">
                        <div className="miniBlock" onClick={()=>setType("podcast")}>
                            Go Back
                        </div>
                        <div className="miniBlock" onClick={()=>setType("previewPodcast")}>
                            Next Page
                        </div>
                    </div>
                    </div>
                }
                {(type==="video")&&<div className="releaseUpload">
                    <div className="block">
                        You are adding a Video.
                    </div>
                    <div className="block">
                        <input placeholder="Add Title"></input>
                    </div>
                    <div className="block">
                        <textarea placeholder="Add Title"></textarea>
                    </div>
                    <div className="block">
                        <input placeholder="Add Title"></input>
                    </div>
                    
                    <div className="backforth">
                        <div className="miniBlock" onClick={()=>setType("select")}>
                            Go Back
                        </div>
                        <div className="miniBlock" onClick={()=>setType("previewVideo")}>
                            Next Page
                        </div>
                    </div>
                </div>}
                {
                    (type==="previewVideo")&& <div className="releaseUpload">
                        <div className="block">
                            Preview
                        </div>
                        <ReleaseInfo color="#A91C1C"/>
                        <div className="backforth">
                        <div className="miniBlock" onClick={()=>setType("video")}>
                            Go Back
                        </div>
                        <div className="miniBlock" onClick={()=>setType("previewVideo")}>
                            Next Page
                        </div>
                    </div>
                    </div>
                }
                {(type==="article")&&<div className="releaseUpload">
                    <div className="block">
                        You are adding a Article.
                    </div>
                    <div className="block">
                        Please add notion link if you want to share as a public.
                    </div>
                    <div className="block">
                        <input placeholder="Add Title"></input>
                    </div>
                    <div className="block">
                        <textarea placeholder="Add Title"></textarea>
                    </div>
                    <div className="block">
                        <input placeholder="Add Title"></input>
                    </div>
                    <div className="block">
                        <input  type="file" placeholder="Add Title"></input>
                    </div>
                    
                    <div className="backforth">
                        <div className="miniBlock" onClick={()=>setType("select")}>
                            Go Back
                        </div>
                        <div className="miniBlock" onClick={()=>setType(tempType)}>
                            Next Page
                        </div>
                    </div>
                </div>}

            </div>
        </>
    )
}