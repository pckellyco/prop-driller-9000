import React, { Component } from 'react';
import Transformer from '../Components/Transformer'
// src/Components/Transformer.js

class TransformersSection extends Component {

  renderTransformers = () => {
    return this.props.proptimii.map(transformer => {
      return <Transformer 
                name={transformer.name}
                image={transformer.url}
                key={transformer.id}
              />
    })
  }


  render() {
    return (
      <section className = "transformers-section">
        {this.renderTransformers()}
      </section>
    );
  }
}

export default TransformersSection;
