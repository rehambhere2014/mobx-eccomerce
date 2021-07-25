import { makeObservable, observable, action, runInAction } from "mobx"
import axios from "axios";

export type productProps = {

  id: string,
  name: string,
  price: number,
  image: string,
  colors: string[],
  company: string,
  description: string,
  category: string,
  shipping?: boolean,
  featured?: boolean

}

class ProductsStore {
  products: productProps[] = [];
  productLoading: boolean = false;
  productErroe: boolean = false;
  productsFeatured: productProps[] = []

  constructor() {
    makeObservable(this, {
      products: observable,
      productLoading: observable,
      productErroe: observable,
      productsFeatured: observable,
      fetchProducts: action

    })
  }

  fetchProducts = async (url: string) => {
    this.productLoading = true;
    try {
      let response = await axios.get(url)
      let data = await response.data;


      runInAction(() => {
        this.products = data;
        this.productsFeatured = this.products.filter(item => item.featured === true)
        this.productLoading = false
      })
    } catch (err) {

    }


  }
}



export default ProductsStore