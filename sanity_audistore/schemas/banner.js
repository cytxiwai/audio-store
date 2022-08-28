export default {
    name : 'banner',
    title: 'Banner',
    type: 'document',
    fields: [

        //image field
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                //image can be cropped
                hotspot: true,
            },
        },

        //button-text field
        {
            name: 'buttonText',
            title: 'ButtonText',
            type: 'string',
        },

        //product field
        {
            name:'product',
            title: 'Product',
            type: 'string',
        },
        
        //description field
        {
            name: 'desc',
            title: 'desc',
            type: 'string',
        },

        //smallText field
        {
            name: 'smallText',
            title: 'SmallText',
            type: 'string',
        },

        //midText field
        {
            name: 'midText',
            title: 'MidText',
            type: 'string',
        },

        //largeText1 field
        {
            name: 'largeText1',
            title: 'LargeText1',
            type: 'string',
        },

        //largeText2 field
        {
            name: 'largeText2',
            title: 'LargeText2',
            type: 'string',
        },

        //discount field
        {
            name: 'discount',
            title: 'Discount',
            type: 'string',
        },

        //saletime field
        {
            name: 'saleTime',
            title: 'SaleTime',
            type: 'string',
        },
    ],
};