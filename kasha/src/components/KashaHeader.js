import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import {
  AssignmentTurnedInOutlined,
  // Close,
  NotificationsOutlined,
  PeopleAltOutlined,
  Search,
  ExpandMore,
} from "@material-ui/icons";
import "./css/KashaHeader.css"
import CloseIcon from "@material-ui/icons/Close";
import { Avatar, Button, Input } from "@material-ui/core";
// import "./css/KashaHeader.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import axios from "axios";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { logout, selectUser } from "../feature/userSlice";
import { useDispatch, useSelector } from "react-redux";


const KashaHeader = () => {

  
  const[isModalOpen, setIsModalOpen]=useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const [question, setQuestion] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const Close=<CloseIcon/>


  const handleSubmit = async () => {
    if (question !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        questionName: question,
        questionUrl: inputUrl,
        user: user,
      };
      await axios
        .post("/api/questions", body, config)
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);
          window.location.href = "/";
        })
        .catch((e) => {
          console.log(e);
          alert("Error in adding question");
        });
    }
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure to logout ?")) {
      signOut(auth)
        .then(() => {
          dispatch(logout());
          console.log("Logged out");
        })
        .catch(() => {
          console.log("error in logout");
        });
    }
  };


  return (
    <div className="qHeader">
      <div className="qHeader-content">
        <div className="qHeader__logo">
          <img
            src="https://images.emojiterra.com/google/noto-emoji/unicode-15/animated/1fa77.gif"
            alt="logo"
          />
        </div>
        <div className="qHeader__icons">
          <div className="qHeader__icon">
            <HomeIcon />
          </div>
          <div className="qHeader__icon">
            <FeaturedPlayListOutlinedIcon />
          </div>
          <div className="qHeader__icon">
            <AssignmentTurnedInOutlined />
          </div>
          <div className="qHeader__icon">
            <PeopleAltOutlined />
          </div>
          <div className="qHeader__icon">
            <NotificationsOutlined />
          </div>
        </div>
        <div className="qHeader__input">
          <Search />
          <input type="text" placeholder="Search questions" />
        </div>
        <div className="qHeader__Rem">
        <span onClick={handleLogout}>
            <Avatar src={user?.photo} />
          </span>
        </div>
        <Button onClick={()=>setIsModalOpen(true)}>POST</Button>
        <Modal
        open={isModalOpen}
        CloseIcon={Close}
        onClose={()=>setIsModalOpen(false)}
        closeOnEsc
        center
        
        closeOnOverlayClick={false}
        styles={{
          overlay:{
            height: "auto",
          }
        }}
        >
          <div className="modal__title">
            <h5>Upload Post</h5>
            <h5>Share Link</h5>
          </div>
          <div className="modal__info">
            <Avatar className='avatar'/>
            <div className="modal__scope">
              <PeopleAltOutlined />
              <p>Public</p>
              <ExpandMore />
            </div>
          </div>
          <div className="modal__Field">
            <Input  
             value={question}
             onChange={(e) => setQuestion(e.target.value)}
             type="text" placeholder="Share or Ask" />
            <div style={{
              display:"flex",
              flexDirection:"column",
            }}>
             
              <Input
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                style={{
                margin:"5px,0",
                border:"1px solid lightgray",
                padding:"10px",
                outline:"2px solid #000"
              }} type="text" placeholder="Optional: Share an External Link"/> 
                  {inputUrl !== "" && (
                  <img
                    style={{
                      height: "40vh",
                      objectFit: "contain",
                    }}
                    src={inputUrl}
                    alt="displayimage"
                  />
                )}
            </div>
          </div>
          <div className="modal__buttons">
          <button className="cancle" onClick={()=> setIsModalOpen(false)}>
              Cancel
            </button>
            <br />
            <button onClick={handleSubmit} type="submit" className="add" >
              Post
            </button>
          
           
            
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default KashaHeader