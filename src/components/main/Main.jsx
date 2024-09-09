import { Product } from "../products/Product"
export function Main() {
    const mainStyle = {
        backgroundColor: 'green',
      }
    return (
        <main style={mainStyle}>
            <h1>Zuikio parduotuve</h1>
            <ul>
                <Product name="Agurkas" price={5} />  {/* cia naujas key value obj */}
                <Product name="Pomidoras" price={7} />
                <Product name="Svogunas" price={3.14} />
                <Product name="Bulve" price={0.01} />
                <Product name="Kalafioras" price={1000} />
            </ul>
      </main>
    )
}