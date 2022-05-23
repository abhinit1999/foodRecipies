import React from 'react'
import './footer.css';
const Footer = () => {
  return (
    <footer>
    <p>Developed By: Abhinit Kumar</p>
    <div className="follow">
        <h4>Follow Me On </h4>
        <a href="https://www.linkedin.com/in/abhinit-kumar-singh-325325148/" target="_blank">
        <i className="fa fa-linkedin"></i></a>
        <a href="https://www.facebook.com/itsAbhinit/" target="_blank">
        <i className="fa fa-facebook"></i></a>
  <a href="https://www.instagram.com/cse_verto/" target="_blank">      <i className="fa fa-instagram"></i></a>
    <a href="https://twitter.com/KrAbhinit" target="_blank">    <i className="fa fa-twitter"></i></a>

    </div>
  </footer>
  )
}

export default Footer;