import React from 'react';
import {Link} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import FaceIcon from '@material-ui/icons/Face';
import TvOutlinedIcon from '@material-ui/icons/TvOutlined';
import ComputerIcon from '@material-ui/icons/Computer';
import TabletMacIcon from '@material-ui/icons/TabletMac';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import PowerOutlinedIcon from '@material-ui/icons/PowerOutlined';
import EnhancedEncryptionOutlinedIcon from '@material-ui/icons/EnhancedEncryptionOutlined';
import PanToolOutlinedIcon from '@material-ui/icons/PanToolOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import ChildCareOutlinedIcon from '@material-ui/icons/ChildCareOutlined';
import FlareOutlinedIcon from '@material-ui/icons/FlareOutlined';
import EditLocationOutlinedIcon from '@material-ui/icons/EditLocationOutlined';
import AccessibleOutlinedIcon from '@material-ui/icons/AccessibleOutlined';

function Nav() {

    const menu_wrapper = document.querySelector(".wrapper");
    const menu_bar = document.querySelector(".menu-bar");
    const setting_drop = document.querySelector(".setting-drop");
    const help_drop = document.querySelector(".help-drop");
    const ele_drop = document.querySelector(".ele-drop");
    const beauty_drop = document.querySelector(".beauty-drop");
    const personal_drop = document.querySelector(".personal-drop");

   const drop_btn = (()=>{
      menu_wrapper.classList.toggle("show");
   });

   const setting_item = (()=>{
      menu_bar.style.marginLeft = "-400px";
      setTimeout(()=>{
      setting_drop.style.display = "block";
      }, 100);
   });

   const help_item = (()=>{
      menu_bar.style.marginLeft = "-400px";
      setTimeout(()=>{
      help_drop.style.display = "block";
      }, 100);
   });
    
   const ele_item = (()=>{
      menu_bar.style.marginLeft = "-400px";
      setTimeout(()=>{
      ele_drop.style.display = "block";
      }, 100);
   });
   
   const beauty_item = (()=>{
      menu_bar.style.marginLeft = "-400px";
      setTimeout(()=>{
      beauty_drop.style.display = "block";
      }, 100);
   });
      
   const personal_item = (()=>{
      menu_bar.style.marginLeft = "-400px";
      setTimeout(()=>{
      personal_drop.style.display = "block";
      }, 100);
   });


   const setting_btn = (()=>{
      menu_bar.style.marginLeft = "0px";
      setting_drop.style.display = "none";
   });

   const help_btn = (()=>{
      help_drop.style.display = "none";
      menu_bar.style.marginLeft = "0px";
   });
    
   const electronic_btn = (()=>{
      ele_drop.style.display = "none";
      menu_bar.style.marginLeft = "0px";
   });

   const beauty_btn = (()=>{
      beauty_drop.style.display = "none";
      menu_bar.style.marginLeft = "0px";
   });

   const personal_btn = (()=>{
      personal_drop.style.display = "none";
      menu_bar.style.marginLeft = "0px";
   });

    
    return (
        
      <div className='navigation'>
      <div className="drop-btn" onClick={drop_btn}>
         <IconButton>
            
          <MenuIcon />

         </IconButton>
      </div>


      <div className="wrapper">

         <ul className="menu-bar">
            <li className="setting-item" onClick={setting_item}>
               <Link to="#">
                  <div className="icon">
                     <AccessibilityNewIcon />
                  </div>
                  Clothing, Shoes, jewelary 
                  {/* & Watches */}
                  <i> <ArrowRightIcon /></i>
               </Link>
            </li>
            
            <li className="setting-item" onClick={ele_item}>
               <Link to="#">
                  <div className="icon">
                     <PowerOutlinedIcon />
                  </div>
                  Electronices
                  <i> <ArrowRightIcon /></i>
               </Link>
            </li>
            
            <li className="setting-item" onClick={beauty_item}>
               <Link to="#">
                  <div className="icon">
                     <BrushOutlinedIcon />
                  </div>
                  Beauty
                  <i> <ArrowRightIcon /></i>
               </Link>
            </li>

            <li className="setting-item" onClick={personal_item}>
               <Link to="#">
                  <div className="icon">
                     <ChildCareOutlinedIcon />
                  </div>
                  Personal care
                  <i> <ArrowRightIcon /></i>
               </Link>
            </li>
            
            <li className="help-item" onClick={help_item}>
               <Link to="/">
                  <div className="icon">
                     <ContactSupportOutlinedIcon />
                  </div>
                  Support
                  <i> <ArrowRightIcon /></i>
               </Link>
            </li>
            
            <li>
               <Link to="/">
                  <div className="icon">
                     <HomeOutlinedIcon />
                  </div>
                  Home
               </Link>
            </li>
         </ul>

         <ul className="setting-drop">
            <li className="arrow back-setting-btn" onClick={setting_btn}>
               <ArrowBackIcon />Back
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                  <AccessibilityNewIcon />
                  </div>
                  Men 
               </Link>
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                  <FaceIcon />
                  </div>
                  Women
               </Link>
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                  <AccessibilityNewIcon />
                  </div>
                  Boys
               </Link>
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                  <FaceIcon />
                  </div>
                  Girls
               </Link>
            </li>
         </ul>

         <ul className="ele-drop">
            <li className="arrow back-ele-btn" onClick={electronic_btn}>
               <ArrowBackIcon />Back
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                  <TvOutlinedIcon />
                  </div>
                  Television
               </Link>
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                  <ComputerIcon />
                  </div>
                  Computer
               </Link>
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                  <TabletMacIcon />
                  </div>
                  Tablets
               </Link>
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                  <PhoneAndroidIcon />
                  </div>
                  Cellphones & accessories
               </Link>
            </li>
            
            <li>
               <Link to="#">
                  <div className="icon">
                  <SportsEsportsOutlinedIcon />
                  </div>
                  Video Games
               </Link>
            </li>
         </ul>

         <ul className="beauty-drop">
            <li className="arrow back-beauty-btn" onClick={beauty_btn}>
               <ArrowBackIcon />Back
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                  <FaceIcon />
                  </div>
                  Hire Care
               </Link>
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                  <SentimentSatisfiedOutlinedIcon />
                  </div>
                  Skin Care
               </Link>
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                  <EnhancedEncryptionOutlinedIcon />
                  </div>
                  Wings
               </Link>
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                  <EditLocationOutlinedIcon />
                  </div>
                  Makeup
               </Link>
            </li>
            
            <li>
               <Link to="#">
                  <div className="icon">
                  {/* <SportsEsportsOutlinedIcon /> */}
                  💅
                  </div>
                  Nail
               </Link>
            </li>
         </ul>

         <ul className="personal-drop">
            <li className="arrow back-personal-btn" onClick={personal_btn}>
               <ArrowBackIcon />Back
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                  <AccessibleOutlinedIcon />
                  </div>
                  Sope, Body wash & shower
               </Link>
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                  <FlareOutlinedIcon />
                  </div>
                  Sun care
               </Link>
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                  <PanToolOutlinedIcon />
                  </div>
                  Hand sope
               </Link>
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                  <PanToolOutlinedIcon />
                  </div>
                  Hand sanitizer
               </Link>
            </li>

            
            <li>
               <Link to="#">
                  <div className="icon">
                  {/* <EditLocationOutlinedIcon /> */}
                  🎭 
                  </div>
                  Mask
               </Link>
            </li>
         </ul>

         <ul className="help-drop">
            <li className="arrow back-help-btn" onClick={help_btn}>
               <ArrowBackIcon />
               Help support
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                     <span className="fas fa-question-circle"></span>
                  </div>
                  Help centre 
               </Link>
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                     <span className="fas fa-envelope"></span>
                  </div>
                  Support Inbox 
               </Link>
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                     <span className="fas fa-comment-alt"></span>
                  </div>
                  Send feedback 
               </Link>
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                     <span className="fas fa-exclamation-circle"></span>
                  </div>
                  Report problem 
               </Link>
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                     <span className="fas fa-exclamation-circle"></span>
                  </div>
                  Opnion Box
               </Link>
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                     <span className="fas fa-exclamation-circle"></span>
                  </div>
                  Financial Discussion
               </Link>
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                     <span className="fas fa-exclamation-circle"></span>
                  </div>
                  Covid-19 restriction
               </Link>
            </li>
            <li>
               <Link to="#">
                  <div className="icon">
                     <span className="fas fa-exclamation-circle"></span>
                  </div>
                  Survey
               </Link>
            </li>
         </ul>
      </div>
   </div>
    )
}

export default Nav
