class ListTableRows extends React.Component {

    render () {
    
        const handleClick = (e) => {
            e.preventDefault();
            let idItem = e.target.id;
            if(confirm('Sure to delete this item: '+ idItem +'?')){
        
            }
            var getValue = $('#'+idItem).attr("data-target");
        }

        var items = this.props.products;
        
        return (
            <table id="list-customers-table" className='table table-bordered table-hover'>
            <thead>
                <tr className="table-info">
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col" className="text-center">Actions</th>
                </tr>
            </thead>
            <tbody id="list-customers">
            { items.map(item => (
                <tr key={item.id}>
                <td scope="row" key={item.id}>{item.id}</td>
                <td>{item.date_register}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td className="text-center">
                <i title="Delete this item" data-target={"delete-"+item.id} onClick={handleClick} className="fa fa-trash cursor deleteIcon" id={item.id}></i>
                &nbsp;&nbsp;&nbsp;
                <i title="Edit this item" data-target="" className="fa fa-pencil cursor deleteIcon" id={item.id}></i>
                </td>
                </tr>
            )) }
            </tbody>
            </table>
        );
    }
}