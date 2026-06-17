import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import { ArrowRight, MapPin, Tag, X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import portfolioImg1 from "@assets/ScreenLFTp.2jpg_1781705806812.jpg";
import portfolioImg2 from "@assets/10k_Theater_1_1780573606798.png";
// Nautilus Theater — Warrenton, Virginia (2024 CE Pro Gold)
import ntScreenFrontBlank from "@assets/screen1_1781713607622.jpg";
import ntScreenFrontPlaying from "@assets/screen1a_1781713607622.jpg";
import ntScreenFrontPlaying2 from "@assets/screen1B_1781713607623.jpg";
import ntScreenWallCloseup from "@assets/screen2a_1781713607623.jpg";
import ntScreenLeftSeating from "@assets/ScreenLFT_1781713607623.jpg";
import ntScreenLeftDune from "@assets/ScreenLFT2_1781713607623.jpg";
import ntScreenLeftAvatar from "@assets/LFTscreen2_1781713607620.jpg";
import ntScreenRightAngle from "@assets/RTscreen_1781713607622.jpg";
import ntScreen300Film from "@assets/RTscreen2_1781713607622.jpg";
import ntScreenRightSeating from "@assets/screenRT_1781713607624.jpg";
import ntScreenMandalorian from "@assets/screenRT2_1781713607624.jpg";
import ntBwFullRoom from "@assets/Theater-BW_1781713607625.jpg";
import ntBwLeftView from "@assets/Screen-LT-BW_1781713607624.jpg";
import ntBwRightView from "@assets/Screen-RT-BW_1781713607624.jpg";
import ntBwSeatingHatch from "@assets/Seating-BW_1781713607625.jpg";
import ntSeatingFront from "@assets/Seating-Front_1781713607625.jpg";
import ntSeatingLeftPurple from "@assets/Seating-LFT_1781713607625.jpg";
import ntSeatingRightHatch from "@assets/Seating-RT_1781713607625.jpg";
import ntLightSwitch from "@assets/LightSW_1781713607621.jpg";
import ntProjectorHousing from "@assets/projectior-box_1781713607621.jpg";
import mfhtMain from "@assets/FTheater_1781714591308.jpg";
import mfhtCover from "@assets/FTheater_1781715684924.jpg";
// Modern Fusion Home Theater — Nokesville, Virginia (2018 EH Bronze)
import mfhtFrontLeftPurple from "@assets/FL-pur_1781715255322.jpg";
import mfhtFrontBlueLighting from "@assets/Front-Blu_1781715255322.jpg";
import mfhtFrontPurpleLighting from "@assets/Front-Pur_1781715255323.jpg";
import mfhtFrontTealBlue from "@assets/Front-tblu_1781715255323.jpg";
import mfhtFrontAvatar from "@assets/front-tpur_1781715255323.jpg";
import mfhtFullSeating from "@assets/Fseating_1781715255323.jpg";
import mfhtSideAngle300 from "@assets/FTheater_1781715255324.jpg";
import mfhtEquipmentRack from "@assets/rack_2_1781715255324.jpg";
import mfhtRightLeftPurple from "@assets/Rl-Purp_1781715255324.jpg";
import mfhtRearLeftBar from "@assets/RL-tblk_1781715255324.jpg";
import mfhtRearRightBlue from "@assets/RR-BLK_1781715255325.jpg";
import mfhtRearRightWhite from "@assets/RR-Wh_1781715255325.jpg";
import mfhtSideFrontBlue from "@assets/SFR_-Blu_1781715255325.jpg";
// Family Oasis Theater — Great Falls, Virginia (2025 CE Pro Silver)
import foScreenLeftStarTrek from "@assets/Screen-LFT2p_1781715830565.jpg";
import foScreenLeft1 from "@assets/Screen_LFT1_1781715978125.jpg";
import foScreenLeft2a from "@assets/Screen_LFT2a_1781715978126.jpg";
import foScreenLeft2b from "@assets/Screen_LFT2b_1781715978126.jpg";
import foScreenCenter1 from "@assets/Screenc1_1781715978126.jpg";
import foScreenCenter1Wolverine from "@assets/Screenc1p_1781715978127.jpg";
import foScreenCenter2 from "@assets/screenc2_1781715978127.jpg";
import foScreenCenter3 from "@assets/screenc3_1781715978127.jpg";
import foScreenFront1 from "@assets/screenfront_1781715978127.jpg";
import foScreenFront2 from "@assets/screenfront2_1781715978127.jpg";
import foScreenFrontSpiderman from "@assets/screenfrontP_1781715978128.jpg";
import foScreenLeft2Playing from "@assets/Screen-LFT2p_1781715978128.jpg";
import foScreenMidLeft from "@assets/screen-MidLFT_1781715978128.jpg";
import foScreenMidRight from "@assets/Screenmidrt3_1781715978128.jpg";
import foScreenMidRightPlaying from "@assets/Screenmidrt3P_1781715978129.jpg";
import foScreenRight from "@assets/ScreetRT_1781715978129.jpg";
import foSeatingLeft from "@assets/Seating-LFT2_1781715978129.jpg";
import foScreenLeftPlaying from "@assets/Screen-LFT2p_1781716503732.jpg";
import foSeatingRight from "@assets/Seating-RT2_1781715978129.jpg";
import foClosetOpen from "@assets/closet_1781716221977.jpg";
import foClosetClosed from "@assets/closet-2_1781716221978.jpg";
import foColumnSconce from "@assets/column2_1781716221978.jpg";
import foColumnsRight from "@assets/Columns-RT_1781716221978.jpg";
import foDoorRearWall from "@assets/door_1781716221978.jpg";
import foDoorSwitch from "@assets/door-switch_1781716221979.jpg";
import foRackRoom from "@assets/rack2_1781716221979.jpg";
import foRackAV from "@assets/Rack-AV_1781716221979.jpg";
import foRearCounter from "@assets/Rear-Counter2_1781716221979.jpg";
import foLightingKeypad from "@assets/remote3_1781716221980.jpg";
import foControl4Tablet from "@assets/remotes_1781716221980.jpg";
import foControl4Remote from "@assets/remotes2_1781716221980.jpg";
import foCrystalSconce from "@assets/sconce_1781716221980.jpg";
import foStarCeilingView from "@assets/stars2_1781716221980.jpg";
import foStepsLeft from "@assets/steps-lft2_1781716221981.jpg";
import foStepsRight from "@assets/steps-RT_1781716221981.jpg";
import ntCabinets from "@assets/cabinets_1781713824645.jpg";
import ntDetailWall from "@assets/Detal-wall-1_1781713824646.jpg";
import ntDoor1 from "@assets/door-1_1781713824646.jpg";
import ntDoor2 from "@assets/door2_1781713824646.jpg";
import ntDoor3 from "@assets/door3_1781713824646.jpg";
import ntDoorBw from "@assets/door-BW_1781713824647.jpg";
import ntLightSwitch2 from "@assets/LightSW_1781713824647.jpg";
import ntTheaterEntry from "@assets/Theater-entry_1781713824647.jpg";
import ntTheaterEntry2 from "@assets/Theater-entry2_1781713824647.jpg";
import ntWallDetails from "@assets/wall-details_1781713824648.jpg";
import ntWallDetails2 from "@assets/wall-details-2_1781713824648.jpg";
// Blade Runner Theater — Vienna, Virginia (2025 CE Pro Silver)
import brScreenLeftPlaying from "@assets/ScreenLFTp.2jpg_1781705806812.jpg";
import brScreenLeftBlank from "@assets/ScreenLFTp_1781706241333.jpg";
import brScreenLeftPlaying2 from "@assets/ScreenLFTp.2jpg_1781706241333.jpg";
import brScreenFrontBlank from "@assets/ScreenBf_1781706241332.jpg";
import brScreenFrontPlaying from "@assets/ScreenBfP_1781706241332.jpg";
import brScreenFrontFull from "@assets/ScreenPF_1781706241333.jpg";
import brScreenRightBlank from "@assets/RtscreenB2_1781706241331.jpg";
import brScreenRightPlaying from "@assets/RtscreenB2p_1781706241331.jpg";
import brScreenSideBlank from "@assets/screenRTFB_1781706241334.jpg";
import brScreenSidePlaying from "@assets/screenRTFBp_1781706241334.jpg";
import brScreenFrontRight from "@assets/ScreenFRP_1781706241333.jpg";
import brDoorWall from "@assets/door-wall_1781706241330.jpg";
import brTheaterDoor from "@assets/theater-door_1781706241335.jpg";
import brSideWall from "@assets/side-wall_1781706241335.jpg";
import brSidewallLeft from "@assets/sidewall-LFT_1781706241335.jpg";
import brSidewallLeftPurple from "@assets/sidewallP1_1781706241335.jpg";
import brSeating4 from "@assets/seating-4_1781706241334.jpg";
import brSeatingOverview from "@assets/SeatingP2_1781706241334.jpg";
import brSeatingFront from "@assets/seatsf3_1781706241335.jpg";
import brTileDetail from "@assets/tile-detail_1781706241336.jpg";
import brTileLeftDetail from "@assets/tileleft2_1781706241336.jpg";
// The Cavalier Theater — Aldie, Virginia (2019 CE Pro Bronze)
import cvSeatingFront from "@assets/DSC_1290_1781717628775.jpg";
import cvSeatingRearBar from "@assets/DSC_1296_1781717612505.jpg";
import cvSeatingRearLeft from "@assets/DSC_1311_1781717628775.jpg";
import cvSeatingRearRight from "@assets/DSC_1314_1781717628775.jpg";
import cvSideViewDoor from "@assets/DSC_1328_1781717612506.jpg";
import cvBarnDoorInside from "@assets/DSC_1333_1781717655474.jpg";
import cvBarnDoorPurple from "@assets/DSC_1334_1781717628775.jpg";
import cvWideRearBar from "@assets/DSC_1337_1781717612506.jpg";
import cvBarnDoorExterior from "@assets/DSC_1341_1781717655475.jpg";
import cvBarnDoorThrough from "@assets/DSC_1344_1781717655475.jpg";
import cvBarnDoorOpen from "@assets/DSC_1347_1781717655475.jpg";
import cvSeatingPurpleSide from "@assets/DSC_1350_1781717628776.jpg";
import cvAcousticPanelDetail from "@assets/DSC_1362_1781717612506.jpg";
import cvScreenUVA from "@assets/front_1781717612506.jpg";
import cvScreenFootball from "@assets/screen1_1781717612507.jpg";
import cvCoverBarFootball from "@assets/screen1_1781717808705.jpg";
import cvScreenIronMan from "@assets/screen-2_1781717612507.jpg";
// Golden Touch Home Theater — McLean, Virginia (2023)
import gtCover from "@assets/LM45_1781719864541.jpg";
import gtBwSideBlackPanther from "@assets/LM1_1781720087189.jpg";
import gtBlueLedEmpty from "@assets/LM2_1781720087189.jpg";
import gtCandyCabinetBlue from "@assets/LM3_1781720087189.jpg";
import gtScreenEverest from "@assets/LM45_1781720087190.jpg";
import gtScreenFrontEmpty from "@assets/Screen_Front_1781720087190.jpg";
import gtScreenLftSeats from "@assets/Screen_LFT_3_1781720087190.jpg";
import gtScreenLft4 from "@assets/Screen_LFT4_1781720087190.jpg";
import gtMarbleBarSide from "@assets/Screen_LT2_1781720087190.jpg";
import gtAvRackFootball from "@assets/screen-AV2_1781720087191.jpg";
import gtScreen300 from "@assets/Screen-LFT-4_1781720087191.jpg";
import gtScreenMadMax from "@assets/Screen-LT3_1781720087191.jpg";
import gtSideViewBw from "@assets/Side_view_2_1781720087191.jpg";
import gtWholeRt from "@assets/whole_rt_1781720087192.jpg";
import gtWholeTheater from "@assets/Whole-Theater_1781720087192.jpg";
import gtWholeInterstellar from "@assets/Whole-Theater2_1781720087192.jpg";
import gtWholeInterstellar2 from "@assets/Whole-Theater3_1781720087192.jpg";
import gtSeatingBwRear from "@assets/FM2_1781720165748.jpg";
import gtSeatingBlueRear from "@assets/FM3_1781720165749.jpg";
import gtLeftRearBw from "@assets/LF2_1781720165749.jpg";
import gtLeftRearBlue from "@assets/LF3_1781720165749.jpg";
import gtLeftRearBlue2 from "@assets/LF4_1781720165749.jpg";
import gtRightFrontBw from "@assets/R2F_1781720165749.jpg";
import gtRightFrontBlue from "@assets/RF_1781720165750.jpg";
import gtSconceDetail from "@assets/sconce2_1781720165750.jpg";
import gtSeatViewWide from "@assets/seat_view_1781720165750.jpg";
import gtSideBlankScreen from "@assets/side_1781720165750.jpg";
import ngCover from "@assets/screen--frontPO_1781721515887.jpg";
import ngBarView from "@assets/ScreenFB5_1781721422957.jpg";
import ngScreenFront from "@assets/screen--front_1781722611127.jpg";
import ngScreenFrontPO from "@assets/screen--frontPO_1781722611128.jpg";
import ngScreenMidLft from "@assets/screen-midlft_1781722611128.jpg";
import ngScreenMidLftPO from "@assets/screen-midlftPO_1781722611128.jpg";
import ngScreenRT2 from "@assets/screen-RT2_1781722611128.jpg";
import ngScreenRT2PO from "@assets/screen-RT2PO_1781722611129.jpg";
import ngScreenRtBlue2 from "@assets/screenrtblue2_1781722611129.jpg";
import ngSeating3 from "@assets/seating3_1781722611129.jpg";
import ngSeatingCenter2 from "@assets/seating-center2_1781722611129.jpg";
import ngSeatingLft from "@assets/seating-lft_1781722611129.jpg";
import ngSeatingLft7 from "@assets/seating-lft7_1781722611130.jpg";
import ngSeatsBack2 from "@assets/seats-back2_1781722611130.jpg";
import ngSteps3 from "@assets/steps3_1781722611130.jpg";
import ngWallRT from "@assets/wall-RT_1781722611130.jpg";
import ngWallRT4 from "@assets/wall-RT4_1781722611131.jpg";
import ngRTwall2 from "@assets/RTwall2_1781722645017.jpg";
import ngScreenFrontA from "@assets/screen_front_1781722645018.jpg";
import ngScreenFrontB from "@assets/screen_front__1781722645018.jpg";
import ngScreen7 from "@assets/screen7_1781722645018.jpg";
import ngScreen7PO from "@assets/screen7PO_1781722645018.jpg";
import ngScreenFB2 from "@assets/ScreenFB2_1781722645019.jpg";
import ngScreenFB2B from "@assets/ScreenFB2B_1781722645019.jpg";
import ngScreenFB3 from "@assets/ScreenFB3_1781722645019.jpg";
import ngBackwall from "@assets/backwall_1781722873072.jpg";
import ngBackWall from "@assets/back-wall_1781722873072.jpg";
import ngCounter2 from "@assets/counter2_1781722873072.jpg";
import ngCounter4 from "@assets/counter4_1781722873072.jpg";
import ngLFTwall2 from "@assets/LFTwall2_1781722873074.jpg";
import ngLFTwall3 from "@assets/LFTwall3_1781722873074.jpg";
import ngProjector from "@assets/projector_1781722873075.jpg";
import ngProjector2 from "@assets/projector2_1781722873075.jpg";
import ngProjectorBlk from "@assets/projector-blk_1781722873075.jpg";
import ngRack from "@assets/rack_1781722873075.jpg";
import ngRack3 from "@assets/rack3_1781722873076.jpg";
import ngGym1 from "@assets/gym1_1781722873073.jpg";
import ngGym2 from "@assets/gym2_1781722873073.jpg";
import ngGym3 from "@assets/gym3_1781722873073.jpg";
import ngGym4 from "@assets/gym4_1781722873074.jpg";
import ngSaunaDetail from "@assets/DSC00044_77_1781722873073.jpg";
import gtBarControl4 from "@assets/Bar-1_1781720321602.jpg";
import gtBarStools from "@assets/Bar-2_1781720321602.jpg";
import gtBarLength from "@assets/Bar-3_1781720321602.jpg";
import gtDoorEntry from "@assets/Door-1_1781720321602.jpg";
import gtSconceClose from "@assets/DSC_2327_10_10_1781720321602.jpg";
import gtSeatsSconces from "@assets/DSC_2332_12_12_1781720321603.jpg";
import gtAvRackClose from "@assets/DSC_2367_22_23_1781720321603.jpg";
import gtSconceWall from "@assets/DSC_2386_28_28_1781720321603.jpg";
import gtSconceScreen from "@assets/DSC_2418_40_40_1781720321603.jpg";
import gtCandyDetail from "@assets/DSC_2419_41_41_1781720321603.jpg";
import gtStarPanelFront from "@assets/Starpanel_1781720321604.jpg";
import gtStarCeilingUp from "@assets/Star-panel2_1781720321604.jpg";
import gtStarPanelSeats from "@assets/Star-pannel_1781720321604.jpg";
import gtStepLighting from "@assets/Steps_1781720321604.jpg";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

type GalleryItem = { src: string; label: string } | { gradient: string; label: string };

type Project = {
  title: string;
  type: string;
  tags?: string[];
  location: string;
  year: string;
  size: string;
  credit?: string;
  gradient: string;
  featured: boolean;
  image?: string;
  gallery: GalleryItem[];
};

const filters = ["All", "Dedicated Theaters", "Media Room", "TV Walls", "Themed Theaters", "Commercial", "Star Ceiling", "Design Elements"];

const projects: Project[] = [
  {
    title: "The Next Galaxy Theater",
    type: "Dedicated Theaters",
    location: "Aldie, VA",
    year: "2026",
    size: "Willowsford Modern Theater — Blue LED Cove, Star Ceiling & Velvet Screen Wall",
    credit: "Custom Works — AV Design & Install",
    gradient: "from-indigo-950 via-slate-900 to-indigo-950",
    featured: false,
    image: ngCover,
    gallery: [
      { src: ngCover,          label: "Willowsford Modern Theater Aldie VA — Screen Wall Mountain Climber Film Blue LED Cove Star Ceiling Velvet Curtains" },
      { src: ngScreenFrontPO,  label: "Willowsford Modern Theater Aldie VA — Front Screen Wall Mountain Climber Projection Blue LED Cove Acoustic Panels" },
      { src: ngScreenFront,    label: "Willowsford Modern Theater Aldie VA — Front Screen Wall Blank Blue LED Cove Star Ceiling Clean Modern Design" },
      { src: ngScreenMidLftPO, label: "Willowsford Modern Theater Aldie VA — Mid-Left View Avatar Film Playing Leather Seats Blue LED Star Ceiling" },
      { src: ngScreenMidLft,   label: "Willowsford Modern Theater Aldie VA — Mid-Left Angle Blank Screen Leather Recliners Blue LED Cove Star Ceiling" },
      { src: ngScreenRT2PO,    label: "Willowsford Modern Theater Aldie VA — Right Angle Star Wars Lightsaber Film Leather Seating Blue Purple LED Cove" },
      { src: ngScreenRT2,      label: "Willowsford Modern Theater Aldie VA — Right Angle Blank Screen Leather Seat Rows Blue LED Cove Star Ceiling" },
      { src: ngScreenRtBlue2,  label: "Willowsford Modern Theater Aldie VA — Right Side View Screen Wall Blue LED Cove Lighting Leather Seats Carpet" },
      { src: ngWallRT,         label: "Willowsford Modern Theater Aldie VA — Full Room Right Acoustic Wall Panels Blue LED Cove Ceiling Leather Seating" },
      { src: ngWallRT4,        label: "Willowsford Modern Theater Aldie VA — Left Acoustic Panel Wall Close-Up Blue LED Star Ceiling Leather Rows" },
      { src: ngSeatingLft,     label: "Willowsford Modern Theater Aldie VA — Left Side Seating Rows LED Step Lighting Back Bar Projector Star Ceiling" },
      { src: ngSeatingLft7,    label: "Willowsford Modern Theater Aldie VA — Left Seating Entry Door Marble Bar LED Step Lighting Blue Cove" },
      { src: ngSeatingCenter2, label: "Willowsford Modern Theater Aldie VA — Center Rear View Full Leather Seating LED Columns Back Bar Star Ceiling" },
      { src: ngSeating3,       label: "Willowsford Modern Theater Aldie VA — Rear Full Seating Arrangement Back Wall LED Vertical Strips Bar Counter" },
      { src: ngSeatsBack2,     label: "Willowsford Modern Theater Aldie VA — Back Row Leather Seats Projector Housing LED Vertical Strips Slatted Wood Bar" },
      { src: ngSteps3,         label: "Willowsford Modern Theater Aldie VA — Entry Hall Steps Blue LED Step Lighting Entry Door Star Ceiling" },
      { src: ngBarView,        label: "Willowsford Modern Theater Aldie VA — Marble Bar View Blue LED Cove Star Ceiling Screen Velvet Curtains" },
      { src: ngScreen7PO,      label: "Willowsford Modern Theater Aldie VA — Gravity Astronaut Film Centered Screen View Blue LED Star Ceiling Seat Footrests" },
      { src: ngScreen7,        label: "Willowsford Modern Theater Aldie VA — Centered Screen Wall Blank Blue LED Cove Star Ceiling Seat Row Footrests" },
      { src: ngScreenFrontA,   label: "Willowsford Modern Theater Aldie VA — Screen Wall Left Angle Blank Blue LED Cove Star Ceiling Acoustic Panels" },
      { src: ngScreenFrontB,   label: "Willowsford Modern Theater Aldie VA — Screen Wall Right Angle Blank Blue LED Cove Velvet Curtains Star Ceiling" },
      { src: ngRTwall2,        label: "Willowsford Modern Theater Aldie VA — Full Room Seating Both Sides Blue LED Cove Star Ceiling Marble Bar Projector" },
      { src: ngScreenFB2,      label: "Willowsford Modern Theater Aldie VA — Marble Bar Foreground Screen Background Blue LED Cove Star Ceiling Remote Control" },
      { src: ngScreenFB3,      label: "Willowsford Modern Theater Aldie VA — Marble Bar Foreground Velvet Curtain Screen Wall Purple Blue LED Cove Star Ceiling" },
      { src: ngScreenFB2B,     label: "Willowsford Modern Theater Aldie VA — Marble Bar Monochrome View Screen Star Ceiling Acoustic Panels Elegant Design" },
      { src: ngProjector,      label: "Willowsford Modern Theater Aldie VA — Projector Housing Above Bar LED Soundwave Pattern Slatted Wood Blue LED Strips" },
      { src: ngProjector2,     label: "Willowsford Modern Theater Aldie VA — Projector Wall Wide View Back Row Seats Marble Bar LED Soundwave Star Ceiling" },
      { src: ngProjectorBlk,   label: "Willowsford Modern Theater Aldie VA — Projector Bar Entry Door Monochrome Marble Bar Seating Rows LED Strips Star Ceiling" },
      { src: ngBackwall,       label: "Willowsford Modern Theater Aldie VA — Back Wall Close-Up Projector Housing Marble Bar LED Soundwave Slatted Wood Seats" },
      { src: ngBackWall,       label: "Willowsford Modern Theater Aldie VA — Back Wall Wide Entry Door LED Strips Marble Bar Seating Rows Blue Step Lighting" },
      { src: ngCounter2,       label: "Willowsford Modern Theater Aldie VA — Marble Counter Wide View Screen Background Slatted Back Wall LED Strips Star Ceiling" },
      { src: ngCounter4,       label: "Willowsford Modern Theater Aldie VA — Marble Counter Right End Close-Up LED Strips Slatted Wood Back Wall Star Ceiling" },
      { src: ngLFTwall2,       label: "Willowsford Modern Theater Aldie VA — Left Acoustic Wall Seating Rows Back Bar LED Strips Star Ceiling Blue Cove" },
      { src: ngLFTwall3,       label: "Willowsford Modern Theater Aldie VA — Left Wall Acoustic Panels LED Corner Strip Step Lighting Entry Door Star Ceiling" },
      { src: ngRack,           label: "Willowsford Modern Theater Aldie VA — AV Equipment Rack Amplifiers Processor Torus Power Conditioning Blu-ray Utility Room" },
      { src: ngRack3,          label: "Willowsford Modern Theater Aldie VA — AV Rack Wide View Equipment Room Amplifiers Processor Home Theater Tech Install" },
      { src: ngGym1,           label: "Willowsford Modern Theater Aldie VA — Home Gym Clearlight Infrared Sauna Peloton Bike Wood Panel Wall Track Lighting" },
      { src: ngGym2,           label: "Willowsford Modern Theater Aldie VA — Home Gym Infrared Sauna Glass Door Cedar Wood Panel Wall Open Floor Plan" },
      { src: ngGym3,           label: "Willowsford Modern Theater Aldie VA — Infrared Sauna Built-In Cabinets Cedar Wood Slat Wall Home Wellness Room" },
      { src: ngGym4,           label: "Willowsford Modern Theater Aldie VA — Infrared Sauna Close-Up Glass Door Cedar Interior Wood Panel Accent Wall" },
      { src: ngSaunaDetail,    label: "Willowsford Modern Theater Aldie VA — Infrared Sauna Entry Detail Warm Cedar Wood Slat Panels Track Lighting Wellness Suite" },
    ],
  },
  {
    title: "Blade Runner Theater",
    type: "Dedicated Theaters",
    tags: ["Dedicated Theaters", "Themed Theaters", "Star Ceiling"],
    location: "Vienna, Virginia",
    year: "2025",
    size: "CE Pro Home of the Year — Silver Winner",
    credit: "Custom Works — AV Design & Install",
    gradient: "from-violet-950 via-slate-900 to-indigo-950",
    featured: true,
    image: portfolioImg1,
    gallery: [
      { src: brScreenLeftPlaying, label: "Blade Runner Theater Vienna — Screen Wall Left View Playing" },
      { src: brScreenFrontPlaying, label: "Blade Runner Theater Vienna — Front View Full Seating Playing" },
      { src: brScreenRightPlaying, label: "Blade Runner Theater Vienna — Screen Wall Right View Playing" },
      { src: brScreenSidePlaying, label: "Blade Runner Theater Vienna — Side Angle Screen View Playing" },
      { src: brScreenLeftBlank, label: "Blade Runner Theater Vienna — Screen Wall Left View" },
      { src: brScreenLeftPlaying2, label: "Blade Runner Theater Vienna — Left Side Screen with Movie" },
      { src: brScreenFrontBlank, label: "Blade Runner Theater Vienna — Front View Full Seating" },
      { src: brScreenFrontFull, label: "Blade Runner Theater Vienna — Full Room Front View" },
      { src: brScreenRightBlank, label: "Blade Runner Theater Vienna — Screen Wall Right View" },
      { src: brScreenSideBlank, label: "Blade Runner Theater Vienna — Side Angle Screen" },
      { src: brScreenFrontRight, label: "Blade Runner Theater Vienna — Screen Front Right Angle" },
      { src: brSeatingFront, label: "Blade Runner Theater Vienna — Luxury Leather Seating Front Row" },
      { src: brSeating4, label: "Blade Runner Theater Vienna — Theater Seating and LED Lighting" },
      { src: brSeatingOverview, label: "Blade Runner Theater Vienna — Full Seating Overview" },
      { src: brDoorWall, label: "Blade Runner Theater Vienna — Door Wall LED Lighting Design" },
      { src: brTheaterDoor, label: "Blade Runner Theater Vienna — Custom Theater Entry Door" },
      { src: brSideWall, label: "Blade Runner Theater Vienna — Side Wall Acoustic Panels" },
      { src: brSidewallLeft, label: "Blade Runner Theater Vienna — Left Side Wall LED Detail" },
      { src: brSidewallLeftPurple, label: "Blade Runner Theater Vienna — Left Side Wall Purple Lighting" },
      { src: brTileDetail, label: "Blade Runner Theater Vienna — Custom Acoustic Tile Detail" },
      { src: brTileLeftDetail, label: "Blade Runner Theater Vienna — Left Wall Acoustic Tile Design" },
    ],
  },
  {
    title: "The Nautilus Theater",
    type: "Dedicated Theaters",
    tags: ["Themed Theaters", "Star Ceiling"],
    location: "Warrenton, VA",
    year: "2024",
    size: "CE Pro Home of the Year — Gold Winner",
    credit: "Custom Works — AV Design & Install",
    gradient: "from-slate-900 via-zinc-800 to-gray-900",
    featured: true,
    image: ntScreenLeftAvatar,
    gallery: [
      { src: ntScreenFrontBlank, label: "Nautilus Theater Warrenton VA — Screen Wall Front View" },
      { src: ntScreenLeftAvatar, label: "Nautilus Theater Warrenton VA — Left View Screen Playing Avatar" },
      { src: ntScreenFrontPlaying, label: "Nautilus Theater Warrenton VA — Screen Playing Underwater Film" },
      { src: ntScreenFrontPlaying2, label: "Nautilus Theater Warrenton VA — Screen Front View Playing" },
      { src: ntScreenWallCloseup, label: "Nautilus Theater Warrenton VA — Screen Wall Close-Up Purple Lighting" },
      { src: ntScreenRightAngle, label: "Nautilus Theater Warrenton VA — Screen Wall Right Angle Full Room" },
      { src: ntScreen300Film, label: "Nautilus Theater Warrenton VA — Screen Playing 300 Film" },
      { src: ntScreenLeftSeating, label: "Nautilus Theater Warrenton VA — Left View Seating and Screen" },
      { src: ntScreenLeftDune, label: "Nautilus Theater Warrenton VA — Left View Screen Playing Dune" },
      { src: ntScreenRightSeating, label: "Nautilus Theater Warrenton VA — Right View Seating and Screen" },
      { src: ntScreenMandalorian, label: "Nautilus Theater Warrenton VA — Right View Screen Playing Mandalorian" },
      { src: ntSeatingFront, label: "Nautilus Theater Warrenton VA — Luxury Leather Seating Rear View" },
      { src: ntSeatingLeftPurple, label: "Nautilus Theater Warrenton VA — Seating Left Angle Purple Lighting" },
      { src: ntSeatingRightHatch, label: "Nautilus Theater Warrenton VA — Seating Right Angle Submarine Hatch Door" },
      { src: ntProjectorHousing, label: "Nautilus Theater Warrenton VA — Custom Submarine Projector Housing" },
      { src: ntLightSwitch, label: "Nautilus Theater Warrenton VA — Submarine Porthole Light Switch Detail" },
      { src: ntBwFullRoom, label: "Nautilus Theater Warrenton VA — Black and White Full Room View" },
      { src: ntBwLeftView, label: "Nautilus Theater Warrenton VA — Black and White Left View" },
      { src: ntBwRightView, label: "Nautilus Theater Warrenton VA — Black and White Right Angle View" },
      { src: ntBwSeatingHatch, label: "Nautilus Theater Warrenton VA — Black and White Seating and Hatch Door" },
      { src: ntTheaterEntry, label: "Nautilus Theater Warrenton VA — Submarine Hatch Entry Door From Outside" },
      { src: ntTheaterEntry2, label: "Nautilus Theater Warrenton VA — Entry Hatch Door Close-Up With Porthole" },
      { src: ntDoor1, label: "Nautilus Theater Warrenton VA — Interior Submarine Hatch Door and Screen Wall" },
      { src: ntDoor2, label: "Nautilus Theater Warrenton VA — Interior Hatch Door With Nautical Decor" },
      { src: ntDoor3, label: "Nautilus Theater Warrenton VA — Hatch Door Porthole and Wheel Close-Up" },
      { src: ntDoorBw, label: "Nautilus Theater Warrenton VA — Black and White Hatch Door Detail" },
      { src: ntWallDetails, label: "Nautilus Theater Warrenton VA — Side Wall Detail With Seating and Hatch" },
      { src: ntWallDetails2, label: "Nautilus Theater Warrenton VA — Side Wall Rivet Detail and Seating" },
      { src: ntDetailWall, label: "Nautilus Theater Warrenton VA — Wall Sconce Lighting and Rivet Panel Detail" },
      { src: ntCabinets, label: "Nautilus Theater Warrenton VA — Built-In Cabinet and Side Wall Detail" },
      { src: ntLightSwitch2, label: "Nautilus Theater Warrenton VA — Submarine Gauge and Toggle Switch Detail" },
    ],
  },
  {
    title: "Modern Fusion Home Theater",
    type: "Dedicated Theaters",
    location: "Nokesville, VA",
    year: "2018",
    size: "EH Publishing Home of the Year — Bronze Winner",
    credit: "Custom Works — AV Design & Install",
    gradient: "from-gray-900 via-slate-800 to-zinc-900",
    featured: true,
    tags: ["Star Ceiling"],
    image: mfhtCover,
    gallery: [
      { src: mfhtCover, label: "Modern Fusion Home Theater Nokesville VA — Side Angle Playing 300 Film Purple Star Ceiling EH Home of the Year Bronze Winner 2018" },
      { src: mfhtFrontAvatar, label: "Modern Fusion Home Theater Nokesville VA — Front View Playing Avatar Twilight Purple Lighting" },
      { src: mfhtFrontPurpleLighting, label: "Modern Fusion Home Theater Nokesville VA — Screen Wall Symmetric View Purple Accent Lighting Star Ceiling" },
      { src: mfhtFrontBlueLighting, label: "Modern Fusion Home Theater Nokesville VA — Screen Wall Symmetric View Blue Accent Lighting Fiber Optic Star Ceiling" },
      { src: mfhtFrontTealBlue, label: "Modern Fusion Home Theater Nokesville VA — Front Screen Wall Teal Blue Immersive Lighting" },
      { src: mfhtFrontLeftPurple, label: "Modern Fusion Home Theater Nokesville VA — Front Left Angle View Purple Violet Ambient Lighting Leather Recliners" },
      { src: mfhtRightLeftPurple, label: "Modern Fusion Home Theater Nokesville VA — Right Side View Tiered Seating Platform Purple Ambient Lighting" },
      { src: mfhtRearLeftBar, label: "Modern Fusion Home Theater Nokesville VA — Rear Left Angle Granite Bar Counter Star Ceiling Star Field" },
      { src: mfhtRearRightWhite, label: "Modern Fusion Home Theater Nokesville VA — Rear Right Angle Tiered Platform White Purple Lighting" },
      { src: mfhtRearRightBlue, label: "Modern Fusion Home Theater Nokesville VA — Rear Right Angle Blue Grey Ambient Lighting Tiered Seating" },
      { src: mfhtSideFrontBlue, label: "Modern Fusion Home Theater Nokesville VA — Side Front View Full Seating Rows Blue Ambient Lighting" },
      { src: mfhtFullSeating, label: "Modern Fusion Home Theater Nokesville VA — Full Seating Rows From Rear Star Ceiling Overhead Projector Visible" },
      { src: mfhtSideAngle300, label: "Modern Fusion Home Theater Nokesville VA — Side Angle Screen Playing 300 Film EH Home of the Year Bronze Winner" },
      { src: mfhtMain, label: "Modern Fusion Home Theater Nokesville VA — Left Side Angle Screen Playing 300 Film EH Bronze Winner 2018" },
      { src: mfhtEquipmentRack, label: "Modern Fusion Home Theater Nokesville VA — AV Equipment Rack Parasound Amplifiers Professional Installation" },
    ],
  },
  {
    title: "The Cavalier Theater",
    type: "Dedicated Theaters",
    location: "Aldie, VA",
    year: "2019",
    size: "CE Pro Best Project Award — Bronze Winner",
    credit: "Custom Works — AV Design & Install",
    gradient: "from-stone-900 via-neutral-800 to-stone-900",
    featured: false,
    image: cvCoverBarFootball,
    gallery: [
      { src: cvSeatingFront, label: "Cavalier Theater Aldie VA — Full Seating View Two Rows Leather Recliners Rustic Beam Ceiling Blue LED Step Lighting" },
      { src: cvScreenUVA, label: "Cavalier Theater Aldie VA — Screen Wall Playing UVA National Champions Basketball Acoustic Panels Wood Frame" },
      { src: cvScreenFootball, label: "Cavalier Theater Aldie VA — Wide Rear Bar View Screen Playing UVA Football Rustic Wood Beam Ceiling Full Seating" },
      { src: cvScreenIronMan, label: "Cavalier Theater Aldie VA — Left Side Angle Screen Playing Iron Man Avengers Acoustic Treatment Wood Frame" },
      { src: cvWideRearBar, label: "Cavalier Theater Aldie VA — Rear Bar Counter View Full Room Barn Door Entry Blue Accent LED Beam Ceiling" },
      { src: cvSeatingRearBar, label: "Cavalier Theater Aldie VA — Rear Bar Counter Leather Recliners Screen Wall Acoustic Panels Rustic Millwork" },
      { src: cvSeatingRearLeft, label: "Cavalier Theater Aldie VA — Rear Left View Barn Door Entry Tiered Seating Rustic Beam Ceiling Blue LED" },
      { src: cvSeatingRearRight, label: "Cavalier Theater Aldie VA — Rear Right View Tiered Leather Seating Acoustic Side Walls Beam Ceiling Projector" },
      { src: cvSideViewDoor, label: "Cavalier Theater Aldie VA — Left Side View Screen Barn Door Entry Leather Recliners Sconce Lighting Blue Accent" },
      { src: cvBarnDoorPurple, label: "Cavalier Theater Aldie VA — Barn Door Entry Purple LED Step Lighting Custom Millwork Tiered Seating" },
      { src: cvBarnDoorInside, label: "Cavalier Theater Aldie VA — Interior Barn Door Purple LED Aisle Steps Side Niche Sconce Custom Woodwork" },
      { src: cvSeatingPurpleSide, label: "Cavalier Theater Aldie VA — Side Angle Seating Purple LED Under-Row Lighting Rustic Walnut Post Beam Detail" },
      { src: cvAcousticPanelDetail, label: "Cavalier Theater Aldie VA — Acoustic Panel Wood Frame Detail Screen Edge Blue LED Accent Barn Door" },
      { src: cvBarnDoorExterior, label: "Cavalier Theater Aldie VA — Rustic Sliding Barn Door Entry Blue Accent Wall Wainscoting Hardwood Floor" },
      { src: cvBarnDoorThrough, label: "Cavalier Theater Aldie VA — Through Barn Door Handle Detail Screen Wall Visible Acoustic Panels Custom Entry" },
      { src: cvBarnDoorOpen, label: "Cavalier Theater Aldie VA — Open Barn Door From Game Room Foosball Table Purple LED Theater Visible" },
    ],
  },
  {
    title: "Family Oasis Theater",
    type: "Dedicated Theaters",
    location: "Great Falls, VA",
    year: "2025",
    size: "CE Pro Home of the Year — Silver Winner",
    credit: "Custom Works — AV Design & Install",
    gradient: "from-gray-900 via-neutral-800 to-gray-900",
    featured: false,
    tags: ["Star Ceiling"],
    image: foScreenLeftPlaying,
    gallery: [
      { src: foSeatingLeft, label: "Family Oasis Theater Great Falls VA — Full Seating View Chaise Lounger Leather Recliners Tiered Platform Blue Star Ceiling" },
      { src: foScreenLeft2a, label: "Family Oasis Theater Great Falls VA — Left Side View Full Seating Rows Blank Screen Blue Fiber Optic Star Ceiling" },
      { src: foScreenLeft2b, label: "Family Oasis Theater Great Falls VA — Left Side Angle Seating Rows Gold Accent Pillars Blue Star Ceiling Lighting" },
      { src: foScreenLeftStarTrek, label: "Family Oasis Theater Great Falls VA — Left Side Angle Screen Playing Star Trek Into Darkness Blue Star Ceiling" },
      { src: foScreenLeft2Playing, label: "Family Oasis Theater Great Falls VA — Left Angle Screen Playing Star Trek Into Darkness Leather Recliners" },
      { src: foScreenLeft1, label: "Family Oasis Theater Great Falls VA — Left Side Close View Blank Screen Gold Accent Pillar Chaise Lounger" },
      { src: foScreenCenter3, label: "Family Oasis Theater Great Falls VA — Center Front View All Seating Rows Blue Star Ceiling Sconce Lighting" },
      { src: foScreenCenter1, label: "Family Oasis Theater Great Falls VA — Symmetric Front View Blank Screen Blue Star Ceiling Leather Seats" },
      { src: foScreenCenter1Wolverine, label: "Family Oasis Theater Great Falls VA — Front View Screen Playing X-Men Wolverine Blue Star Ceiling" },
      { src: foScreenCenter2, label: "Family Oasis Theater Great Falls VA — Front View Screen Wall Ottoman Seating Blue Star Ceiling" },
      { src: foScreenMidLeft, label: "Family Oasis Theater Great Falls VA — Mid Left Angle Seating Rows Gold Accent Pillars Blue Star Ceiling" },
      { src: foScreenMidRight, label: "Family Oasis Theater Great Falls VA — Mid Right Angle Seating Rows Blank Screen Blue Star Ceiling" },
      { src: foScreenMidRightPlaying, label: "Family Oasis Theater Great Falls VA — Mid Right Angle Screen Playing Sin City Film Noir Blue Star Ceiling" },
      { src: foScreenRight, label: "Family Oasis Theater Great Falls VA — Right Side View Full Seating Rows Blue Fiber Optic Star Ceiling" },
      { src: foSeatingRight, label: "Family Oasis Theater Great Falls VA — Rear Right View Chaise Lounger Tiered Seating Platform Star Ceiling" },
      { src: foScreenFront1, label: "Family Oasis Theater Great Falls VA — Screen Wall Close-Up Blank Screen Gold Accent Pillar Sconce Detail" },
      { src: foScreenFront2, label: "Family Oasis Theater Great Falls VA — Screen Wall Detail Blank Screen Custom Millwork Gold Accent" },
      { src: foScreenFrontSpiderman, label: "Family Oasis Theater Great Falls VA — Screen Wall Playing Spider-Man Gold Accent Pillar Luxury Finish" },
      { src: foStarCeilingView, label: "Family Oasis Theater Great Falls VA — Rear View Fiber Optic Star Ceiling Projector Overhead Full Seating Rows" },
      { src: foStepsLeft, label: "Family Oasis Theater Great Falls VA — Left Aisle Tiered Steps LED Step Lighting Crystal Sconces Blue Star Ceiling" },
      { src: foStepsRight, label: "Family Oasis Theater Great Falls VA — Right Aisle Tiered Steps LED Step Lighting Gold Accent Pillar Star Ceiling" },
      { src: foColumnsRight, label: "Family Oasis Theater Great Falls VA — Right Side Columns Gold Accent Sconces Control Counter Star Ceiling" },
      { src: foDoorRearWall, label: "Family Oasis Theater Great Falls VA — Rear Entry Door Gold Ring Pull Handle Seating Rows Star Ceiling" },
      { src: foDoorSwitch, label: "Family Oasis Theater Great Falls VA — Entry Door Gold Ring Handle Lutron Lighting Keypad Smart Home Control" },
      { src: foRearCounter, label: "Family Oasis Theater Great Falls VA — Rear Credenza Cabinet Gold Hardware Custom Millwork Star Ceiling" },
      { src: foColumnSconce, label: "Family Oasis Theater Great Falls VA — Gold Accent Pillar Crystal Sconce Detail Custom Millwork Close-Up" },
      { src: foCrystalSconce, label: "Family Oasis Theater Great Falls VA — Crystal Gold Sconce Light Fixture Detail Luxury Home Theater Design" },
      { src: foClosetOpen, label: "Family Oasis Theater Great Falls VA — Hidden AV Closet Door Open Behind Acoustic Panel Wall" },
      { src: foClosetClosed, label: "Family Oasis Theater Great Falls VA — Hidden AV Closet Door Closed Seamless Acoustic Panel Integration" },
      { src: foRackRoom, label: "Family Oasis Theater Great Falls VA — AV Equipment Rack Visible Through Hidden Closet Door" },
      { src: foRackAV, label: "Family Oasis Theater Great Falls VA — Full AV Rack Torus Power Conditioner JL Audio AudioControl Amplifiers" },
      { src: foLightingKeypad, label: "Family Oasis Theater Great Falls VA — Lutron Lighting Keypad Smart Thermostat Automated Control System" },
      { src: foControl4Tablet, label: "Family Oasis Theater Great Falls VA — Control4 Touchscreen Tablet AV Control System Granite Counter" },
      { src: foControl4Remote, label: "Family Oasis Theater Great Falls VA — Control4 Touchscreen and Universal Remote Smart Home Automation" },
    ],
  },
  {
    title: "Chevy Chase Manor",
    type: "Media Room",
    location: "Chevy Chase, MD",
    year: "2023",
    size: "8-Seat Luxury Screening Room",
    gradient: "from-slate-900 via-amber-900 to-slate-900",
    featured: false,
    gallery: [
      { gradient: "from-slate-900 via-amber-900 to-slate-900", label: "Main Room" },
      { gradient: "from-amber-900 via-slate-900 to-amber-950", label: "Seating" },
      { gradient: "from-slate-900 via-amber-950 to-slate-900", label: "Screen Detail" },
    ],
  },
  {
    title: "Golden Touch Home Theater",
    type: "Dedicated Theaters",
    tags: ["Star Ceiling"],
    location: "McLean, VA",
    year: "2023",
    size: "Dark Elegance — Gold Trim Millwork & Fiber Optic Star Ceiling",
    credit: "Custom Works — AV Design & Install",
    gradient: "from-yellow-950 via-stone-900 to-yellow-950",
    featured: false,
    image: gtCover,
    gallery: [
      { src: gtCover,               label: "Golden Touch Home Theater McLean VA — Side Angle Everest On Screen Gold Trim Millwork Fiber Optic Star Ceiling Candy Cabinet" },
      { src: gtWholeInterstellar,   label: "Golden Touch Home Theater McLean VA — Wide Angle Interstellar On Screen Blue LED Cove Star Ceiling AV Rack Door Open Gold Trim" },
      { src: gtWholeInterstellar2,  label: "Golden Touch Home Theater McLean VA — Full Room View Interstellar Playing Blue LED Star Ceiling Leather Seating Gold Accent Millwork" },
      { src: gtWholeTheater,        label: "Golden Touch Home Theater McLean VA — Whole Theater Overview AV Rack Candy Cabinet Blank Screen Blue LED Star Ceiling" },
      { src: gtWholeRt,             label: "Golden Touch Home Theater McLean VA — Wide Angle Right Side Blue LED Cove Leather Recliners Candy Cabinet Gold Trim Panels" },
      { src: gtScreen300,           label: "Golden Touch Home Theater McLean VA — 300 Spartans On Screen Leather Seating Blue LED Star Ceiling Gold Trim Acoustic Panels" },
      { src: gtScreenMadMax,        label: "Golden Touch Home Theater McLean VA — Mad Max Fury Road On Screen Marble Counter Bar Leather Seats Blue LED Star Ceiling Gold Trim" },
      { src: gtScreenEverest,       label: "Golden Touch Home Theater McLean VA — Everest Film On Screen Candy Cabinet Marble Top Blue LED Fiber Optic Ceiling Gold Millwork" },
      { src: gtAvRackFootball,      label: "Golden Touch Home Theater McLean VA — AV Equipment Rack Football Game On Screen Candy Cabinet Blue LED Star Ceiling Gold Trim" },
      { src: gtMarbleBarSide,       label: "Golden Touch Home Theater McLean VA — Marble Counter Bar Side View Blank Screen Blue LED Cove Gold Trim Leather Seats" },
      { src: gtScreenFrontEmpty,    label: "Golden Touch Home Theater McLean VA — Front View Blank Screen Blue LED Star Ceiling Candy Cabinet Crystal Wall Sconce Gold Trim" },
      { src: gtScreenLftSeats,      label: "Golden Touch Home Theater McLean VA — Left Angle Blank Screen Leather Seat Row Blue LED Star Ceiling Gold Trim Acoustic Panels" },
      { src: gtScreenLft4,          label: "Golden Touch Home Theater McLean VA — Left Perspective Blank Screen Blue LED Cove Leather Recliners Gold Accent Millwork" },
      { src: gtCandyCabinetBlue,    label: "Golden Touch Home Theater McLean VA — Candy Cabinet Colorful Drawer Labels Marble Top Blank Screen Blue LED Star Ceiling Gold Trim" },
      { src: gtBlueLedEmpty,        label: "Golden Touch Home Theater McLean VA — Blank Screen Blue LED Cove Lighting Star Ceiling Gold Trim Marble Counter Leather Seats" },
      { src: gtBwSideBlackPanther,  label: "Golden Touch Home Theater McLean VA — Black White Side Angle Black Panther On Screen Marble Counter Star Ceiling Gold Trim Molding" },
      { src: gtSideViewBw,          label: "Golden Touch Home Theater McLean VA — Black White Side View Multiple Leather Seat Rows Blank Screen Crystal Sconces Star Ceiling" },
      { src: gtSideBlankScreen,     label: "Golden Touch Home Theater McLean VA — Side View Blank Screen Blue LED Cove Star Ceiling Gold Trim Crystal Sconces Multiple Seat Rows" },
      { src: gtSeatingBlueRear,     label: "Golden Touch Home Theater McLean VA — Rear View Two Rows Leather Seats Blue LED Star Ceiling Gold Trim Projector Crystal Sconce" },
      { src: gtLeftRearBlue,        label: "Golden Touch Home Theater McLean VA — Left Rear Angle Leather Seats Blue LED Star Ceiling Gold Trim Crystal Sconce Door Acoustic Panels" },
      { src: gtLeftRearBlue2,       label: "Golden Touch Home Theater McLean VA — Left Perspective Blue LED Cove Star Ceiling Gold Trim Leather Recliners Projector Door" },
      { src: gtRightFrontBlue,      label: "Golden Touch Home Theater McLean VA — Right To Front Angle Blue LED Star Ceiling Gold Trim Crystal Sconces Leather Seats Marble Bar" },
      { src: gtSeatViewWide,        label: "Golden Touch Home Theater McLean VA — Wide Angle Rear View Blue LED Star Ceiling Gold Trim Tiered Leather Seating Step Lighting" },
      { src: gtSconceDetail,        label: "Golden Touch Home Theater McLean VA — Crystal Wall Sconce Detail Gold Trim Acoustic Panels Blue LED Star Ceiling Leather Seats" },
      { src: gtRightFrontBw,        label: "Golden Touch Home Theater McLean VA — Black White Right Angle Crystal Sconces Leather Seats Star Ceiling Marble Counter" },
      { src: gtLeftRearBw,          label: "Golden Touch Home Theater McLean VA — Black White Left Rear View Multiple Seat Rows Star Ceiling Door Back Wall Acoustic Panels" },
      { src: gtSeatingBwRear,       label: "Golden Touch Home Theater McLean VA — Black White Rear View Two Rows Leather Seats Star Ceiling Projector Crystal Sconce Wainscoting" },
      { src: gtStarCeilingUp,       label: "Golden Touch Home Theater McLean VA — Fiber Optic Star Ceiling Close-Up Blue LED Cove Shooting Stars Projector Constellation Pattern" },
      { src: gtStarPanelFront,      label: "Golden Touch Home Theater McLean VA — Star Ceiling Overhead Rear View Blue LED Cove Projector Crystal Sconce Gold Trim Leather Seats" },
      { src: gtStarPanelSeats,      label: "Golden Touch Home Theater McLean VA — Star Ceiling Rear Perspective Blue LED Leather Seats Gold Trim Crystal Sconce Projector" },
      { src: gtBarControl4,         label: "Golden Touch Home Theater McLean VA — Marble Bar Close-Up Control4 Touchscreen Remote Crystal Sconces Gold Trim Acoustic Panels" },
      { src: gtBarStools,           label: "Golden Touch Home Theater McLean VA — Marble Bar With Velvet Barstools Blue LED Star Ceiling Crystal Sconces Gold Trim" },
      { src: gtBarLength,           label: "Golden Touch Home Theater McLean VA — Marble Counter Bar Full Length Perspective Velvet Stools Crystal Sconces Blue LED Star Ceiling" },
      { src: gtCandyDetail,         label: "Golden Touch Home Theater McLean VA — Candy Cabinet Detail Harry Potter Poster Gold Pulls Dots Mini Duds Whoppers Sour Patch" },
      { src: gtAvRackClose,         label: "Golden Touch Home Theater McLean VA — AV Equipment Rack Close-Up JL Audio Torus Power Amplifiers Candy Cabinet Gold Trim" },
      { src: gtSeatsSconces,        label: "Golden Touch Home Theater McLean VA — Side Rear View Leather Seats Crystal Sconces Blue LED Star Ceiling Marble Bar Gold Trim" },
      { src: gtSconceClose,         label: "Golden Touch Home Theater McLean VA — Crystal Wall Sconce Close-Up Gold Trim Acoustic Panels Blue LED Star Ceiling Edge" },
      { src: gtSconceWall,          label: "Golden Touch Home Theater McLean VA — Dual Crystal Sconces Side Wall Gold Trim Acoustic Panels Blue LED Ceiling Edge" },
      { src: gtSconceScreen,        label: "Golden Touch Home Theater McLean VA — Crystal Sconce By Screen Gold Trim Corner Acoustic Panel Blue LED Ceiling" },
      { src: gtDoorEntry,           label: "Golden Touch Home Theater McLean VA — Custom Acoustic Double Door Gold Trim Blue LED Step Lighting Lutron Keypad" },
      { src: gtStepLighting,        label: "Golden Touch Home Theater McLean VA — Tiered Step Detail Blue LED Under-Step Lighting Carpeted Riser Gold Trim Door" },
    ],
  },
  {
    title: "Vienna Estate",
    type: "Dedicated Theaters",
    location: "Vienna, VA",
    year: "2022",
    size: "12-Seat Cinema — Custom Millwork & Star Ceiling",
    gradient: "from-zinc-900 via-gray-800 to-zinc-900",
    featured: false,
    gallery: [
      { gradient: "from-zinc-900 via-gray-800 to-zinc-900", label: "Star Ceiling" },
      { gradient: "from-gray-800 via-zinc-900 to-gray-900", label: "Millwork Detail" },
      { gradient: "from-zinc-900 via-gray-900 to-zinc-800", label: "Full Room" },
    ],
  },
  {
    title: "Old Town Penthouse",
    type: "Commercial",
    location: "Alexandria, VA",
    year: "2022",
    size: "Private Screening Lounge — 20-Seat Commercial Build",
    gradient: "from-amber-950 via-zinc-900 to-slate-900",
    featured: false,
    gallery: [
      { gradient: "from-amber-950 via-zinc-900 to-slate-900", label: "Screening Lounge" },
      { gradient: "from-zinc-900 via-amber-950 to-slate-900", label: "Bar Area" },
      { gradient: "from-slate-900 via-zinc-900 to-amber-950", label: "Seating Layout" },
    ],
  },
  {
    title: "Falls Church Residence",
    type: "Dedicated Theaters",
    location: "Falls Church, VA",
    year: "2022",
    size: "Finished Basement — 6-Seat Family Cinema",
    gradient: "from-slate-800 via-stone-900 to-zinc-900",
    featured: false,
    gallery: [
      { gradient: "from-slate-800 via-stone-900 to-zinc-900", label: "Family Theater" },
      { gradient: "from-stone-900 via-slate-800 to-zinc-900", label: "Screen View" },
      { gradient: "from-zinc-900 via-stone-900 to-slate-800", label: "Side Aisle" },
    ],
  },
  {
    title: "Potomac Manor",
    type: "Dedicated Theaters",
    location: "Potomac, MD",
    year: "2021",
    size: "18-Seat Estate Cinema — Full Design & Build",
    gradient: "from-gray-900 via-slate-800 to-gray-900",
    featured: false,
    gallery: [
      { gradient: "from-gray-900 via-slate-800 to-gray-900", label: "Estate Cinema" },
      { gradient: "from-slate-800 via-gray-900 to-slate-900", label: "Upper Tier" },
      { gradient: "from-gray-900 via-slate-900 to-slate-800", label: "Lower Row" },
    ],
  },
  {
    title: "Leesburg Farmhouse",
    type: "Media Room",
    location: "Leesburg, VA",
    year: "2021",
    size: "Converted Barn Theater — Custom Acoustic Build",
    gradient: "from-zinc-900 via-amber-950 to-slate-900",
    featured: false,
    gallery: [
      { gradient: "from-zinc-900 via-amber-950 to-slate-900", label: "Barn Theater" },
      { gradient: "from-amber-950 via-zinc-900 to-slate-900", label: "Acoustic Panels" },
      { gradient: "from-slate-900 via-amber-950 to-zinc-900", label: "Beam Ceiling" },
    ],
  },
  {
    title: "Capitol Hill Townhouse",
    type: "Dedicated Theaters",
    location: "Washington, DC",
    year: "2021",
    size: "Urban Basement Theater — 6-Seat Build",
    gradient: "from-slate-900 via-gray-800 to-slate-900",
    featured: false,
    gallery: [
      { gradient: "from-slate-900 via-gray-800 to-slate-900", label: "Urban Theater" },
      { gradient: "from-gray-800 via-slate-900 to-gray-900", label: "Screen Close-Up" },
      { gradient: "from-slate-900 via-gray-900 to-gray-800", label: "Rear View" },
    ],
  },
];

function GalleryModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [active, setActive] = useState(0);

  const prev = useCallback(() => setActive((i) => (i - 1 + project.gallery.length) % project.gallery.length), [project.gallery.length]);
  const next = useCallback(() => setActive((i) => (i + 1) % project.gallery.length), [project.gallery.length]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  const current = project.gallery[active];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-[96vw] max-w-7xl bg-[hsl(220_15%_7%)] border border-[hsl(220_15%_16%)] flex flex-col h-[94vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-6 py-4 border-b border-[hsl(220_15%_14%)] shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Tag size={10} className="text-[hsl(38_75%_52%)]" />
              <span className="text-[hsl(38_75%_52%)] text-[10px] tracking-[0.2em] uppercase">{project.type}</span>
              <span className="text-[hsl(38_10%_40%)] text-[10px]">· {project.year}</span>
            </div>
            <h2 className="font-serif text-xl text-[hsl(38_20%_90%)]">{project.title}</h2>
            <div className="flex items-center gap-1 text-[hsl(38_10%_50%)] text-xs mt-1">
              <MapPin size={10} />
              <span>{project.location}</span>
              <span className="text-[hsl(38_10%_35%)] mx-1">·</span>
              <span>{project.size}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[hsl(38_10%_45%)] hover:text-[hsl(38_20%_88%)] transition-colors duration-200 p-1 mt-1 shrink-0"
          >
            <X size={18} />
          </button>
        </div>

        {/* Slider */}
        <div className="relative flex-1 min-h-0 overflow-hidden">
          {/* Track */}
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ width: `${project.gallery.length * 100}%`, transform: `translateX(-${active * (100 / project.gallery.length)}%)` }}
          >
            {project.gallery.map((item, i) => (
              <div key={i} className="h-full flex-shrink-0" style={{ width: `${100 / project.gallery.length}%` }}>
                {"src" in item ? (
                  <img src={item.src} alt={item.label} className="w-full h-full object-contain" />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                    <div className="text-center opacity-30">
                      <Images size={48} className="text-[hsl(38_75%_52%)] mx-auto mb-3" />
                      <p className="text-[hsl(38_10%_60%)] text-sm tracking-widest uppercase">{item.label}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Counter */}
          <div className="absolute bottom-3 right-4 text-[hsl(38_10%_45%)] text-xs tabular-nums pointer-events-none bg-black/50 px-2 py-0.5">
            {active + 1} / {project.gallery.length}
          </div>

          {/* Prev / Next */}
          {project.gallery.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/60 border border-[hsl(220_15%_20%)] text-[hsl(38_10%_70%)] hover:border-[hsl(38_75%_52%)] hover:text-[hsl(38_75%_52%)] transition-colors duration-200"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/60 border border-[hsl(220_15%_20%)] text-[hsl(38_10%_70%)] hover:border-[hsl(38_75%_52%)] hover:text-[hsl(38_75%_52%)] transition-colors duration-200"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {project.gallery.length > 1 && (
          <div className="flex gap-2 px-4 py-3 border-t border-[hsl(220_15%_14%)] overflow-x-auto scrollbar-none shrink-0 bg-[hsl(220_15%_5%)]">
            {project.gallery.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`shrink-0 w-20 h-14 relative overflow-hidden border-2 transition-all duration-200 ${
                  active === i
                    ? "border-[hsl(38_75%_52%)] opacity-100"
                    : "border-[hsl(220_15%_18%)] opacity-50 hover:opacity-80 hover:border-[hsl(220_15%_30%)]"
                }`}
              >
                {"src" in item ? (
                  <img src={item.src} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${item.gradient}`} />
                )}
              </button>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default function Projects() {
  useSEO({
    title: "Home Theater Portfolio — Luxury Cinema Projects | Home Cinema Group",
    description: "Browse our portfolio of luxury home theater builds across Virginia, DC, and Maryland. Award-winning private cinemas, screening rooms, and basement theaters.",
    canonical: "https://homecinemagroup.com/projects",
    ogImage: "https://homecinemagroup.com/opengraph.jpg",
  });
  const [activeFilter, setActiveFilter] = useState("All");
  const [heroReady, setHeroReady] = useState(false);
  const [openProject, setOpenProject] = useState<Project | null>(null);
  useEffect(() => { setTimeout(() => setHeroReady(true), 100); }, []);

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.type === activeFilter || (p.tags ?? []).includes(activeFilter));

  return (
    <div className="bg-[hsl(220_15%_7%)]">
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 50%, hsl(220 20% 12%) 0%, hsl(220 15% 5%) 70%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className={`transition-all duration-1000 ${heroReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[hsl(38_75%_52%)]" />
              <span className="text-[hsl(38_75%_52%)] text-xs tracking-[0.3em] uppercase">Our Work</span>
            </div>
            <h1 className="font-serif text-6xl md:text-8xl font-light text-[hsl(38_20%_90%)] leading-tight mb-6">
              Project<br />
              <span className="italic text-[hsl(38_75%_52%)]">Portfolio</span>
            </h1>
            <p className="text-[hsl(38_10%_60%)] text-xl max-w-xl leading-relaxed">
              Luxury home theaters designed and built across Virginia, DC, Maryland, and beyond. Every project is unique — every result, extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="sticky top-20 z-40 bg-[hsl(220_15%_7%/0.98)] border-b border-[hsl(220_15%_14%)] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-2 overflow-x-auto scrollbar-none">
          {filters.map((f) => (
            <button
              key={f}
              data-testid={`filter-${f.toLowerCase().replace(/\s/g, "-")}`}
              onClick={() => setActiveFilter(f)}
              className={`shrink-0 px-5 py-2 text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-200 ${
                activeFilter === f
                  ? "bg-[hsl(38_75%_52%)] text-[hsl(220_15%_7%)]"
                  : "border border-[hsl(220_15%_20%)] text-[hsl(38_10%_55%)] hover:border-[hsl(38_75%_52%)] hover:text-[hsl(38_75%_52%)]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="py-16 md:py-24" data-testid="projects-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((project, i) => (
              <FadeIn key={project.title} delay={Math.min(i * 60, 400)}>
                <div
                  data-testid={`project-item-${i}`}
                  onClick={() => setOpenProject(project)}
                  className="group border border-[hsl(220_15%_14%)] overflow-hidden hover:border-[hsl(38_75%_52%/0.4)] transition-all duration-300 cursor-pointer"
                >
                  <div className={`h-72 relative overflow-hidden ${!project.image ? `bg-gradient-to-br ${project.gradient}` : ""}`}>
                    {project.image ? (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_15%_7%)] via-[hsl(220_15%_7%/0.2)] to-transparent" />
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 flex items-center justify-center opacity-20">
                          <div className="w-24 h-24 border border-[hsl(38_75%_52%)] rounded-full" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_15%_7%)] via-transparent to-transparent opacity-60" />
                      </>
                    )}
                    {project.featured && (
                      <div className="absolute top-3 left-3 px-3 py-1 bg-[hsl(38_75%_52%)] text-[hsl(220_15%_7%)] text-[10px] tracking-[0.2em] uppercase font-bold z-10">
                        Featured
                      </div>
                    )}
                    {/* Gallery count badge */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/60 px-2.5 py-1 border border-[hsl(220_15%_22%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Images size={10} className="text-[hsl(38_75%_52%)]" />
                      <span className="text-[hsl(38_10%_70%)] text-[10px] tracking-wide">{project.gallery.length} Photos</span>
                    </div>
                  </div>
                  <div className="p-6 bg-[hsl(220_15%_9%)]">
                    <div className="flex items-center gap-2 mb-2">
                      <Tag size={10} className="text-[hsl(38_75%_52%)]" />
                      <span className="text-[hsl(38_75%_52%)] text-[10px] tracking-[0.2em] uppercase">{project.type}</span>
                      <span className="text-[hsl(38_10%_40%)] text-[10px]">· {project.year}</span>
                    </div>
                    <h3 className="font-serif text-xl text-[hsl(38_20%_88%)] mb-2 group-hover:text-[hsl(38_75%_52%)] transition-colors duration-300">{project.title}</h3>
                    <div className="flex items-center gap-1 text-[hsl(38_10%_50%)] text-xs mb-3">
                      <MapPin size={10} />
                      <span>{project.location}</span>
                    </div>
                    <p className="text-[hsl(38_10%_45%)] text-xs">{project.size}</p>
                    {project.credit && (
                      <p className="text-[hsl(38_10%_38%)] text-[10px] mt-1 tracking-wide">{project.credit}</p>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-[hsl(38_10%_45%)]">
              No projects found for this category.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[hsl(220_15%_5%)] border-t border-[hsl(220_15%_14%)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl text-[hsl(38_20%_90%)] mb-6">
              Ready to Build Yours?
            </h2>
            <p className="text-[hsl(38_10%_60%)] mb-10 leading-relaxed">
              Every great theater begins with a conversation. We serve clients across Virginia, DC, Maryland, and beyond.
            </p>
            <Link href="/contact" data-testid="projects-cta">
              <span className="inline-flex items-center gap-3 px-8 py-4 bg-[hsl(38_75%_52%)] text-[hsl(220_15%_7%)] text-sm tracking-[0.15em] uppercase font-semibold cursor-pointer hover:bg-[hsl(38_75%_60%)] transition-colors duration-300">
                Get a Quote <ArrowRight size={14} />
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Gallery Modal */}
      {openProject && (
        <GalleryModal project={openProject} onClose={() => setOpenProject(null)} />
      )}
    </div>
  );
}
