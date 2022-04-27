import React from 'react'
import styles from "./Cards.module.css"
import CountUp from "react-countup"
import {Card, CardContent, Typography, Grid} from "@material-ui/core"

import {GiHastyGrave} from "react-icons/gi"
import {MdLocalHospital} from "react-icons/md"
import {AiFillLike} from "react-icons/ai"

import { useSelector } from 'react-redux'
import { selectData } from '../covidSlice'

const Cards: React.FC = () => {
    const data = useSelector(selectData);
    return (
      <div className={styles.container}>
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={12} md={3} component={Card} className={styles.infected}>
            <Typography color="textSecondary" gutterBottom>
              <MdLocalHospital />
              Infected persons
            </Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={data.confirmed.value} duration={1.5} separator=","/>
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} component={Card} className={styles.recovered}>
            <Typography color="textSecondary" gutterBottom>
              <MdLocalHospital />
              Recovered persons
            </Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={data.recovered.value} duration={1.5} separator=","/>
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} component={Card} className={styles.deaths}>
            <Typography color="textSecondary" gutterBottom>
              <MdLocalHospital />
              Dead persons
            </Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={data.deaths.value} duration={1.5} separator=","/>
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
      
}
export default Cards
