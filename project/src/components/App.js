import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';



const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' })

class App extends Component {
 

  async componentWillMount() {
    await this.loadWeb3()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }
  //Get the account


  constructor(props) {    
    super(props);
    this.state = {
      buffer:null,
      ihash:'QmSqJFjJAXeCBbjBrJ44QUPtexpxP6rNkLKR66ArJPo4RE'

    };
  }

  captureFile=(event)=>
  {
    event.preventDefault()
    //process file for ipfs
    const file=event.target.files[0]
    const reader= new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({buffer:Buffer(reader.result)})
    }
  }

  onSubmit= async(event) =>{
    event.preventDefault()
    console.log("Submitting the form")
    const result=await ipfs.add(this.state.buffer)
     console.log('ipfs-result',result)
    const ihash=result.path
    this.setState({ ihash })
    }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          
      
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                  <img src={`https://ipfs.infura.io/ipfs/${this.state.ihash}`}/>
                <br/>
                <br/>
                <br/>
                <h2>Doc_Ethereum With IPFS</h2>
              <form onSubmit={this.onSubmit}>
                <input type="file" onChange={this.captureFile}/>
                <input type="submit"/>

              </form>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
