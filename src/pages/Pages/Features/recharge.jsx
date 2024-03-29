import React, { Component } from "react";
import axios from 'axios';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import Chart from 'chart.js';
import data from '../../../components/constants';
import Loading from './loader';

export class Profile extends Component {
   constructor(props) {
         super(props);
 
         
         this.state = {
             name: '',
             image: '',
             logTime: '',
             state: '',
             metricNo:'',
             lga: '',
             department: '',
             programme: '',
             gender: '',
             loading: false,
             student: []
         }
 }
  componentDidMount() {
   
    $(document).ready(() => {
        $('#table-1').DataTable({ 
            lengthChange: true,
            dom: 'Bfrtip',
          });
          
        });

      axios.get(`${data.host}api/v1/student?token=${data.token}`)
      .then(response => {
        // eslint-disable-next-line
        this.setState({student: response.data[0], state:response.data[0].state, lga: response.data[0].lga, metricNo: response.data[0].metricNo, department: response.data[0].department, programme: response.data[0].programme, gender: response.data[0].gender, image: response.data[0].image, name: response.data[0].firstname + ' ' + response.data[0].othername, logTime: response.data[0].last_logout})
      }).catch((error) => {console.log(error)});
  

      





}

        Loaderview() {
        return this.state.loading? <Loading /> : null
        
    }
  render() {
    return (
        <>
      <div className="main-content">
       
       <section className="section">
       <div className="section-header">
            <h1>Recharge</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active"><Link to="/">Dashboard</Link></div>
              <div className="breadcrumb-item">Recharge</div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-12 col-lg-8">
              <div className="card">
                <div className="card-header">
                  <h4>Buy Airtime & Data</h4>
                </div>
                <div className="card-body pb-5">

                <form>
                  <div className="row">
                    <div className="form-group col-6">
                      <label for="account_number">Phone Number</label>
                      <input id="account_number" placeholder="Enter Your Phone Number" required type="tel" className="form-control" name="phone_number" autofocus />
                    </div>
                    <div className="form-group col-6">
                      <label>Airtime/ Data Purchase</label>
                      <select className="form-control selectric">
                        <option>Select Purchase Type</option>
                        <option>Airtime</option>
                        <option>Data</option>
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-6">
                      <label>Select Network Provider</label>
                      <select className="form-control selectric">
                        <option>MTN NG</option>
                        <option>Globalcom</option>
                        <option>Airtel</option>
                        <option>9mobile</option>
                      </select>
                    </div>

                    <div className="form-group col-6">
                      <label for="amount">Amount</label>
                      <input id="amount" placeholder="Enter Amount" required type="number" className="form-control" name="amount" />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" name="save_details" className="custom-control-input" id="save_details" />
                      <label className="custom-control-label" for="save_details">Save beneficiary details</label>
                    </div>
                  </div>

                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#mediumModal">
                      Make Purchase
                    </button>
                  </div>
                </form>
                </div>
                </div>
            </div>

            <div className="col-12 col-sm-12 col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h4>Wallet</h4>
                </div>
                <div className="card-body">
                  <div className="card img-fluid">
                    <img className="card-img-top" src="../assets/img/kakudi_card_bg.svg" alt="Card image" style={{width:"100%"}} />
                    <div className="card-img-overlay">
                      <p className="card-text text-white">Current Balance</p>
                      <h4 className="card-title text-white my-4">&#8358; 5,000.00</h4>
                      <p className="card-title text-light mt-3"><Link to="/add-funds" className="text-light">Add funds <i className="fa fa-plus-circle"></i></Link></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



        </section>
        </div>

<div className="modal fade" id="mediumModal" tabindex="-1" role="dialog" aria-labelledby="mediumModalLabel" aria-hidden="true">
<div className="modal-dialog modal-lg" role="document">
  <div className="modal-content">
    <div className="modal-header">
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="modal-body">
    <div className="card">
      <div className="card-body">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-12 mx-auto">
              <div className="bg-white rounded-lg shadow-sm p-5">
                <h4>Choose your payment method</h4>
               
                <ul role="tablist" className="nav bg-light nav-pills rounded-pill nav-fill mb-3">
                  <li className="nav-item">
                    <a data-toggle="pill" href="#nav-tab-card" className="nav-link active rounded-pill">
                                        <i className="fa fa-credit-card"></i>
                                        Debit Card
                                    </a>
                  </li>
                  <li className="nav-item">
                    <a data-toggle="pill" href="#nav-tab-wallet" className="nav-link rounded-pill">
                                        <i className="fa fa-wallet"></i>
                                        Pay with Wallet
                                    </a>
                  </li>
                  <li className="nav-item">
                    <a data-toggle="pill" href="#nav-tab-cards" className="nav-link rounded-pill">
                                        <i className="fa fa-credit-card"></i>
                                         Pay with Saved Cards
                                     </a>
                  </li>
                </ul>
               


                
                <div className="tab-content">

                  
                  <div id="nav-tab-card" className="tab-pane fade show active">
                    <form role="form">
                      <div className="form-group">
                        <label for="cardNumber">Card number</label>
                        <div className="input-group"> 
                          <input type="text" name="cardNumber" placeholder="Your card number" className="form-control" required />
                          <div className="input-group-append">
                            <span className="input-group-text text-muted">
                                                        <i className="fa fa-cc-visa mx-1"></i>
                                                        <i className="fa fa-cc-amex mx-1"></i>
                                                        <i className="fa fa-cc-mastercard mx-1"></i>
                                                    </span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-8">
                          <div className="form-group">
                            <label><span className="hidden-xs">Expiration</span></label>
                            <div className="input-group">
                              <input type="number" placeholder="MM" name="" className="form-control" required />
                              <input type="number" placeholder="YY" name="" className="form-control" required />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="form-group mb-4">
                            <label data-toggle="tooltip" title="Three-digits code on the back of your card">CVV
                                                        <i className="fa fa-question-circle"></i>
                                                    </label>
                            <input type="text" required className="form-control" />
                          </div>
                        </div>



                      </div>
                      <button type="button" className="subscribe btn btn-primary btn-block rounded-pill shadow-sm" data-toggle="modal" data-target="#congratulationModal"> Confirm  </button>
                    </form>
                  </div>
                 

                 
                  <div id="nav-tab-wallet" className="tab-pane fade">
                    <p>Make Purchasing using funds in Your wallet</p>
                    <p>
                      <button type="button" className="btn btn-primary rounded-pill"> Pay with Wallet</button>
                    </p>
                    <p className="text-muted">Please do add funds to your wallet to complete this transaction. <Link to="/add-funds">Add Funds Now</Link></p>
                  </div>
                 
                  <div id="nav-tab-cards" className="tab-pane fade">
                    <div className="summary-item card-body">
                      <ul className="list-unstyled list-unstyled-border">
                        <a href="#"><li className="media mb-3">
                          <div className="rounded-circle bg-light p-3 mr-3">
                            <i className="fas fa-credit-card"></i>
                          </div>
                          <div className="media-body">
                            <div className="media-title">Ecobank Nigeria</div>
                            <div className="text-small text-muted">5123**********1234 <div className="bullet"></div> Expires 01/25</div>
                          </div>
                        </li></a>
                        <Link to=""><li className="media mb-3">
                          <div className="rounded-circle bg-light p-3 mr-3">
                            <i className="fas fa-credit-card"></i>
                          </div>
                          <div className="media-body">
                            <div className="media-title">GT Bank Plc</div>
                            <div className="text-small text-muted">4123**********1235 <div className="bullet"></div> Expires 02/23</div>
                          </div>
                        </li></Link>
                      </ul>
                      <Link to="/add-card"><div className="card-footer bg-whitesmoke text-center">
                        Add a new card <i className="fa fa-plus-circle"></i>
                      </div></Link>
                    </div>
                  </div>
                 
                </div>
               

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
  </div>
</div>
</div>

<div className="modal fade" id="congratulationModal" tabindex="-1" role="dialog" aria-labelledby="congratulationModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <div className="card card-primary">
        <div className="card-header">
          <img className="mx-auto d-block" src="../assets/img/success_icon.svg" alt="" />

        </div>
        <h4 className="mx-auto display-5 py-3">Congratulations!!!</h4>

        <div className="card-body mx-auto">
          <p className="text-center font-weight-bold">Transaction successful!</p>
          <a className="btn btn-outline-primary py-2 btn-lg btn-block rounded" href="index.html">Return Home</a>

        </div>
      </div>
      </div>
    </div>
  </div>
</div>
</>
    );
  }
}

export default Profile;
