import './Product.css'

export function Product({name, price}) {
    /*
    parameters yra kaip objektas
    parameters = {
        name: 'Pomidoras',
        price: 7,
    }
    */

    // const name = parameters.name;
    // const price = parameters.price;
    // sutrumpinimas
    // const {name, price} = parameters; // galima tiesiog irasyti i funkcijos parametrus

    return (
    <li>
        <img src="#" alt="Produktas" />
        <p>{name}</p>
        <p className='price'>{price.toFixed(2)}</p>
         {/* galima issitraukt is to name product key value */}
    </li>
    );
}