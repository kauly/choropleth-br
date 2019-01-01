import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Container  = styled.div `
  position: absolute;
  bottom: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.8);
  margin-right: 20px;
  font-family: Arial, sans-serif;
  overflow: auto;
  padding: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  line-height: 18px;
  height: 230px;
  margin-bottom: 40px;
  width: 100px;
`
const ListContainer = styled.div `
  display: flex;
  flex-direction: column;
`
const ListItem =  styled.div `
  display: flex;
  align-items: center;
`
const ItemColor = styled.span `
  width: 10px;
  height: 10px;
  border: 1px solid black;
  background-color: ${props => props.color || "palevioletred"}
  margin-right: 5px;
`
var layers = ['0-10', '10-25', '25-50', '50-100', '100-300', '300-500+']
var colors = ['#ffdd57', '#ffa600', '#0be881', '#05c46b', '#ff5e57', '#ff3d33']

class Legendas extends PureComponent { 
  render() {
    return (
      <Container>
        
        <ListContainer>
          <h4>Legenda</h4>
          {
            layers.map((elem, n) => <ListItem key={n}><ItemColor color={colors[n]}/>{elem} </ListItem>)
          }
        </ListContainer>
      </Container>
    )
  }
}

export default Legendas