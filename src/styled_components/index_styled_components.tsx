import Link from "next/link";
import styled from "styled-components";
import { Card, Typography, Divider, Carousel } from "antd";

const { Title } = Typography;

export const AcademicTrainingCaption = styled(Link)`
color: #fff !important;
font: normal normal normal 14px Abolition;
font-size: 60px;
&:hover: {
  background-color: #fff;
}
filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.938));
opacity: 1;
`;

interface VideoCaptureProps {
name?: boolean;
speaker?: boolean;
}

export const VideosCaptions = styled(Typography.Title)<VideoCaptureProps>`
color: ${(props) => (props.name ? "#fff !important;" : "#6c7897 !important;")}
font-size: 20px !important;
text-transform: ${(props) =>
  props.speaker ? "uppercase !important;" : "capitalize !important;"}
font-weight: ${(props) =>
  props.speaker ? "500  !important;" : "300  !important;"}
font-size: ${(props) =>
  !props.name ? "15px  !important;" : "20px  !important;"}
`;

export const CarouselImage = styled.img`
  margin-top: 0;
  object-fit: cover;
  object-position: 50% 50%;
  background-repeat: repeat-x;
  opacity: 0.9;
  height: 70vh; // don't touch it!
}
  `;

export const StyledCarousel = styled(Carousel)`
  display: flex;
  height: 70vh; //don't touch it!
`

export const CaptionFrame = styled.div`
  margin: 0% 15% 0% 15%;
  width: 70%; /*small screens*/
  height: calc(100% - 100px);
  border: 2px solid #ffffffab;
  border-radius: 50px;
  transition: 1s;
  float: left;
  top: 80px;
  position: relative;
  padding-left: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: bottom;
  justify-content: end;
  padding-bottom: 5%;
`;

export const MostRecentCaption = styled(Title)`
  font: normal normal normal 32px/33px Abolition;
  letter-spacing: 2px;
  text-shadow: 2px 2px 10px #0a152d;
  opacity: 0.78;
  color: #fff !important;
`;

export const Wrapper = styled.div`
  position: relative;
`;
export const SlideWrapper = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  display: flex;
  background: transparent;
  height: 70vh; // don't touch it!
`;
export const AcademicTrainingDecoration = styled.div`
  // margin-top: 25%;
  margin-left: -3%;
`; // because of too big academic training logo (too wide); big screen 35 nit 25

export const StyledDivider = styled(Divider)`
  background: linear-gradient(-90deg, #ffffffd0 0%, transparent 100%)
    no-repeat padding-box;
  height: 3px;
  width: auto;
  border-radius: 50px;
  margin-bottom: 20px;
  float: right;
`;

export const MostRecentVideosDiv = styled.div`
  background: linear-gradient(160deg, #0b1117 0, #0033a0 100%) no-repeat;
  padding: 3vh max(20vw, 10%) 0vh max(20vw, 10%);`

  export const VideoCard = styled(Card)`
  height: 200px;
  width: 300px;
  margin: 8px 0 8px 0;
`
////

// export const VideoCard = styled(Card)`
//   border-radius: 5px;
//   height: 200px;
//   object-fit: cover;
//   object-position: 50% 10%;
//   -o-filter: blur(1px);
//   -moz-filter: blur(1px);
//   -ms-filter: blur(1px);
//   filter: brightness(70%);
//   z-index: 2;
//   transition: 0.5s;
//   filter: brightness(100%);
//   transition: all 0.5s;
//   background-color: transparent;
//   border-radius: 5px;
//   min-height: 150px;
//   &:hover {
//     filter: drop-shadow(1px 1px 10px #00194e);
//     font-size: 3.8em;
//     transition: 0.3s;
//     max-height: 10px;
//     transition: 0.5s;
//   }
// `;
export const VideoCardContent = styled(Card.Grid)`
  padding: 0 0 0 12px;
  margin-left: -8px;
  box-shadow: inset 0 0 80px transparent;
`;

export const VideoCardDurationCaption = styled.div`
  position: relative;
  bottom: 34px;
  right: 10px;
  float: right;
  background: #191919;
  border-radius: 5px;
`;
export const VideoCardDurationTitle = styled(Title)`
  font: normal normal normal 13px/14px Open Sans;
  padding: 4px 5px 0;
`;

export const PlayButton = styled.div`
  width: 1em;
  font-size: 2.6em;
  opacity: 0.8;
  position: absolute;
  background-color: transparent;
  top: 10px;
  left: 20px;
  transition: 0.3s;
  filter: drop-shadow(1px 1px 10px #00194e);
  font-size: 3.8em;
  transition: 0.3s;
`;

export const AntCardCover = styled.img`
  border-radius: 5px;
  height: 200px;
  object-fit: cover;
  object-position: 50% 50%;
  -o-filter: blur(1px);
  -moz-filter: blur(1px);
  -ms-filter: blur(1px);
  filter: brightness(70%);
  transition: 0.5s;
  filter: brightness(100%);
  transition: all 0.5s;
`;
