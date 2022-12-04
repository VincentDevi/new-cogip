import React from "react";
import { LightDarkToggle } from "./LigthDarkToggle/LightDarkToggle";
import { Profil } from "./Profil/Profil";
import { useSelector } from "react-redux";
import { Logo } from "./Logo/Logo";
import { HeaderStyle } from "./Header.style";

export const Header = () =>{
    const mode = useSelector(state => state.darkMode.value)
    return (
        <HeaderStyle mode={mode}>
            <Logo/>
            <section>
                <LightDarkToggle/>
                <Profil/>
            </section>

        </HeaderStyle>
    );
}