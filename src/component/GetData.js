import React, { Component } from 'react';
import Axios from 'axios';
import { Grid, Button, withStyles} from '@material-ui/core';


const styles = theme => ({
//styles CSS
    image:{
      padding: theme.spacing.unit,
      [theme.breakpoints.down('sm')]: {
          width: '120px',height:'120px'
                                      },
      [theme.breakpoints.down('xs')]: {
          width: '100px',height:'100px'
                                      },
          },
  a: {
    display:'block'
     },
  grid:{
    width: '150px', height: '200px'
       },
  container: { 
    margin:'3% 3% 3% 1,5%'
             },
})

class GetData extends Component {
// State 
  state = {
    data: [],
    isLoading: false,
    page:null
  }

// Fetch Data
  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/photos?_limit=100'
    Axios(url).then(res => this.setState({
      data: res.data,
      isLoading: true,
      page:1
    }))
  }

// Pagination function to switch page 
  handleNext = () => {
    if(this.state.page!== Math.ceil(this.state.data.length / 33))
    this.setState({
      page: this.state.page + 1,
    });
  }

  handlePrevious = () => {
    if(this.state.page!==1){
    this.setState({
      page: this.state.page - 1,
    });
  }
  }

// View
  render() {
    const { classes } = this.props
    const { isLoading, data, page } = this.state

    if (!isLoading)
      return (<p>Loading...</p>);

    return (
      <div className='GetData'>
        <Grid container className={classes.container}>
          {data.slice((page-1)*33,page*33).map((e, i) => {
            return ( <Grid key ={i} item xs={4} className={classes.grid} >
                       <img src={e.thumbnailUrl} className={classes.image} alt='color' /> 
                       <a className={classes.a} href= {e.url}>color zoom</a>
                     </Grid> )
          })}
        </Grid>
        <Button className={classes.button}onClick={this.handlePrevious}>Previous</Button>
          <p>{this.state.page}</p>
        <Button className={classes.button} onClick={this.handleNext}>Next</Button>
      </div>
      );
  }
}

export default withStyles(styles)(GetData);