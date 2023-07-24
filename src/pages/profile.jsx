import React, { useState, useEffect } from 'react';
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
    
    
    const eventsCollectionRef=collection(db,"users");
    useEffect(()=>{
        const getUsers=async()=>{
        const data=await getDocs(eventsCollectionRef)
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
        console.log(currentUser)

    })
    const updateData=(type,value)=>{
        const userDoc=doc(db,"users",currentUser.id)
        const newField={[type]:value}
        updateDoc(userDoc,newField)
        setIsEdit("")
    }
    //<IMG
    const [url,setURL]=useState(null)
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
          setImage(e.target.files[0]);
        }
    };
    
    const handleSubmit = () => {
        const imageRef = ref(storage, `images/${image.name}`);
        uploadBytes(imageRef, image)
          .then(() => {
            getDownloadURL(imageRef)
              .then((url) => {
                setURL(url);
              })
              .catch((error) => {
                console.log(error.message, "error getting the image url");
              });
            setImage(null);
          })
          .catch((error) => {
            console.log(error.message);
          });
          

    };
    function setProfilePicture(){
        updateData("picture",url)
    }
    //IMG>
    
    return(
        <>
            <div style={{background:"#1D2859"}} className="adminProfile">
                <div style={{backgroundColor:"#F6F9F8"}} className="profilePage">
                <div className="profileMain">
                    <div className="col1">
                        
                        {isEdit!=="name"&&<><span className="name">
                            {(typeof(currentUser) !== 'undefined')&&currentUser.name}
                        </span>
                        <button onClick={()=>setIsEdit("name")} className='editButton'>edit</button></>
                        }
                        {isEdit==="name"&&<><input type='text' onChange={(event)=>{setUpdateVar(event.target.value)}}>

                        </input>
                        <button className='editButton' onClick={()=>{updateData("name",updateVar)}}>update</button>
                        <button className='editButton' onClick={()=>{setIsEdit("")}}>cancel</button>
                        </>}

                        {isEdit!=="university"&&<><span className="school">
                            {(typeof(currentUser) !== 'undefined')&&currentUser.university}
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
                        <img src={currentUser.picture} alt="" />
                        <input type="file" onChange={handleImageChange}/>
                        <button className='editButton' onClick={handleSubmit}>Upload Photo</button>
                        <button className='editButton' onClick={setProfilePicture}>Set as Profile Picture</button>
                    </div>
                </div>
                <div className="profileAbout">
                    <span>About</span>
                    <div className="context">
                        {isEdit!=="about"&&<><span className="school">
                            {(typeof(currentUser) !== 'undefined')&&currentUser.about}
                        </span>
                        <button onClick={()=>setIsEdit("about")} className='editButton'>edit</button></>
                        }
                        {isEdit==="about"&&<><textarea type='textarea' onChange={(event)=>{setUpdateVar(event.target.value)}}>

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
                            {(typeof(currentUser) !== 'undefined')&&currentUser.interest}
                        </span>
                        <button onClick={()=>setIsEdit("interest")} className='editButton'>edit</button></>
                        }
                        {isEdit==="interest"&&<><textarea type='textarea' onChange={(event)=>{setUpdateVar(event.target.value)}}>

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

                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
