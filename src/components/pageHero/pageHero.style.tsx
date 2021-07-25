import styled from "styled-components";

import { Link } from 'react-router-dom'
export const Wrapper = styled.div`
    background: var(--clr-primary-10);
    width: 100%;
    min-height: 20vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: var(--clr-primary-1); 


`

export const LinkItem = styled(Link)`
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
    &:hover{
      color: var(--clr-primary-1); 
    }

`
