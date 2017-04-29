import React from 'react'
import './Nav.css'
import PageLink from '../PageLink';


class Nav extends React.Component {



    render(){
        return (
            <div>
                <div className="nav">
                    <div className="container">
                        <div className="nav-bar">
                            <div className="logo">
                                <PageLink to={'/'}>
                                   <span className="logo"><span className="bold">foh</span>-k<span className="italic">uh </span>s</span>
                                </PageLink>
                            </div>
                            <div className="nav-links">
                                <PageLink to={'/about'}>
                                    About 
                                </PageLink>
                                <PageLink to={'/log'} >
                                    Changelog 
                                </PageLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav