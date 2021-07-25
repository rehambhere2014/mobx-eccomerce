import styled from "styled-components";

export const Wrapper = styled.div`
display: none;

justify-content:center;
align-items: center;
@media screen and (min-width:992px){
  display: flex;
}

`

export const CartBtn = styled.div`
  display:flex;
  flex-direction: ${props => props.lang === 'en' ? 'row' : 'row-reverse'};
  font-size: 1.5rem;
  letter-spacing: var(--spacing);
  color: var(--clr-grey-1);
  justify-content:space-between;
  align-items:center;
  padding:5px 10px;
  text-transform: capitalize;

cursor: pointer;
span{
  margin-right:5px;

}
.cart-container{
  position: relative;

  .cart-value{
    position: absolute;
    top:-8px;
     left:15px;
    display: block;
    width:16px;
    height: 16px;
    background: var(--clr-primary-5);
border-radius: 50%;
color:white;
display: flex;
justify-content: center;
align-items: center;
font-size: 12px;
padding: 12px;
  }
}
`