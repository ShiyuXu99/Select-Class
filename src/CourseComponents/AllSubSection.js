import React from 'react';
import Subsection from'./Subsection';




class AllSub extends React.Component {
    getAllSub() {
        let subs = [];
        for (const sub of Object.entries(this.props.subSectionData)) {
            subs.push(
                <Subsection
                    section={this.props.section}
                    course={this.props.course}
                    key={sub[0]}
                    name={sub[0]}
                    data={sub[1]}
                    hideCartButton={this.props.hideCartButton}
                    setCart={(sub) => this.props.setCart(sub)}
                    secName={this.props.secName}
                />
            )
        }
        return subs;
    }
    render() {
        return (
            <div>{this.getAllSub()}</div>
        )
    }
}

export default AllSub;