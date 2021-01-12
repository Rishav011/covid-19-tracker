import React from "react";
import styles from "./App.module.css";
import {fetchData} from './api/index';
import { Cards, Chart, CountryPicker } from "./Components/index";
import img from './img/img.jpg'
class App extends React.Component {
  state = {
    data:{},
    country:''
  }
  async componentDidMount(){
    const fetchedData = await fetchData();
    // console.log(fetchedData);
    this.setState({data:fetchedData});
  }
  handleCountryChange = async(country)=>{
    const fetchedData = await fetchData(country);
    
    this.setState({data:fetchedData,country:country})


  }
  render() {
    return (
      <div className={styles.container}>
        <img src={img} className={styles.image} />
        <Cards data = {this.state.data} />  
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={this.state.data} country={this.state.country}/>
      </div>
    );
  }
}

export default App;
