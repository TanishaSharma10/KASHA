import React from 'react';
import { Avatar } from "@material-ui/core";
import './css/KashaBox.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../feature/userSlice';

const KashaBox = () => {
  const user = useSelector(selectUser);
  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
        <Avatar src = {user?.photo}/>
      </div>
      <div className="quoraBox__quora">
        <h5>Wanna Share Something? Go for it without a SECOND THOUGHT.</h5>
      </div>
    </div>
  )
}

export default KashaBox