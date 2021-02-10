import React from 'react';
import Section from './Section.js'

class AllSection extends React.Component {
    getAllSection() {
      let sections = [];
      for (const section of Object.entries(this.props.data.sections)) {
        sections.push(
          <Section
            hideCartButton={this.props.hideCartButton}
            key={section[0]}
            secName={section[0]}
            sectionData={section[1]}
            course={this.props.data}
            courseNum={this.props.data.sections.number}
            setCart={(Course) => this.props.setCart(Course)}
          />
        )
      }
      return sections;
    }
    render() {
      return (
        <div>{this.getAllSection()}</div>
      )
    }
  }

  export default AllSection;