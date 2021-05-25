export function List (props){
    const ListItems = props.items.map( (thing)=>{
        return( <li>Fruit: {thing.name}  Colour: {thing.color}</li>
            )
    } )
    return(
        <div className="List">
            <ul>
                {ListItems}
            </ul>
        </div>
    )
}
export default List