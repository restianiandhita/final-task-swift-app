/* eslint-disable prettier/prettier */
import {gql} from '@apollo/client';

export const GET_POPULAR_PRODUCTS = gql`
  query getPopularProducts{
    categoryList(filters:{name:{match:"Best Seller"}}){
      name
      products{
        items{
          url_key
          name
          image{
            url
          }
          price_range{
            maximum_price{
              regular_price{
                currency
                value
              }
              final_price{
                currency
                value
              }
            }
          }
        }
      }
    }
  }
`;