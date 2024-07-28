import { Add } from "@material-ui/icons";
import React from "react";
import './css/SidebarOptions.css';

function SidebarOptions() {
  return (
    <div className="sidebarOptions">

       <div className="sidebarOption">
        <img
          src="https://img.freepik.com/premium-photo/3d-cute-cartoon-girl-studying-education-illustration_988987-2794.jpg"
          alt=""
        />
        <p>Education</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1uJchHczzjDZhDKD1Ya5NZlljQlYduzjNAQ&s"
          alt=""
        />
        <p>Jobs</p>
      </div>

      

      <div className="sidebarOption">
        <img
          src="https://img.freepik.com/free-photo/3d-illustration-business-woman-white-coat-eyeglasses_1142-51848.jpg?size=338&ext=jpg&ga=GA1.1.44546679.1716681600&semt=ais_user"
          alt=""
        />

        <p>Business</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/127/173/non_2x/medicine-and-healthcare-concept-illustration-male-and-female-doctor-character-medical-service-can-use-for-homepage-mobile-apps-web-banner-character-cartoon-illustration-flat-style-free-vector.jpg"
          alt=""
        />
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://t4.ftcdn.net/jpg/03/29/13/85/360_F_329138566_6h4UEdMrjSMH9kLdXkHRkm46kg4kVIJR.jpg"
          alt=""
        />
        <p>Psychology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-iranian-woman-illustration_23-2149857688.jpg"
          alt=""
        />
        <p>Cooking</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://media.istockphoto.com/id/1017890378/vector/vector-cartoon-music-icon-in-comic-style-sound-note-sign-illustration-pictogram-melody-music.jpg?s=612x612&w=0&k=20&c=9tRSAvC1OZwyIKyFvVT53WtxYk_CNbVK6wbIU8kO9LI="
          alt=""
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8gFfZyWrNVOe4z3MazTa3dfp6HvpLom4PQ&s"
          alt=""
        />
        <p>Movies</p>
      </div>

      


      <div className="sidebarOption">
        <Add />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  );
}

export default SidebarOptions;