import { useState } from "react";
import { Product } from "../products/Product"

const mainStyle = {
    backgroundColor: 'green',
  };


const productList = [
    { key: 21, name: 'Agurkas', price: 5, amount: 100 },
    { key: 22, name: 'Pomidoras', price: 7, amount: 10 },
    { key: 23, name: 'Baklazanas', price: 17, amount: 0 },
    { key: 24, name: 'Svogunas', price: 3.14, amount: 4 },
    { key: 25, name: 'Bulve', price: 0.01, amount: 1000 },
    { key: 26, name: 'Batonas', price: 0.99, amount: 0 },
    { key: 27, name: 'Kalafioras', price: 9000, amount: 1 },
];

const initialProductsState = {};

for (const product of productList){
    initialProductsState[product.name] = 0;
}
export function Main() {

    const [productsState, setProductsState] = useState(initialProductsState);

    function updateProductCount(productName, newCount) {
        // neteisinga bet i tema
        // productsState[productName] = newCount;
    }

    //   const products = [];

    //   for (const product of productList) {
    //     if (product.amount > 0) {
    //         // products.push(<Product key={product.key} name={product.name} price={product.price} amount={product.amount} />);
    //     // products.push(<Product key={product.key} {...product} />);
    //     products.push(<Product {...product} />);
    //   }
    // }

    // const products = productList
    //     .filter(product => product.amount > 0)
    //     .map((product) => <Product key={product.key} name={product.name} price={product.price} amout={product.amount} />);
    // .map(product => <Product key={product.key} {...product} />);

    return (
        <main style={mainStyle}>
            <h1>Zuikio parduotuve</h1>
            <ul>
                <li>
                    <p>Img</p>
                    <p>Pavadinimas</p>
                    <p>Kiekis</p>
                    <p>Vieneto kaina</p>
                    <p>kaina</p>
                </li>
                    {
                    productList
                        .filter(product => product.amount > 0)
                        // eslint-disable-next-line react/jsx-key
                        .map(product => <Product {...product} key={Product.key} />)
                    }

                {/* <Product name="Agurkas" price={5} />  {/* cia naujas key value obj */}
                {/* <Product name="Pomkeyoras" price={7} />
                <Product name="Svogunas" price={3.14} /> */}
                {/* <Product name="Bulve" price={0.01} /> */}
                {/* <Product name="Kalafioras" price={1000} /> */}
                <li>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p>Total:</p>
                    <p>0 eur</p>
                </li>
            </ul>
      </main>
    );
}