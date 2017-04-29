import React from 'react'
import classnames from 'classnames'
import './Hero.css'

class Hero extends React.Component {
    render() {
        let heroClass = classnames('hero', this.props.isPage ? 'small' : '')
        return (
            <div>
                <div className={heroClass}>
                    <div className="container-fluid">
                        <div className="row middle-xs center-xs">
                            <div className="col-xs-12">
                                <h1 className="tagline">
                                    {this.props.tagline}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-angle"></div>
            </div>

        )
    }
}

export default Hero