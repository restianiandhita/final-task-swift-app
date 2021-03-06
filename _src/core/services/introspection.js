export default {
  __schema: {
    types: [
      {
        kind: 'INTERFACE',
        name: 'CartAddressInterface',
        possibleTypes: [
          {
            name: 'BillingCartAddress',
          },
          {
            name: 'ShippingCartAddress',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'CartItemInterface',
        possibleTypes: [
          {
            name: 'SimpleCartItem',
          },
          {
            name: 'VirtualCartItem',
          },
          {
            name: 'DownloadableCartItem',
          },
          {
            name: 'BundleCartItem',
          },
          {
            name: 'ConfigurableCartItem',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'ProductInterface',
        possibleTypes: [
          {
            name: 'VirtualProduct',
          },
          {
            name: 'SimpleProduct',
          },
          {
            name: 'DownloadableProduct',
          },
          {
            name: 'BundleProduct',
          },
          {
            name: 'GroupedProduct',
          },
          {
            name: 'ConfigurableProduct',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'CategoryInterface',
        possibleTypes: [
          {
            name: 'CategoryTree',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'MediaGalleryInterface',
        possibleTypes: [
          {
            name: 'ProductImage',
          },
          {
            name: 'ProductVideo',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'ProductLinksInterface',
        possibleTypes: [
          {
            name: 'ProductLinks',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'AggregationOptionInterface',
        possibleTypes: [
          {
            name: 'AggregationOption',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'LayerFilterItemInterface',
        possibleTypes: [
          {
            name: 'LayerFilterItem',
          },
          {
            name: 'SwatchLayerFilterItem',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'PhysicalProductInterface',
        possibleTypes: [
          {
            name: 'SimpleProduct',
          },
          {
            name: 'BundleProduct',
          },
          {
            name: 'GroupedProduct',
          },
          {
            name: 'ConfigurableProduct',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'CustomizableOptionInterface',
        possibleTypes: [
          {
            name: 'CustomizableAreaOption',
          },
          {
            name: 'CustomizableDateOption',
          },
          {
            name: 'CustomizableDropDownOption',
          },
          {
            name: 'CustomizableMultipleOption',
          },
          {
            name: 'CustomizableFieldOption',
          },
          {
            name: 'CustomizableFileOption',
          },
          {
            name: 'CustomizableRadioOption',
          },
          {
            name: 'CustomizableCheckboxOption',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'CustomizableProductInterface',
        possibleTypes: [
          {
            name: 'VirtualProduct',
          },
          {
            name: 'SimpleProduct',
          },
          {
            name: 'DownloadableProduct',
          },
          {
            name: 'BundleProduct',
          },
          {
            name: 'ConfigurableProduct',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'SwatchLayerFilterItemInterface',
        possibleTypes: [
          {
            name: 'SwatchLayerFilterItem',
          },
        ],
      },
    ],
  },
};
