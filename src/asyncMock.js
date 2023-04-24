const products = [
    {
        id:'1',
        name: 'Proplan',
        price: 200,
        category: 'Alimento para mascotas',
        img:'',
        stock: 25,
        description: 'Alimento para mascotas medianas'
    },
    {
        id:'2',
        name: 'Cucha para perros',
        price: 2500,
        category: 'Descanso',
        img:'htttp',
        stock: 5,
        description: 'Cucha tamaño mediano'
    }, {
        id:'3',
        name: 'Pipeta',
        price: 700,
        category: 'Salud y aseo',
        img:'https://',
        stock: 25,
        description: 'Diseñado para pulgas y Garrapatas'
    },
]
export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (products)
        },500)
    })
}
export default getProducts