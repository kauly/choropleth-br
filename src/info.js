import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Container  = styled.div `
  position: absolute;
  top: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.8);
  margin-right: 20px;
  font-family: Arial, sans-serif;
  overflow: auto;
  padding: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  line-height: 18px;
  height: 100px;
  margin-top: 40px;
  width: 300px;
`
const ListContainer = styled.div `
  display: flex;
  flex-direction: column;
`
const ListItem =  styled.div `
  display: flex;
  align-items: center;
`



class Info extends PureComponent {

  render() {
    const { data } = this.props
    return (
      <Container>
        <h3>Informações</h3>
        { 
          data && (
            <ListContainer>
              <ListItem>
                <span>Estado:</span>{`${data.NOME_UF} - ${data.UF_05}`}  
              </ListItem>
              <ListItem>
                <span>Região:</span>{data.REGIAO}  
              </ListItem>
              <ListItem>
                <span>Desnsidade:</span>{data.densidade}  
              </ListItem>
            </ListContainer>    
          )
        }   
      </Container>
    )
  }
}

export default Info