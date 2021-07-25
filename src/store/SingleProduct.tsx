import axios from "axios";
import { makeObservable, observable, action, runInAction } from "mobx"
interface props {
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
class SingleProduct {
  singeProductLoading: boolean = false;
  singleProductError: boolean = false;
  product: props = {
    id: "",
    name: "",
    price: 0,
    image: "",
    colors: [],
    company: '',
    description: '',
    category: '',
  };
  constructor() {
    makeObservable(this, {
      singeProductLoading: observable,
      singleProductError: observable,
      product: observable,
      fetchSingleProduct: action

    })

  }
  fetchSingleProduct = async (url: string) => {
    this.singeProductLoading = true;
    try {
      let response = await axios.get(url);
      let data = await response.data;
      runInAction(() => {
        this.product = data;
        this.singeProductLoading = false
      })
    } catch (err) {

    }
  }
}
export default SingleProduct