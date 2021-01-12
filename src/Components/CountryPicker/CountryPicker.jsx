import React,{useState,useEffect} from 'react'
import {fetchCountries} from '../../api/index';
import {NativeSelect,FormControl} from '@material-ui/core'
import styles from './CountryPicker.module.css'
function CountryPicker({handleCountryChange}) {
    const [Countries, setCountries] = useState([])
    useEffect(() => {
        const fetchCountry = async () =>{
            setCountries(await fetchCountries());
        }
        fetchCountry();
    }, [setCountries])
  const options = Countries ? Countries.map((name,index)=>
        <option value={name} key={index} >{name}</option>
  ):null;
    // console.log(Countries.map(name=>name))
return (
    <div>
      <FormControl className={styles.formControl}>
          <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {options}
          </NativeSelect>
      </FormControl>
    </div>
)
};

export default CountryPicker;