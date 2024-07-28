import React from 'react';
import WidgetContent from "./WidgetContent";
import './css/Widget.css';

const Widgets = () => {
  return (
    <div className="widget">
    <div className="widget__header">
      <h5>Some Amazing Quotes!!</h5>
    </div>
    <div className="widget__contents">
      <WidgetContent />
    </div>
  </div>
  )
}

export default Widgets