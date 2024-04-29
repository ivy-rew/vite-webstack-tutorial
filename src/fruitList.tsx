
function FruitList() {

    const products = [
        { title: 'Cabbage', isFruit: false, id: 1 },
        { title: 'Garlic', isFruit: false, id: 2 },
        { title: 'Apple', isFruit: true, id: 3 },
        { title: 'Banana', isFruit: true, id: 4 },
      ];

    const productItems = products.map(product =>
    <li
        key={product.id}
        style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
    >
        {product.title}
    </li>
    );

    return <>
      <ul>{productItems}</ul>
    </>
}

export default FruitList
