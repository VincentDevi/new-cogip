import React from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    main:{
        width:'90%',
        height: '25%',
        backgroundColor:'#252945',
        borderRadius:'.4rem',
    },
  
 
    '@media (min-width:640px)':{
        main:{
            height:'40%',
        },
  
    }
});
export const TotalAmount = () =>{
    const style = useStyle();
    return (
        <div className={style.main}>
            <div>
                <div>
                    <div>
                        <p>Banner Design</p>
                        <p>1 x € 156.00</p>
                    </div>
                    <p>€ 156.00</p>
                </div>
                <div>
                    <div>
                        <p >Email Design</p>
                        <p >1 x € 400.00</p>
                    </div>
                    <p >€ 400.00</p>
                </div>
            </div>
            <div>
                <div>
                    <p>amount due</p>
                    <p>€ 556.00</p>
                </div>
            </div>
        </div>
    );
}