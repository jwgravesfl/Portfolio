import React, { Component } from 'react';
import {  Grid, Header, Segment, Card, Icon, Image } from 'semantic-ui-react'

var cardStyle = {
      height: '5vh',
};

  const style = {
    h3: {
    color: '#fff',
    textAlign: 'center',
    }
  }

  var segmentStyle = {
    padding:'.75vh',
    margin:'0px 0px 0px 0px',
  }

  var writingStyle = {
    color: '#fff',
    textAlign: 'center',
    fontSize: '2vh',
    padding:'0px 0px 0px 0px',
    margin:'0px 0px 0px 0px', 
  }

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <section>
            <Header
              centered
              as='h3'
              style={style.h3}>
            </Header>
            <Grid columns={2} doubling stackable>
              <Grid.Column style={ segmentStyle } >
                   <Image src='https://www.cowboydr.com/images/testImages/CowboyDr.comFrontPage.JPG' />
                    <Card.Content>
                      <Card.Description style={writingStyle}>
                        Cowboy Drive Roots Band Fan Site. 
                      </Card.Description>
                      <Card.Description style={writingStyle}>
                        <i class="devicon-html5-plain" ></i>&nbsp;&nbsp;
                        <i class="devicon-css3-plain"></i>&nbsp;&nbsp;
                        <i class="devicon-bootstrap-plain"></i>&nbsp;&nbsp;
                        <i class="devicon-github-plain"></i>&nbsp;&nbsp;
                        <i class="devicon-illustrator-plain"></i>&nbsp;&nbsp;
                        <i class="devicon-javascript-plain"></i>&nbsp;&nbsp;
                        <i class="devicon-jquery-plain"></i>
                      </Card.Description>                      
                    </Card.Content>
                </Grid.Column>


              <Grid.Column style={ segmentStyle } >
                   <Image src='https://www.cowboydr.com/images/testImages/portfolioBrainstromBreweryCover.JPG' />
                    <Card.Content>
                      <Card.Description style={writingStyle}>
                        WordPress Blog
                      </Card.Description>
                      <Card.Description style={writingStyle}>
                        <i class="devicon-html5-plain" ></i>&nbsp;&nbsp;
                        <i class="devicon-css3-plain"></i>&nbsp;&nbsp;
                        <i class="devicon-illustrator-plain"></i>&nbsp;&nbsp;
                        <i class="devicon-facebook-plain"></i>&nbsp;&nbsp;
                        <i class="devicon-twitter-plain"></i>&nbsp;&nbsp;
                        <i class="devicon-wordpress-plain"></i>


                      </Card.Description>                      
                    </Card.Content>
                </Grid.Column>


              <Grid.Column style={ segmentStyle }>
                <Segment>
                    <Card centered>
                      <Image src='https://react.semantic-ui.com/assets/images/avatar/large/matthew.png' />
                    <Card.Content>
                      <Card.Description>
                        Matthew is a musician living in Nashville.
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Segment>
              </Grid.Column>
              <Grid.Column style={ segmentStyle }>
                <Segment>
                    <Card centered>
                      <Image src='https://react.semantic-ui.com/assets/images/avatar/large/matthew.png' />
                    <Card.Content>
                      <Card.Description>
                        Matthew is a musician living in Nashville.
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Segment>
              </Grid.Column>

            </Grid>
        </section>
      </div>

    )
  }
}