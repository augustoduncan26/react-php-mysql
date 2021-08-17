class AddCustomer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
        date: '',
        name: '',
        phone: '',
		messg: '',
        elementClicked: false,
		items: []
    	}
		
	}

	handleFormSubmit( e ) {
        e.preventDefault();
		const hostURL = location.protocol + '//' + location.hostname + location.pathname;
        //console.log(this.state);

		let form_data = new FormData();
		form_data.append('name', this.state.name);
		form_data.append('date', this.state.date);
		form_data.append('phone', this.state.phone);

		if (this.state.name == '' && this.state.date == '') {
			this.state.messg = 'All filed are required';
			console.log(this.state.messg);
		}

		axios({
			method: 'post',
			url: 	hostURL+'/php/add.customers.php',
			data: form_data,
			config: {headers: {'Content-Type': 'multipart/form-data'}}
		})
		.then (function (response){
			console.log(response)
			if (response.data.result == 'All files is required') {
				$('.messg').removeClass('alert-success').addClass('alert-danger').show().html(response.data.result);
				setTimeout(function(){$('.messg').hide()},3000);
				return false;
			} else {
			$('.messg').removeClass('alert-danger').addClass('alert-success').show().html(response.data.result);
			setTimeout(function(){$('.messg').hide()},3000);
			
				fetch("php/list.customers.php")
				.then(res => res.json())
				.then(
					(result) => {
					//$('#list-customers-table').load(hostURL+" #list-customers-table");
					var items = result;
					console.log(result);
					}
				)
			}
		})
		.catch (function (response){
			console.log(response)
		})
    }
	
	render() {
		
	let ele = 
		<div className="">
	
		<div className='alert messg'></div>
		<form className="form-style">

		<div className="form-group row">
		<label for="staticDate" className="col-sm-2 col-form-label">Date</label>
		<div className="col-sm-8">
		<input type="date" className="form-control col-md-3" onChange={e => this.setState({ date: e.target.value })} value={this.state.date} id="date" placeholder="Select Date" />
		</div>
		<div className=" cursor"><a className="close-add-customer">close</a></div>
		</div>

		<div className="form-group row">
		<label for="staticEmail" className="col-sm-2 col-form-label">Name</label>
		<div className="col-sm-10">
		<input type="text" className="form-control col-md-10" id="name" onChange={e => this.setState({ name: e.target.value })} value={this.state.name} placeholder="Name" />
		</div>
		</div>

		<div className="form-group row">
		<label for="inputPassword" className="col-sm-2 col-form-label">Phone</label>
		<div className="col-sm-10">
		<input type="text" className="form-control col-md-10" id="phone" onChange={e => this.setState({ phone: e.target.value })} value={this.state.phone} placeholder="Phone" />
		</div>
		</div>

		<div className="form-group text-center">
        <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Create Customer" className="btn btn-primary" />
        </div>

        </form>
        </div>
	;
	return ( ele );
	}
}

function AppAdd() {
  return (
    <div>
      <AddCustomer />
    </div>
  );
}
ReactDOM.render( <AppAdd />, document.getElementById('addRow'));
$('.close-add-customer').on('click', (e) => { $('#addCustomer').toggle();$('#search-customer').toggle(); $('.customers').toggle(); });