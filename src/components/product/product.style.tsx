import styled from "styled-components";


export const Footer = styled.footer`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 0 ;
h5{
  font-size: 1rem;
  margin-bottom: 0px;
  font-weight: 400;
}
p{
  margin-bottom: 0px; 
  color: var(--clr-primary-5);
    letter-spacing: var(--spacing);

}
`

export const OverLay = styled.div`

   
`
export const Wrapper = styled.div`
    position: relative;

    img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
    height: 225px;
  }
  .overlay{
    position: absolute;
     background: rgba(0,0,0,0.5);
    border-radius: var(--radius);
    top:0;
    left:0;
    right:0;
    width:100%;
    height: 100%;
    visibility: hidden; 
  .link{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
opacity: 0;
    cursor: pointer;

  }
svg{

  z-index:1;

  font-size: 1.25rem;
    color: var(--clr-white);
}

  }
  &:hover .overlay{
    visibility: visible;
    opacity: 1;
  }
  &:hover .overlay .link{
    opacity: 1;
  }
  
`
