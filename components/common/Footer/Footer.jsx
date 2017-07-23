import React from 'react'
import classnames from 'classnames'
import './Footer.css'

import twitterIcon from '../../../img/twitter.svg'
import purpleTwitter from '../../../img/twitter-purple.svg'

class Footer extends React.Component {
    render() {
        function Signup(props) {

            
            return (
                <div className="row center-xs middle-xs">
                    <div className="col-xs-6">
                        <div className="signup">
                            <p>Signup for Updates</p>
                            <form action="https://fohkuhs.us15.list-manage.com/subscribe/post" method="POST">
                                <input type="hidden" name="u" value="a83ba2f8e9a3d9de9e52124b8" />
                                <input type="hidden" name="id" value="25d60b94b2" />
                                <input type="email" autoCapitalize="off" autoCorrect="off" name="MERGE0" id="MERGE0" size="25" placeholder="you@awesome.com" />
                            
                                <div className="submit-container clear">
                                    <input type="submit" className="button" name="submit" value="Keep Me Updated 👍 " />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }

        let form = this.props.isPage ? '' : <Signup />

        let footerClass = classnames('footer', this.props.isPage ? 'page' : '')
        let footerWrapper = classnames('footer-wrapper', this.props.isPage ? 'page' : '')
        let twitterBird = this.props.isPage ? purpleTwitter : twitterIcon

        return (
            <div>
                <div className={footerWrapper}>
                    <div className={footerClass}>
                        <div className="container">
                            {form}
                            <div className="bottom row bottom-xs center-xs">
                                <div className="col-xs-12">
                                    <a href="https://twitter.com/fohkuhsapp" target="_blank">
                                        <img src={twitterBird} alt="" className="twitter-icon"/>
                                    </a>
                                    <p className="made-by">A little thing by <a href="https://twitter.com/TravisWerbelow">Travis Werbelow</a></p>
                                    <p className="small">Pomodoro Technique® and Pomodoro® are registered trademarks of Francesco Cirillo.</p>
                                    <p className="small"><span className="logo"><span className="bold">/foh</span>-k<span className="italic">uh </span>s/</span> is not affiliated with, nor endorsed by Francesco Cirillo. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer