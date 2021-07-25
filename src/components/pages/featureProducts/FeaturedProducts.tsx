import { observer } from 'mobx-react-lite';
import React from 'react'
import { useStore } from '../../../store/RootStore'
import Product from '../../product/Product';
import { FeatureBox } from './featureProduct.style';
import { productProps } from '../../../store/ProductsStore'
const FeaturedProducts: React.FC = () => {
  let { productStore } = useStore()
  let { productsFeatured: featured, productLoading: loading } = productStore;
  if (loading) {
    return <h1>loading....</h1>
  } else {
    return (
      <>
        <div className="container">
          <FeatureBox>

            {featured.slice(0, 3).map(item => {
              return <Product key={item.id}  {...item} />
            })}
          </FeatureBox>
        </div>

      </>
    )
  }


}
export default observer(FeaturedProducts)