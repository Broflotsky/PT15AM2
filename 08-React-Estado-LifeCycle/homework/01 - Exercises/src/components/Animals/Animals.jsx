import React from 'react'

export default class Animals extends React.Component {
  constructor(props){
   super()
  }
  

  componentWillUpdate (prevProps, prevStates) {
    if (prevStates.totalAnimals !== prevProps.animals.length) {
      this.setState({ totalAnimals: this.props.animals.length })
    }
  }

  render () {
    const { animals } = this.props
    return (
      <div>
          {animals?.map((animal, key) => (
            <div key={key}>
              <h5>{animal.name}</h5>
              <img src={animal.image} alt="no puedo mostrar " width="300px"/>
              <span>{animal.specie}</span>
            </div>
          ))}
        
      </div>
    )
  }
}
