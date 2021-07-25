import { useContext } from "react";
import { createContext, useEffect } from "react";
import LangStore from "./LangStore";
import ProductsStore from "./ProductsStore";
import { products_url as url } from './Api'
import SingleProduct from "./SingleProduct";

type rootstore = {
  langStore: LangStore,
  productStore: ProductsStore,
  singleProduct: SingleProduct
}



export let RootContextStore = createContext<rootstore>({} as rootstore)


const RootStore: React.FC = (props) => {

  let langsStore = new LangStore();
  let productsStore = new ProductsStore();
  let singleproduct = new SingleProduct()
  useEffect(() => {
    productsStore.fetchProducts(url)
  }, [])

  let valueForContext = {
    langStore: langsStore,
    productStore: productsStore,
    singleProduct: singleproduct
  }
  return (
    <RootContextStore.Provider value={valueForContext}>
      {props.children}
    </RootContextStore.Provider>
  )
}


export const useStore = () => useContext(RootContextStore)

export default RootStore