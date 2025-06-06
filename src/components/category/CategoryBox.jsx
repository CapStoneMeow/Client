import React from "react";
import styled from "styled-components";

const OutBox = styled.div`
        width:201px; height:313px;
        border-radius: 12px;
        background-color: #FFF5A7;
        text-align:center;
        padding: 30px 20px 20px;
        margin:20px;
    `
    const InBox = styled.div`
        width:155px; height:196px;
        border-radius: 19px;
        background-color: #FFD558;
        margin: 0 auto;
        padding:20px;
    `
    const StyledP = styled.p`
        margin: 10px 0 15px;
        font-size:24px;
    `

function CategoryBox({category,children,onClick}){

    return(
        <>
        <OutBox onClick={onClick}>
            <StyledP>{category}</StyledP>
            <InBox>{children}</InBox>
        </OutBox>
        </>
    )
}
export default CategoryBox;