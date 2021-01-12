import React from 'react'
import {Card,Typography,Grid,CardContent} from '@material-ui/core';
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'
function Cards(props) {
    
    // console.log(props.data.lastUpdate)
    if(!props.data.confirmed){
        return 'Loading...';
    }
return (
    <div className={styles.container}>
        <Grid container justify="center" spacing={3}>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.confirmed)}>     
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant="h5"> <CountUp end={props.data.confirmed.value} separator="," duration={2.5} /> </Typography>
                    <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of Active cases of COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>     
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5"><CountUp end={props.data.recovered.value}  separator="," duration={2.5} /></Typography>
                    <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of Recoveries from COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>     
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5"><CountUp end={props.data.deaths.value}  separator="," duration={2.5} /></Typography>
                    <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of deaths from COVID-19</Typography>
                </CardContent>
            </Grid>
        </Grid>
    </div>
)
};

export default Cards;