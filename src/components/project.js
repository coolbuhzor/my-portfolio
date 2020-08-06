import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardActions, Button,CardMenu, IconButton, CardText } from 'react-mdl';
import { CardTitle } from 'react-mdl/lib/Card';



  


 class Project extends Component {
     constructor(props){
         super (props);
         this.state = {activeTAb: 0}

     }

     componentDidMount() {
        setTimeout(() => {
          this.setState({activeTab:0})
        }, 100)
      }


     
     toggleCategories() {

     if (this.state.activeTab === 0) {
         return(
             <div className="projects-grid">
             
             <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
             <CardTitle style ={{color: '#fff', height: '176px', background: 'url(https://img.freepik.com/free-vector/programmer-designer-character-work-computer_93633-534.jpg?size=626&ext=jpg&ga=GA1.2.1916423550.1592479350) center / cover'}}>HTML & CSS Project #1 </CardTitle>
             <CardText>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
             </CardText>
             <CardActions border>
            <Button colored>Github</Button>
             <Button colored>live demo</Button>
             <Button colored>Github</Button>
             </CardActions>
             <CardMenu style={{color: '#fff'}}> <IconButton colored name="share"/></CardMenu>
             
             </Card>

              
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style ={{color: '#fff', height: '176px', background: 'url(https://img.freepik.com/free-vector/programmer-designer-character-work-computer_93633-534.jpg?size=626&ext=jpg&ga=GA1.2.1916423550.1592479350g) center / cover'}}>HTML & CSS Project #1 </CardTitle>
              <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              </CardText>
              <CardActions border>
             <Button colored>Github</Button>
              <Button colored>live demo</Button>
              <Button colored>Github</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>  <IconButton colored name="share"/></CardMenu>
              
              </Card>


               
             <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
             <CardTitle style ={{color: '#fff', height: '176px', background: 'url(https://img.freepik.com/free-vector/programmer-designer-character-work-computer_93633-534.jpg?size=626&ext=jpg&ga=GA1.2.1916423550.1592479350) center / cover'}}>HTML & CSS Project #1 </CardTitle>
             <CardText>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
             </CardText>
             <CardActions border>
            <Button colored>Github</Button>
             <Button colored>live demo</Button>
             <Button colored>Github</Button>
             </CardActions>
             <CardMenu style={{color: '#fff'}}>  <IconButton colored name="share"/></CardMenu>
             
             </Card>

             </div>

 

         )
         
     } else if (this.state.activeTab === 1) {
        return(
            <div>
            <h1> JavaScript</h1>
            </div>

        )
        
    } else if (this.state.activeTab === 2) {
        return(
            <div>
            <h1>React</h1>
            </div>

        )
        
    } 

    }
    render() {
        return (
            <div className="category-tabs">
            <Tabs activeTab = {this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
            <Tab>HTML / CSS</Tab>
            <Tab>JavaScript</Tab>
            <Tab>React</Tab>
        </Tabs>  

            
            <Grid>
            <Cell col={12}>
            <div className="content ">
            {this.toggleCategories()}
            </div>
            </Cell>
            </Grid>
          
            
            
            </div>
        )
    }
}

export default Project;