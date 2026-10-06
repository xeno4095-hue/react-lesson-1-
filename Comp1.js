function ItemsList({ items = [] }) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={item.id || index}>{item}</li>
            ))}
        </ul>
    );
}

export default ItemsList;