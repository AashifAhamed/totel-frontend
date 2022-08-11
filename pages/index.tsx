import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TextField from "@mui/material/TextField";

import WrapHeader from "../components/WrapHeader";
import WrapFooter from "../components/WrapFooter";
import TravellerCard from "../components/TravellerCard";
import styles from "../styles/Home.module.css";
import { homeHotels, homeRooms, homeTrips } from "./api/data";
import { fontSize } from "@mui/system";

import iconUser from '../public/img/icon/icon-user-alt.svg';
import iconBookmark from '../public/img/icon/icon-rebon.svg';
import iconPlay from '../public/img/icon/icon-big-play.svg';
// BEGIN: Quick search Tabs of Hostels / Rooms / Tours
function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: Number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
// END: Quick search Tabs of Hostels / Rooms / Tours

export default function Home() {
  // BEGIN: Quick search Tabs of Hostels / Rooms / Tours
  const [quickTabValue, setQuickTabValue] = React.useState(0);

  const handleChangeQuickTab = (event: any, newValue: any) => {
    setQuickTabValue(newValue);
  };
  // END: Quick search Tabs of Hostels / Rooms / Tours

  // BEGIN: News Letter
  const [newsLetter, setNewsLetter] = useState("");
  // END: News Letter

  return (
    <div className={styles.container}>
      <Head>
        <title>Metoospace | Home</title>
        <meta name='description' content='Best Spaces in the Universe.' />
      </Head>

      <WrapHeader />

      <main className={styles.homemain}>
        <div className={styles.section01}>
          <div className={styles.title}>
            <h3>Fit in your choice</h3>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.image}>

                <Image
                  src="/img/image1.png"
                  alt="name"
                  width={200}
                  height={200}
                />
              </div>
              <div className={styles.details}>
                <p className={styles.postname}>
                  Ramada Limited & Suites
                </p>
                <p className={styles.textmuted}>Albert Flores</p>
                <a className={styles.button}>4 Jun - 6 Jun</a>
                <p className={styles.text_normal}>$90 / Day</p>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.image}>

                <Image
                  src="/img/image2.png"
                  alt="name"
                  width={200}
                  height={200}
                />
              </div>
              <div className={styles.details}>
                <p className={styles.postname}>
                  Sequoia Hotel and Rooms
                </p>
                <p className={styles.textmuted}>Lewis Barnett</p>
                <a className={styles.button}>4 Jun - 6 Jun</a>
                <p className={styles.text_normal}>$90 / Day</p>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.image}>

                <Image
                  src="/img/image3.png"
                  alt="name"
                  width={200}
                  height={200}
                />
              </div>
              <div className={styles.details}>
                <p className={styles.postname}>
                  Royal Citadel Resort & Spa
                </p>
                <p className={styles.textmuted}>Alyssa Oliver</p>
                <a className={styles.button}>4 Jun - 6 Jun</a>
                <p className={styles.text_normal}><strong>$90</strong> /   Day</p>
              </div>
            </div>
          </div>
        </div>
        {/* Section 2 */}
        <div className={styles.section02}>
          <div className={styles.title_div}>
            <div className={styles.title}>
              <h3>Traveller in Miami <b className={styles.textmuted} style={{ fontSize: "12px" }}>56 more</b></h3>
            </div>
            <div className={styles.title_right}>
              <Link href={'/traveller'}>View all</Link>
            </div>
          </div>
          <div className={styles.travaller_row}>
            <TravellerCard
              user_name={'Sonya Clarke'}
              user_img={'/img/user1.png'}
              date={'March 24, 2020'}
              post_img={'/img/image4.png'}
              post_name={'Hilton Miami Downtowss'}
              date_range={'4 Jun - 6 Jun'}
              rating={'2.0'}
              amount={'$90'}
            />

            <TravellerCard
              user_name={'Emilio Tran'}
              user_img={'/img/user2.png'}
              date={'March 24, 2020'}
              post_img={'/img/image5.png'}
              post_name={'Vagabond Cabin'}
              date_range={'4 Jun - 6 Jun'}
              rating={'2.0'}
              amount={'$90'}
            />

            <TravellerCard
              user_name={'Dale Hanson'}
              user_img={'/img/user3.png'}
              date={'March 24, 2020'}
              post_img={'/img/image7.png'}
              post_name={'Celeste Hotel'}
              date_range={'4 Jun - 6 Jun'}
              rating={'2.0'}
              amount={'$90'}
            />

            <TravellerCard
              user_name={'Vanessa Hamilton'}
              user_img={'/img/user4.png'}
              date={'March 24, 2020'}
              post_img={'/img/image9.png'}
              post_name={'Slumber Cottage'}
              date_range={'4 Jun - 6 Jun'}
              rating={'2.0'}
              amount={'$90'}
            />
           
          </div>
        </div>
        <div className={styles.section03}>
          <div className={styles.title_div}>
            <div className={styles.title}>
              <h3>Travel to Miami <b className={styles.textmuted} style={{ fontSize: "12px" }}>56 more</b></h3>
            </div>
            <div className={styles.title_right}>
              <Link href={''}>View all</Link>
            </div>
          </div>
          <div className={styles.travaller_row}>
            <div className={styles.travaller_col}>
              <div className={styles.travaller_content}>
                <div className={styles.travaller_header}>
                  <div className={styles.travaller_user_image}>
                    <Image
                      src="/img/user5.png"
                      alt="name"
                      width={48}
                      height={48}></Image>
                  </div>
                  <div className={styles.travaller_user_details}>
                    <h4>Sonya Clarke </h4>
                    <p className={styles.textmuted} style={{ fontSize: "12px", paddingTop: "2px" }}>March 24, 2020</p>
                  </div>
                  <div className={styles.travaller_user_rate}>
                    <Button
                      startIcon={<Image src={iconUser} alt="User icon" />}>
                      2.0
                    </Button>
                  </div>
                </div>
                <div className={styles.traval_content}>
                  <div className={styles.traval_content_col} >
                    <div className={styles.travaller_body_text}>
                      Royal Galaxy Resort
                    </div>
                    <div className={styles.travel_finding_partner}>
                      Finding Partner
                    </div>
                    <div className={styles.travel_desc} >
                      Amet minim mollit non deserunt
                      ullamco est sit aliqua dolor do amet sint.
                    </div>
                    <div className={styles.travaller_body_text}>
                      <p>$100
                        <b className={styles.textmuted}>/ Day</b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.travaller_body}>
                  <div className={styles.travaller_body_date_row} >
                    <div className={styles.travaller_body_date}>
                      <Link href={''}>
                        4 Jun - 6 Jun
                      </Link>
                    </div>
                    <div className={styles.travaller_body_bookmark}>
                      <Image src={iconBookmark} alt="Bookmark icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.travaller_col}>
              <div className={styles.travaller_content}>
                <div className={styles.travaller_header}>
                  <div className={styles.travaller_user_image}>
                    <Image
                      src="/img/user7.png"
                      alt="name"
                      width={48}
                      height={48}></Image>
                  </div>
                  <div className={styles.travaller_user_details}>
                    <h4>Winter Gilbert </h4>
                    <p className={styles.textmuted} style={{ fontSize: "12px", paddingTop: "2px" }}>March 24, 2020</p>
                  </div>
                  <div className={styles.travaller_user_rate}>
                    <Button
                      startIcon={<Image src={iconUser} alt="User icon" />}>
                      2.0
                    </Button>
                  </div>
                </div>
                <div className={styles.traval_content}>
                  <div className={styles.traval_content_col} >
                    <div className={styles.travaller_body_text}>
                      Red wood hotel
                    </div>
                    <div className={styles.travel_finding_partner}>
                      Finding Partner
                    </div>
                    <div className={styles.travel_desc} >
                      Amet minim mollit non deserunt
                      ullamco est sit aliqua dolor do amet sint.
                    </div>
                    <div className={styles.travaller_body_text}>
                      <p>$100
                        <b className={styles.textmuted}>/ Day</b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.travaller_body}>
                  <div className={styles.travaller_body_date_row} >
                    <div className={styles.travaller_body_date}>
                      <Link href={''}>
                        4 Jun - 6 Jun
                      </Link>
                    </div>
                    <div className={styles.travaller_body_bookmark}>
                      <Image src={iconBookmark} alt="Bookmark icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.travaller_col}>
              <div className={styles.travaller_content}>
                <div className={styles.travaller_header}>
                  <div className={styles.travaller_user_image}>
                    <Image
                      src="/img/user8.png"
                      alt="name"
                      width={48}
                      height={48}></Image>
                  </div>
                  <div className={styles.travaller_user_details}>
                    <h4>Elsie Lindsey </h4>
                    <p className={styles.textmuted} style={{ fontSize: "12px", paddingTop: "2px" }}>March 24, 2020</p>
                  </div>
                  <div className={styles.travaller_user_rate}>
                    <Button
                      startIcon={<Image src={iconUser} alt="User icon" />}>
                      2.0
                    </Button>
                  </div>
                </div>
                <div className={styles.traval_content}>
                  <div className={styles.traval_content_col} >
                    <div className={styles.travaller_body_text}>
                      Obsidian Bay Hotel
                    </div>
                    <div className={styles.travel_finding_partner}>
                      Finding Partner
                    </div>
                    <div className={styles.travel_desc} >
                      Amet minim mollit non deserunt
                      ullamco est sit aliqua dolor do amet sint.
                    </div>
                    <div className={styles.travaller_body_text}>
                      <p>$100
                        <b className={styles.textmuted}>/ Day</b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.travaller_body}>
                  <div className={styles.travaller_body_date_row} >
                    <div className={styles.travaller_body_date}>
                      <Link href={''}>
                        4 Jun - 6 Jun
                      </Link>
                    </div>
                    <div className={styles.travaller_body_bookmark}>
                      <Image src={iconBookmark} alt="Bookmark icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.travaller_col}>
              <div className={styles.travaller_content}>
                <div className={styles.travaller_header}>
                  <div className={styles.travaller_user_image}>
                    <Image
                      src="/img/logregsidebar.jpg"
                      alt="name"
                      width={48}
                      height={48}></Image>
                  </div>
                  <div className={styles.travaller_user_details}>
                    <h4>Aliyah Bailey </h4>
                    <p className={styles.textmuted} style={{ fontSize: "12px", paddingTop: "2px" }}>March 24, 2020</p>
                  </div>
                  <div className={styles.travaller_user_rate}>
                    <Button
                      startIcon={<Image src={iconUser} alt="User icon" />}>
                      2.0
                    </Button>
                  </div>
                </div>
                <div className={styles.traval_content}>
                  <div className={styles.traval_content_col} >
                    <div className={styles.travaller_body_text}>
                      Primal Covert Hotel
                    </div>
                    <div className={styles.travel_finding_partner}>
                      Finding Partner
                    </div>
                    <div className={styles.travel_desc} >
                      Amet minim mollit non deserunt
                      ullamco est sit aliqua dolor do amet sint.
                    </div>
                    <div className={styles.travaller_body_text}>
                      <p>$100
                        <b className={styles.textmuted}>/ Day</b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.travaller_body}>
                  <div className={styles.travaller_body_date_row} >
                    <div className={styles.travaller_body_date}>
                      <Link href={''}>
                        4 Jun - 6 Jun
                      </Link>
                    </div>
                    <div className={styles.travaller_body_bookmark}>
                      <Image src={iconBookmark} alt="Bookmark icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section 4 */}
        <div className={styles.section04_back}>
          <div className={styles.section04}>
            <div className={styles.section04_main}>
              <div className={styles.section04_text1}>How Easy to find the perfect Travel partner and Reduce travel expenses?</div>
              <div className={styles.section04_text_big}>You Just 3 Steps Away</div>
              <div className={styles.section04_watch_now}>
                <Image src={iconPlay} alt="Play icon" /> Watch Now
              </div>
            </div>
            <div className={styles.section04_create_post}>
              <div className={styles.section04_create_post_image}>
                <Image src={'/img/post.png'} alt="Create post icon" width={117}
                  height={145} />
              </div>
              <div className={styles.section04_create_post_title}>Create Post</div>
              <div className={styles.section04_create_post_text}>
                for sharing place or search for places and travellers
              </div>
            </div>
            <div className={styles.section04_create_post}>
              <div className={styles.section04_create_post_image}>
                <Image src={'/img/patner.png'} alt="Create post icon" width={156}
                  height={146} />
              </div>
              <div className={styles.section04_create_post_title}>Find Perfect Patner</div>
              <div className={styles.section04_create_post_text}>
                for sharing place or search for places and travellers
              </div>
            </div>
            <div className={styles.section04_create_post}>
              <div className={styles.section04_create_post_image}>
                <Image src={'/img/save_money.png'} alt="Create post icon" width={156}
                  height={146} />
              </div>
              <div className={styles.section04_create_post_title}>Save your  Money</div>
              <div className={styles.section04_create_post_text}>
                for sharing place or search for places and travellers
              </div>
            </div>
          </div>
        </div>
        {/* Section 5 */}
        <div className={styles.section05}>
          <div className={styles.section05_content}>
            <div className={styles.section05_content_main}>
              <Image src={'/img/phone_show.png'} alt="Create post icon" width={324}
                height={404} />
            </div>
            <div className={styles.section05_content_text_area}>
              <div className={styles.section05_content_text_area_title}>
                Download totel app for best Experience
              </div>
              <div className={styles.section05_content_text_muted}>
                Available for free on these platforms
              </div>
              <div className={styles.section05_content_app_icons}>
                <div className={styles.section05_content_app_icons_img}>
                  <Image src={'/img/apple_store.png'} alt="Create post icon" width={198}
                    height={58} />
                </div>
                <div>
                  <Image src={'/img/play_store.png'} alt="Create post icon" width={198}
                    height={58} />

                </div>
              </div>

            </div>
          </div>
        </div>

      </main>

      <WrapFooter />
    </div>
  );
}
