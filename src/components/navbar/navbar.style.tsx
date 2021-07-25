import React from "react";
import styled from "styled-components";

export const NavHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 5rem;
`

export const Logo = styled.img`
width:175px;
margin-left:0;

`

export const BoxRight = styled.div`
display: flex;
justify-content: center;
align-items: center;

`


export const Toggle = styled.button`
/* margin-left:auto; */
background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg{
      font-size: 1.5rem;

    }
     @media screen and (min-width:992px){
  display: none;
}
`

export const NavLinks = styled.ul`
display: none;

@media screen and (min-width:992px){
  display: flex;
  justify-content: center;
  align-items: center;
  li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
}
`