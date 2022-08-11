import React, { useState } from 'react';
import styles from '../styles/TravellerCard.module.css';

import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "next/link";

import iconUser from '../public/img/icon/icon-user-alt.svg';
import iconBookmark from '../public/img/icon/icon-rebon.svg';

const TravellerCard = ({ user_name, date, post_name, post_img, user_img, rating, date_range, amount }) => {
  
  //console.log(rating);
  let rating_color = '';
  if(parseInt(rating) == 5){
    rating_color = '#1A8F3A';
  }else if(parseInt(rating) == 4){
    rating_color = '#5CAB41';
  }else if(parseInt(rating) == 3){
    rating_color = '#B6C74F';
  }else if(parseInt(rating) == 2){
    rating_color = '#E99D44';
  }else{
    rating_color = '#E96244';
  }

  return (
    <div className={styles.travaller_col}>
      <div className={styles.travaller_content}>
        <div className={styles.travaller_header}>
          <div className={styles.travaller_user_image}>
            <Image
              src={user_img}
              alt="name"
              width={48}
              height={48}></Image>
          </div>
          <div className={styles.travaller_user_details}>
            <h4>{user_name} </h4>
            <p className={styles.textmuted} style={{ fontSize: "12px", paddingTop: "2px" }}>{date}</p>
          </div>
          <div className={styles.travaller_user_rate} >
            <Button
             style={{"backgroundColor":rating_color}}
              startIcon={<Image src={iconUser} alt="User icon" />}>
              {rating}
            </Button>
          </div>
        </div>
        <div className={styles.travaller_image}>
          <Image
            src={post_img}
            alt="name"
            width={315}
            height={200}></Image>
        </div>
        <div className={styles.travaller_body}>
          <div className={styles.travaller_body_date_row} >
            <div className={styles.travaller_body_date}>
              <Link href={''}>
                {date_range}
              </Link>
            </div>
            <div className={styles.travaller_body_bookmark}>
              <Link href={''}>
                <span><Image src={iconBookmark} alt="Bookmark icon" /></span>
              </Link>
            </div>
          </div>
          <div className={styles.travaller_body_text}>
            {post_name}
          </div>
          <div className={styles.travaller_body_text}>
            <p>{amount}
              <b className={styles.textmuted}>/ Day</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravellerCard;