import React from 'react'
import Card from 'react-bootstrap/Card';

function UserList({el}) {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fraw.githubusercontent.com%2Fmarcolanaro%2Freact-payment-request-api%2Fmaster%2Flogo.png&f=1&nofb=1&ipt=943d30db3c00de072d2dcba017c44a1dc144455f3dd8fa9895cb5907ea973390&ipo=images"  />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
        {el.email}
        </Card.Text>
        
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default UserList
