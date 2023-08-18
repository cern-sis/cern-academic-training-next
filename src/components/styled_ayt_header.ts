import styled from 'styled-components'
import { Layout, Typography, Menu, Col, Row } from "antd";

export const StyledHeader = styled.div`
    h1 {
    padding-top: 35px;
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.877));
    color: #fff;
    display: flex;
    justify-content: flex-end;
    padding-right: 80px;
    text-transform: uppercase;
    opacity: 1;}

    h1 a {
    color: #fff;
    z-index: 3;
    font: normal normal normal 32px/33px Abolition;
    width: 100%;
    }

    h2 {
    padding-top: 35px;
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.877));
    color: #fff;
    font: normal normal normal 25px/28px Abolition;
    }

    margin-top: -26px;
    position: absolute;
    z-index: 8;
    width: 100%;
    background-color: transparent;
    position: -webkit-sticky;
    position: fixed;
`

interface StyledWrapperProps{
    active: boolean
}

export const StyledWrapper = styled.div<StyledWrapperProps>`
    position: fixed;
    transition: all 0.2s;
    background: ${props => props.active ? "#191919;" : "transparent"};
    z-index: 4;
    width: 100%;
    padding-top: 40px; /*the same as the heigh of the tool bar*/
`

export const AcademicTrainingColumn = styled(Col)`
    justify-content: flex-end;
    display: flex;
`