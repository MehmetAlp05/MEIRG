import { useState,useEffect, useRef } from "react"
import ReleaseInfo from "../components/releaseInfo";
import { useNavigate } from "react-router-dom";
import {db,storage,auth} from "../../.firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    doc
  } from "firebase/firestore";


export default function ReleaseUpload(){
    const navigate = useNavigate();
    const [type,setType]=useState("select");
    const [tempType,setTempType]=useState("select");
    const [podcast,setPodcast]=useState({title:"",description:"",link:""});
    const [video,setVideo]=useState({title:"",description:"",link:""});
    const [article,setArticle]=useState({title:"",description:"",link:"",pdfLink:""});

    
    const docId=useRef("");
    const eventsCollectionRef=collection(db,"release");
    const updateData=()=>{
        const userDoc=doc(db,"users",currentUser.id)
        const newValue=currentUser.release
        newValue.push(docId.current)
        console.log(newValue);
        const newField={"release":newValue}
        updateDoc(userDoc,newField)
    }
    const createPodcast = async () => {
        await addDoc(eventsCollectionRef, {title:podcast.title,description:podcast.description,link:podcast.link,type:"podcast" })
        .then(docRef=>{
            console.log(docRef.id);
            docId.current=docRef.id
        })
        .finally(docRef=>{
            console.log(docId);
            (docId!=="")?updateData():setTempType(tempType);
        });
    };
    const createVideo = async () => {
        await addDoc(eventsCollectionRef, {title:video.title,description:video.description,link:video.link,type:"video" })
        .then(docRef=>{
            console.log(docRef.id);
            docId.current=docRef.id
        })
        .finally(docRef=>{
            console.log(docId);
            (docId!=="")?updateData():setTempType(tempType);
        });
    };
    const createArticle = async () => {
        await addDoc(eventsCollectionRef, {title:article.title,description:article.description,link:article.link,pdf:article.pdfLink,type:"article" })
        .then(docRef=>{
            console.log(docRef.id);
            docId.current=docRef.id
        })
        .finally(docRef=>{
            console.log(docId);
            (docId!=="")?updateData():setTempType(tempType);
        });
    };

    const [users,setUsers]=useState([]);
    const usersCollectionRef=collection(db,"users");
    useEffect(()=>{
        const getUsers=async()=>{
        const data=await getDocs(usersCollectionRef)
        setUsers(data.docs.map(( doc) => ({ ...doc.data(), id: doc.id })));
    } 
    getUsers()
    },[])
    
    const [uid, setUid] = useState('');
    const [currentUser,setCurrentUser]=useState({name:""});
    const findCurrentUserByUid=(uidToFind)=>{
        const user=users.find((p)=>p.uid===uidToFind)
        if (user) {
            setCurrentUser(user);
          } else {
            console.log(user);
          }    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              setUid(user.uid);
            
              // ...
              console.log("uid", uid)
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
            }

          });
    }, [])
    useEffect(()=>{
        findCurrentUserByUid(uid)
        console.log(currentUser.release)

    })
    


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
                        <input placeholder="Add Title" onChange={(event)=>{setPodcast({"title":event.target.value,"description":podcast.description,"link":podcast.link})}}></input>
                    </div>
                    <div className="block">
                        <textarea placeholder="Add Description" onChange={(event)=>{setPodcast({"title":podcast.title,"description":event.target.value,"link":podcast.link})}}></textarea>
                    </div>
                    <div className="block">
                        <input placeholder="Add Link" onChange={(event)=>{setPodcast({"title":podcast.title,"description":podcast.description,"link":event.target.value})}}></input>
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
                        <ReleaseInfo color="#07A640" margin="0" title={podcast.title} explanation={podcast.description}/>
                        <div className="backforth">
                        <div className="miniBlock" onClick={()=>setType("podcast")}>
                            Go Back
                        </div>
                        <div className="miniBlock" onClick={createPodcast}>
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
                        <input placeholder="Add Title" onChange={(event)=>{setVideo({"title":event.target.value,"description":video.description,"link":video.link})}}></input>
                    </div>
                    <div className="block">
                        <textarea placeholder="Add Description" onChange={(event)=>{setVideo({"title":video.title,"description":event.target.value,"link":video.link})}}></textarea>
                    </div>
                    <div className="block">
                        <input placeholder="Add Link" onChange={(event)=>{setVideo({"title":video.title,"description":video.description,"link":event.target.value})}}></input>
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
                        <ReleaseInfo color="#A91C1C" margin="0"/>
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
                        <input placeholder="Add Title" onChange={(event)=>{setArticle({"title":event.target.value,"description":article.description,"link":article.link})}}></input>
                    </div>
                    <div className="block">
                        <textarea placeholder="Add Description" onChange={(event)=>{setArticle({"title":article.title,"description":event.target.value,"link":article.link})}}></textarea>
                    </div>
                    <div className="block">
                        <input placeholder="Add Link" onChange={(event)=>{setArticle({"title":article.title,"description":article.description,"link":event.target.value})}}></input>
                    </div>
                    <div className="block">
                        <span>Add PDF</span>
                        <input  type="file" placeholder="Add Title"></input>
                    </div>
                    
                    <div className="backforth">
                        <div className="miniBlock" onClick={()=>setType("select")}>
                            Go Back
                        </div>
                        <div className="miniBlock" onClick={()=>setType("previewArticle")}>
                            Next Page
                        </div>
                    </div>
                </div>}
                {
                    (type==="previewArticle")&& <div className="releaseUpload">
                        <div className="block">
                            Preview
                        </div>
                        <ReleaseInfo color="#754FE8" margin="0"/>
                        <div className="backforth">
                        <div className="miniBlock" onClick={()=>setType("article")}>
                            Go Back
                        </div>
                        <div className="miniBlock" onClick={()=>setType("previewArticle")}>
                            Next Page
                        </div>
                    </div>
                    </div>
                }

            </div>
        </>
    )
}