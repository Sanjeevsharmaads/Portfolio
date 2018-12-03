import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class SubContent1 extends Component {
  constructor(props) {
      super(props);
      this.state = {
      	detail:[],
	    displayValue: false,
	    displayValue2:true,
	    value:"Find a home in  ...",
	    count :0,
		startDate:new Date(),
      	checkIn: new Date(),
      	checkOut:""
      };
    }

    handleChange = (date) => {
	  	if(this.state.count>=0){
	  		this.setState({
	     		checkOut: date,count:this.state.count+1
	    	});
	  	}

		this.setState({
	      startDate: date,count:this.state.count+1
	    });
    	console.log('date is :'+this.state.startDate);
    	console.log('checkout date is :'+this.state.checkOut);
  	}

  	sendData = () =>{
  		const location = this.state.value;
	    const checkInDate = this.state.startDate;
	    const checkOutDate = this.state.checkOut;

	    console.log('location: ' +location+ 'checkInDate:' +checkInDate+ 'checkOutDate:'+checkOutDate);
	    fetch('http://localhost:3000/booking', {
	      method: 'POST',
	        headers: {
	          'Accept': 'application/json',
	          'Content-Type': 'application/json',
	        },
	        body: JSON.stringify({
	          location: location,
	          checkInDate: checkInDate,
	          checkOutDate: checkOutDate  
	        })
	    })
	    .then(response => response.json())
	    .then(data => this.props.history.push({
	      pathname: "/MyAccount",
	      state: {detail: data}
	    }));
	  }

  	changeDisplay = (e) =>{
  		e.preventDefault();
  		console.log('i am in changeDisplay');
  	   	this.component.setOpen(this.focus);
    	this.focus = !this.focus;
  	}

    select = (event) => {
    	event.preventDefault();
    	this.setState({value:event.target.innerText,displayValue:false})
    }

	stylecomp = (e) => {
		e.preventDefault();
		console.log('hello am in stylecomp');
		this.setState({displayValue:!this.state.displayValue});
	}

  render() {
  	console.log(this.state.value);
    return (
      <div>
            <div className="sc-jTNJqp hYlMQo">
            	<div className="sc-fAfrNB gNYneE">
            	<div>
            	<div>
            		<form className="sc-gKLXLV iePPYU" id="filters">
            			<div className="sc-bvCTgw hcrEhF sc-bIKvTM jywdkA">
            			<div className="sc-gCKARq fsNkAV">
            			<div className="sc-fjdPjP fsTCDe">
            			<div className="sc-hZhUor jhFxUw">
            				<label className="sc-iysEgW jzDuha">Location</label>
            				<div><div className="sc-hDgvsY bwiQCw" ><div className="dropdown">{this.state.value}</div></div>
            				<div className="sc-jMvuUo TXuyj" style={{display:this.state.displayValue ? "block": "none"}}>
            					<ul className="sc-gtXRHa jlGTXA" style={{display:this.state.displayValue ? "block": "none"}}>
            						<button  className="btn" onClick={(e) => {this.select(e)}}><li className="sc-fyjYeE dcQnXJ" >London</li></button><br/>
            						<button className="btn" onClick={(e) => {this.select(e)}}><li className="sc-fyjYeE dcQnXJ" onClick={(e) => {this.select(e)}}>Paris</li></button><br/>
            						<button className="btn" onClick={(e) => {this.select(e)}}><li className="sc-fyjYeE dcQnXJ" onClick={(e) => {this.select(e)}}>Lisbon</li></button><br/>
            						<button  className="btn" onClick={(e) => {this.select(e)}}><li className="sc-fyjYeE dcQnXJ" onClick={(e) => {this.select(e)}}>Rome</li></button><br/>
            					</ul>
            				</div>
            				</div>
            				<i className="down-btn" onClick={ (e) => {this.stylecomp(e)}}></i>
            			</div>
            			</div>

            			<div className="sc-ldcLGC fGfjqq"></div>
            			<div className="sc-AqAhp mBjMk">
            				<label className="sc-cClmTo qUyDa">Dates</label>
            				<div className="sc-ccbnFN fKXxgl">
            				<div className="sc-kOCNXg kIWchP">Select dates</div>
            					<div style={{display:this.state.displayValue2 ? "block": "none"}}>
						    	<DatePicker style={{position:"relative",origin:"bottom left"}}ref={(r) => {this.component = r;}} autoFocus
  								selected={this.state.startDate}  minDate={new Date()}
						        onChange={this.handleChange} />
						    	</div>
						    <i className="down-btn2" onClick={(e) => {this.changeDisplay(e)}} ></i>   
                		</div>
          				</div></div></div>

            			<div className="sc-gCKARq gqJlfY">
            			</div>
            		</form>
            	</div>
            	</div>

            	<div className="sc-dpiBDp MoosI">
            		<button onClick={this.sendData} ><a className="sc-hTQSVH gOYQEr sc-imAxmJ iiuxTO" disabled="" href="/search" type="button">BOOK A HOME</a></button>
            	</div>
            </div>
            </div>

      		<div className="sc-dWcDbm jfaiou" data-loaded="true">
      			<div className="sc-esExBO hTrKkp">
	      			<h1 className="sc-ctwKVn hzKpbS">introducing</h1>
	      			<h2 className="sc-csZoYU hhfodI">Curated Homes in New Destinations</h2>
	      		</div>

	      		<button className="sc-hENMEE fbiJKL">Learn More
	      		</button>
      		</div>
     </div>
    );
  }
}

export default SubContent1;
