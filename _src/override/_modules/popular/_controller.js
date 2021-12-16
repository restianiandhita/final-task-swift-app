/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
import React from 'react';
import {useTranslation} from 'react-i18next';
import {withProfiler} from '@sentry/react-native';
import {navigateTo} from '@app/helpers/Navigation';
import {modules} from '@root/swift.config';
import {customUseQuery} from '@app/hooks/customApolloHooks';
import Views from '@root/_src/override/_modules/popular_products/_view';
import { GET_POPULAR_PRODUCTS } from '@app/_modules/popular/service/schema';

const PopularProductController = props => {
  if (!modules.auth_signin.enable) {
    return null;
  }

  /**
   * ---------------------------------------------------- *
   * @var {hooks}
   * ---------------------------------------------------- *
   */
  const {t} = useTranslation();
  const {data, loading} = customUseQuery(GET_POPULAR_PRODUCTS);

  const products = data?.categoryList || [];


  /**
   * ---------------------------------------------------- *
   * @function onNavigateSignup
   * @summary navigation to sign up page
   * ---------------------------------------------------- *
   */
   const onNavigateToProductDetail = productUrlKey => {
    navigateTo(modules.product_detail.enable, modules.product_detail.name, {
      productUrlKey,
    });
  };

  /**
   * ---------------------------------------------------- *
   * @constant {controllerProps}
   * @summary set controller props
   * ---------------------------------------------------- *
   */
  const controllerProps = {
    t,
  };

  return <Views loading={loading} prod={products} 
  onNavigateToProductDetail={onNavigateToProductDetail} 
  {...props} {...controllerProps}
   />;
};

export default withProfiler(PopularProductController, {
  name: 'PopularProductController',
});