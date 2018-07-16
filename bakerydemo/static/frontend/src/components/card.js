import React from 'react';

class Card extends React.Component {
    render(props) {
        return (
            <div>
                {/* TODO - change hardcoded url */}
                <img src={`http://localhost:8000/media/${this.props.bread.image.file}`} alt=""/>
                <div>
                    <h4>{this.props.bread.title}</h4>
                    <p><span>Origin</span> {this.props.bread.origin.title}</p>
                    <p><span>Type</span> {this.props.bread.breadType.title}</p>
                </div>
            </div>
        )
    }
}

export default Card;
