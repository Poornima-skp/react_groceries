

class App extends React.Component{
    state = {
        groceries: groceryList,
        item: '',
        brand: '',
        units: '',
        quantity: 0,
        isPurchased: true
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault()

        const newItem = {
            item: this.state.item,
            brand: this.state.brand,
            units:this.state.units,
            quantity: this.state.quantity
        }

        console.log(newItem)

        this.setState({
            groceries:[newItem, ...this.state.groceries].sort((a,b) => a.item.localeCompare(b.item))
        })
    }

    togglepurchased = () => {
        this.setState({
            isPurchased: !this.state.isPurchased
        })
    }

    render(){
        return(
            <div>
                <h1 class="title">React Groceries</h1>
                <div className="row">
                <div className="col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor="item">Item Name:</label>
                            <input type="text" value={this.state.item} onChange={this.handleChange} id="item" class="form-control" /><br />

                            <label htmlFor="brand">Brand:</label>
                            <input type="text" value={this.state.brand} onChange={this.handleChange} id="brand" class="form-control" /><br />

                            <label htmlFor="units">Units:</label>
                            <input type="text" value={this.state.units} onChange={this.handleChange} id="units" class="form-control" /><br />

                            <label htmlFor="quantity">Quantity:</label>
                            <input type="number" value={this.state.quantity} onChange={this.handleChange} id="quantity" class="form-control" /><br />

                            <button type="button" class="btn btn-success">Submit</button>
                        </form>

                        <div class="preview">
                            <h3>Preview our new List:</h3>
                            <h5>Item Name: {this.state.item}</h5>
                            <h5>Brand: {this.state.brand}</h5>
                            <h5>Units: {this.state.units}</h5>
                            <h5>Quantity: {this.state.quantity}</h5>
                        </div>
                </div>

              
                    <div className="col-md-6 list">
                        <ul>
                            {this.state.groceries.map((grocery) => (
                                <li>
                                    {grocery.item}, {grocery.brand},{grocery.units}, {grocery.quantity},

                                </li>

                            ))}
                        </ul>
                        <h3 onClick={this.togglepurchased} class="buy" >{this.state.isPurchased ? 'BUY' : 'In Cart'}</h3>
                    </div>
                </div>
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('.container')
)