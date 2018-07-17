import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className={this.props.styles.card}>
                {/* TODO - change hardcoded url */}
                <img className={this.props.styles.cardImage} src={`http://localhost:8000/media/${this.props.bread.image.file}`} alt=""/>
                <div className={this.props.styles.cardContent}>
                    <h2 className={this.props.styles.cardTitle}>{this.props.bread.title}</h2>
                    <p className={this.props.styles.cardMeta}><span>Origin</span> {this.props.bread.origin.title}</p>
                    <p className={this.props.styles.cardMeta}><span>Type</span> {this.props.bread.breadType.title}</p>
                </div>
            </div>
        )
    }
}

export default Card;
