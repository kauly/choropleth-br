import React, { Component } from 'react'
import styled from 'styled-components'
import ReactMapGL from 'react-map-gl'
import WebMercatorViewport from 'viewport-mercator-project'
import 'mapbox-gl/dist/mapbox-gl.css'

import Legendas from './legendas'

const Container = styled.div `
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
`

class App extends Component {

  state = {
    viewport: {
      width: "100%",
      height: "100%",
      latitude: -13.796818,
      longitude: -38.190109,
      zoom: 3.8
    }
  };

  render() {
    return (
      <Container>
        <ReactMapGL 
          mapStyle={process.env.REACT_APP_MAPBOX_STYLE_URL} 
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN} 
          {...this.state.viewport}
          onViewportChange={(viewport) => this.setState({viewport})} 
        >
          <Legendas />
        </ReactMapGL>
      </Container>
    )
  }
}

export default App