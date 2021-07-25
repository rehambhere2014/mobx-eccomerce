import { observer } from 'mobx-react-lite';
import React, { Fragment, useEffect, useState } from 'react';
import { useStore } from '../../../store/RootStore';
import { products_url as url } from '../../../store/Api'
import PageHero from '../../pageHero/PageHero';

const Products: React.FC = () => {
  let { productStore } = useStore();
  let { productLoading: loading, products } = productStore

  if (loading) {
    return <h1>loading....</h1>
  }
  return (
    <Fragment>
      <PageHero title='products' />

    </Fragment>
  )
}
export default observer(Products)