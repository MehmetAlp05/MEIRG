import React, { useState, useEffect,useRef } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../.firebase/firebaseConfig';
import { collection, getDocs, updateDoc,doc } from "firebase/firestore";
import {db,storage} from '../../.firebase/firebaseConfig';
import {ref,uploadBytes,getDownloadURL} from "firebase/storage"
import { useNavigate } from "react-router-dom";

export default function ProfilePage(){
    const navigate = useNavigate();

    const [users,setUsers]=useState([]);
    const [isEdit,setIsEdit]=useState();
    const [updateVar,setUpdateVar]=useState();
    const [release,setRelease]=useState([]);
    const [uid, setUid] = useState('');
    const currentUser=useRef({})

    
    const eventsCollectionRef=collection(db,"users");
    useEffect(()=>{
        const getUsers=async()=>{
        const data=await getDocs(eventsCollectionRef)
        setUsers(data.docs.map(( doc) => ({ ...doc.data(), id: doc.id })));
    } 
    getUsers()
    },[])
    const releaseCollectionRef=collection(db,"release");
    useEffect(()=>{
        const getUsers=async()=>{
        const data=await getDocs(releaseCollectionRef)
        setRelease(data.docs.map(( doc) => ({ ...doc.data(), id: doc.id })));
    } 
    getUsers()
    },[])

    
    
    const findCurrentUserByUid=(uidToFind)=>{
        const user=users.find((p)=>p.uid===uidToFind)
        if (user) {
            currentUser.current=user;
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
        
        console.log(currentUser.release)
        //setCurrentRelease(release.filter(obj=>currentUser.release.includes(obj.id)))


    })
    findCurrentUserByUid(uid)


    
    const updateData=(type,value)=>{
        const userDoc=doc(db,"users",currentUser.current.id)
        const newField={[type]:value}
        updateDoc(userDoc,newField)
        setIsEdit("")
    }
    //<IMG
    const imgUrl=useRef()
    const image=useRef()

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
          image.current=e.target.files[0];
        }
    };
    
    const handleSubmit = () => {
        const imageRef = ref(storage, `images/${image.current.name}`);
        uploadBytes(imageRef, image.current)
          .then(() => {
            getDownloadURL(imageRef)
              .then((url) => {
                imgUrl.current=url
                console.log(imgUrl.current)
                window.alert("you have successfully upload your profile picture")
              })
              .catch((error) => {
                console.log(error.message, "error getting the image url");
              });
          })
          .catch((error) => {
            console.log(error.message);
          });
          

    };
    function setProfilePicture(){
        updateData("picture",imgUrl.current)
    }
    //IMG>
    
    return(
        <>
            <div style={{background:"#1D2859"}} className="adminProfile">
                <div style={{backgroundColor:"#F6F9F8"}} className="profilePage">
                <div className="profileMain">
                    <div className="col1">
                        
                        {isEdit!=="name"&&<><span className="name">
                            {(typeof(currentUser.current) !== 'undefined')&&currentUser.current.name}
                        </span>
                        <button onClick={()=>setIsEdit("name")} className='editButton'>edit</button></>
                        }
                        {isEdit==="name"&&<><input type='text' onChange={(event)=>{setUpdateVar(event.target.value)}}>

                        </input>
                        <button className='editButton' onClick={()=>{updateData("name",updateVar)}}>update</button>
                        <button className='editButton' onClick={()=>{setIsEdit("")}}>cancel</button>
                        </>}

                        {isEdit!=="university"&&<><span className="school">
                            {(typeof(currentUser.current) !== 'undefined')&&currentUser.current.university}
                        </span>
                        <button onClick={()=>setIsEdit("university")} className='editButton'>edit</button></>
                        }
                        {isEdit==="university"&&<><input type='text' onChange={(event)=>{setUpdateVar(event.target.value)}}>

                        </input>
                        <button className='editButton' onClick={()=>{updateData("university",updateVar)}}>update</button>
                        <button className='editButton' onClick={()=>{setIsEdit("")}}>cancel</button>
                        </>}
                    </div>
                    <div className="col2">
                        <img src={currentUser.current.picture} alt="" />
                            <input type="file" onChange={handleImageChange}/>
                        <div className='container'>
                            <button className='editButton' onClick={handleSubmit}>Upload Photo</button>
                            <button className='editButton' onClick={setProfilePicture}>Set as Profile Picture</button>
                        </div>
                    </div>
                </div>
                <div className="profileAbout">
                    <span>About</span>
                    <div className="context">
                        {isEdit!=="about"&&<><span className="school">
                            {(typeof(currentUser.current) !== 'undefined')&&currentUser.current.about}
                        </span>
                        <button onClick={()=>setIsEdit("about")} className='editButton'>edit</button></>
                        }
                        {isEdit==="about"&&<><textarea type='textarea' className='textAreaProfile' onChange={(event)=>{setUpdateVar(event.target.value)}}>

                        </textarea>
                        <button className='editButton' onClick={()=>{updateData("about",updateVar)}}>update</button>
                        <button className='editButton' onClick={()=>{setIsEdit("")}}>cancel</button>
                        </>}
                    </div>
                </div>
                <div className="profileInterest">
                    <span>Interest</span>
                    <div className="context">
                        {isEdit!=="interest"&&<><span className="school">
                            {(typeof(currentUser.current) !== 'undefined')&&currentUser.current.interest}
                        </span>
                        <button onClick={()=>setIsEdit("interest")} className='editButton'>edit</button></>
                        }
                        {isEdit==="interest"&&<><textarea type='textarea'className='textAreaProfile' onChange={(event)=>{setUpdateVar(event.target.value)}}>

                        </textarea>
                        <button className='editButton' onClick={()=>{updateData("interest",updateVar)}}>update</button>
                        <button className='editButton' onClick={()=>{setIsEdit("")}}>cancel</button>
                        </>}

                    </div>
                </div>
                <div className="profileRelease">
                    <span>Release</span>
                    <button onClick={()=>navigate("/releaseupload")}>Add new release</button>
                    <div className="container">
                        {   
                            
                            release.filter(obj=>currentUser.current.release.includes(obj.id)).map((e)=>{
                                return(
                                    <div>
                                        {e.title}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
