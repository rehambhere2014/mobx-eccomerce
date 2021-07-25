import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../../../store/RootStore';

import { single_product_url as url } from '../../../store/Api'
import { formatPrice } from '../../../utils/FormatPrice';

const SingleProduct: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  let { singleProduct } = useStore();

  let { fetchSingleProduct, product, singeProductLoading: loading } = singleProduct;
  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
  }, [id])
  if (loading) {
    return <h1>loading......</h1>
  }
  console.log(product.name)
  return <h1>singl{formatPrice(product.price)} /{product.name}</h1>

}

export default observer(SingleProduct)