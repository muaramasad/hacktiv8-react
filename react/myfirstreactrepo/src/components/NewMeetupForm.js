import React, { Component } from 'react'
import { 
  Field, Label, Control, Input, Container, Column, Columns, Button
} from 'bloomer'
import { Title } from 'bloomer/lib/elements/Title';

const mtb = {
   marginTop: '40px',
   marginBottom: '50px'
}

export default class NewMeetupForm extends Component {
  render() {
    return (
      <Container style={mtb}>
         <Columns isCentered>
            <Column isSize='2/3'>
               <Title isSize='3'>{this.props.title}</Title>
               <Field>
                  <Label>Meetup Name</Label>
                  <Control>
                     <Input type="text" placeholder='Text Input' />
                  </Control>
               </Field>
               <Field>
                  <Label>Location</Label>
                  <Control>
                     <Input type="text" placeholder='Ex: Jakarta' />
                  </Control>
               </Field>
               <Field>
                  <Label>Oganized By</Label>
                  <Control>
                     <Input type="text" placeholder='Organizer name' />
                  </Control>
               </Field>
               <Field>
                  <Label>Upload Meetup Image</Label>
                  <Control>
                     <Input type="file" placeholder='' />
                  </Control>
               </Field>
               <Field isGrouped>
                  <Control>
                     <Button isColor='primary'>Submit</Button>
                  </Control>
                  <Control>
                     <Button isLink>Cancel</Button>
                  </Control>
               </Field>
            </Column>
         </Columns>
      </Container>
    )
  }
}
