import "./ItemsList.css"
import ItemCard from "./../ItemCard/ItemCard"

const ItemsList = () => {
    return (
        <>
            <div className="item-list">
                <h1>Items List</h1>
                <ItemCard />
            </div>
        </>
    )
}

export default ItemsList;