import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import {Redirect} from 'react-router-dom';

export const MyModal= (props) => {
  const [open,setOpen]=React.useState(true);
  
  const closeModal = function closeModal(){
    console.log("close modal");
    props.redirect && props.redirect();
    
    setOpen(false);
  }

  const cancelModal = function cancelModal(){
    props.cancelRedirectNew && props.cancelRedirectNew();
    setOpen(false);
      
  }

  


  
  return(<Modal size="tiny"  dimmer="blurring" open={open} onClose={closeModal}>
   <div className="ui header container centered">{props.title}</div>
    <Modal.Content>
       
    <div className="ui sub header container centered"> {props.content}</div>
    </Modal.Content>
  <Modal.Actions>
  {props.cancelActionText && <Button onClick={cancelModal}
              negative
              icon='remove'
              labelPosition='right'
              content={props.cancelActionText}
            />}
           {props.positiveActionText && <Button onClick={closeModal}
              positive
              icon='checkmark'
              labelPosition='right'
              content={props.positiveActionText}
            />}
          </Modal.Actions>
  </Modal>);
}
