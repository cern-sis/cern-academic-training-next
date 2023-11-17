import { Typography } from "antd";
import styled from "styled-components";

const { Title } = Typography;

export const StyledLecture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VideoContainer = styled.div`
  border-radius: 5%;
  background: linear-gradient(30deg, #0093e9 0, #0033a0 25%, #0b1117 100%)
    no-repeat padding-box;
  color: #fff;
  width: 50vw;
  display: inline-block;
  padding: 50px;
  height: 100%;
`;


export const InformationContainer = styled.p`
  font: normal normal normal 16px/28px Source Sans Pro Regular;
`;

export const VideoDetails = styled(Title)`
  font: normal normal normal 16px/28px Source Sans Pro Regular;
  color: #fff !important;
  opacity: 0.6;
`;