let id = location.search.split('?')[1]
const categoryData = {
    shoe: [
        {
            id: '1',
            name: 'RA5-D09',
            brand: 'Roberto Piraloff',
            price: '֏13,300',
            preview: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/b1373b00-37d4-41a0-a908-5d742a68d3661537343756229-1.jpg'
        },
        {
            id: '2',
            name: 'RA5-9602',
            price: '֏12,600',
            brand: 'Roberto Piraloff',
            preview: 'https://www.robertopiraloff.com/media/catalog/product/cache/e2df9354d7a1c1d99bea9cff5954246a/0/0/00285735_2_.webp'

        },
        {
            id: '3',
            name: 'T9723',
            brand: 'Roberto Piraloff',
            price: '֏19,600',
            preview: 'https://www.robertopiraloff.com/media/catalog/product/cache/e2df9354d7a1c1d99bea9cff5954246a/0/0/00286342_2_.webp'
        },
        {
            id: '4',
            name: 'RA5-6768',
            brand: 'Puma',
            price: '֏11,900',
            preview: 'https://www.robertopiraloff.com/media/catalog/product/cache/e2df9354d7a1c1d99bea9cff5954246a/0/0/00285751_2__7.webp'
        },
        {
            id: '5',
            name: 'RA5-SF009',
            brand: 'Nike',
            price: '֏13,300',
            preview: 'https://www.robertopiraloff.com/media/catalog/product/cache/e2df9354d7a1c1d99bea9cff5954246a/0/0/00286399_2_.webp'
        },
        {
            id: '6',
            name: 'RA5-F1122',
            brand: 'Nike',
            price: '֏11,900',
            preview: 'https://www.robertopiraloff.com/media/catalog/product/cache/e2df9354d7a1c1d99bea9cff5954246a/0/0/00286417-_2__1.webp'
        },
        {
            id: '7',
            name: 'ՏՂԱՄԱՐԴՈՒ Կոշիկ| 113-1-51',
            brand: 'Roberto Piraloff',
            price: '֏49,000',
            preview: 'https://www.robertopiraloff.com/media/catalog/product/cache/e2df9354d7a1c1d99bea9cff5954246a/0/0/00287228_2_.webp'
        },
        {
            id: '8',
            name: '30828-20',
            brand: 'Roberto Piraloff',
            price: '֏14,000',
            preview: 'https://www.robertopiraloff.com/media/catalog/product/cache/e2df9354d7a1c1d99bea9cff5954246a/0/0/00285844_2_.webp'
        }
    ],
    electronics: [
        {
            id: '1',
            name: 'PEN/57004 BLA',
            brand: 'Oliver Weber',
            price: '֏17,000',
            preview: 'https://www.time.am/upload/resize_cache/iblock/228/260_420_0/22886eeee9e4353fa0e2313b0faa915a.jpg'
        },
        {
            id: '2',
            name: 'JEWELRY CARE KIT/PC003',
            brand: 'PANDORA',
            price: '֏9,800',
            preview: 'https://www.time.am/upload/resize_cache/iblock/85a/260_420_0/ujwbk7cz0witdeuvcn29w9qhuu0rp22m.jpg'
        },
        {
            id: '3',
            name: 'WATCH BOX/74560',
            brand: 'Stackers',
            price: '֏34,100',
            preview: 'https://www.time.am/upload/resize_cache/iblock/133/260_420_0/eyfo4v1osilla1bnw29wi6hq0giizyia.jpg'
        },
        {
            id: '4',
            name: 'BROSCH/58016R',
            brand: 'Oliver Weber',
            price: '֏32,400',
            preview: 'https://www.time.am/upload/resize_cache/iblock/9cd/260_420_0/9cd9a7a41cb1a7cc15d2b3c4d8872109.JPG'
        },
        {
            id: '5',
            name: 'SET/2093216',
            brand: 'Parker',
            price: '֏58,900',
            preview: 'https://www.time.am/upload/resize_cache/iblock/4ab/260_420_0/hdssufboxl08qjiiyyjbs8bbplb7h10x.jpg'
        },
        {
            id: '6',
            name: 'JEWELRY BOX/75785',
            brand: 'Stackers',
            price: '֏22,800',
            preview: 'https://www.time.am/upload/resize_cache/iblock/38b/260_420_0/x8cnmyu7nqpj47fa6ja8iy1hrggnhx4x.jpg'
        },
        {
            id: '7',
            name: 'PEN/1931489',
            brand: 'Parker',
            price: '֏300,100',
            preview: 'https://www.time.am/upload/resize_cache/iblock/993/260_420_0/j29q8jjmf3dx0srg12c0rr79yfciwylt.jpg'
        },
        {
            id: '8',
            name: 'LEATHER WALLET/30104000208',
            brand: 'TRU VIRTU',
            price: '֏43,500',
            preview: 'https://www.time.am/upload/resize_cache/iblock/6f9/260_420_0/nxj37evptmt1j09xcutp2d6yb29lelhj.jpg'
        },
        {
            id: '9',
            name: 'MAKEUP ORGANISER/74542',
            brand: 'Stackers',
            price: '֏100,500',
            preview: 'https://www.time.am/upload/resize_cache/iblock/5ec/260_420_0/b3cfiqpamsrnuwwo8hvhbklnn6udhtbi.jpg'
        },
        {
            id: '10',
            name: 'JEWELRY STAND/74554',
            brand: 'Stackers',
            price: '֏17,100',
            preview: 'https://www.time.am/upload/resize_cache/iblock/b1f/260_420_0/hvfwey4dvpuduathzkdfs9hk8s9rvu2r.jpg'
        }
    ],
    accessories: [
        {
            id: '1',
            name: 'Մսաղաց',
            brand: 'Tefal NE688837',
            price: '֏80,000',
            preview: 'https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/5/6/560399.jpg'
        },
        {
            id: '2',
            name: 'Սառցարան',
            brand: 'Indesit DFZ 4150.1',
            price: '֏149,000',
            preview: 'https://www.zigzag.am/media/catalog/product/cache/811d9bdbaebf1cf745388b9849057259/5/3/5308232.jpg'
        },
        {
            id: '3',
            name: 'Հարիչ',
            brand: 'Moulinex HM211A11',
            price: '֏17,000',
            preview: 'https://www.zigzag.am/media/catalog/product/cache/811d9bdbaebf1cf745388b9849057259/5/7/5702330-4.jpg'
        },
        {
            id: '4',
            name: 'LED հեռուստացույցներ',
            brand: 'Blaupunkt 43UBC6000',
            price: '֏119,000',
            preview: 'https://www.zigzag.am/media/catalog/product/cache/811d9bdbaebf1cf745388b9849057259/0/1/0197014.jpg'
        },
        {
            id: '5',
            name: 'ներկառուցվող ջեռոց',
            brand: 'Bosch HBF011BA0Q',
            price: '֏129,000',
            preview: 'https://www.zigzag.am/media/catalog/product/cache/811d9bdbaebf1cf745388b9849057259/5/2/5202670.jpg'
        },
        {
            id: '6',
            name: 'Ճարպաջեռոց',
            brand: 'TEFAL EY130815',
            price: '֏78,900',
            preview: 'https://www.zigzag.am/media/catalog/product/cache/811d9bdbaebf1cf745388b9849057259/6/1/6102472.jpg'
        },
    ]
}

