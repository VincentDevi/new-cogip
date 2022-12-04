import React from "react";
import { useDispatch } from "react-redux";
import { switchMode } from "../../../features/darkMode";
import { useSelector } from "react-redux";
import {LightDarkToggleStyle} from './LightDarkToggle.style'


export const LightDarkToggle = () =>{
    const dispatch = useDispatch()
    const mode = useSelector((state)=>state.darkMode.value)
    return (
      <LightDarkToggleStyle>
        <div onClick={()=>{
            dispatch(switchMode())
        }}>
            <img src={(mode)?"../public/icon-sun.svg":"../public/icon-moon.svg"} alt="light" />
        </div>
      </LightDarkToggleStyle>
    );
}