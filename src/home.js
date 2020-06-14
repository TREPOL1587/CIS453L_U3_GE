import React, {Component} from "react";

class Home extends Component {
    render(){
        return (
        <HashRouter>
        <div>
            <div>
                <h1>Seat Geek</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/stuff">Stuff</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/stuff" component={Stuff}/>
                    <Route path="/contact" component={Contact}/>
                </div>
            </div>
            <h2>Seat Geek</h2>
            <img src = "img_concert.jpg" alt="Seat Geek Concert" width="500" height="500"/>
            <div>
                <input type="text" placeholder="Search By Team, Event, or Venue"/>
            </div>
        </div>
        </HashRouter>
        );
    }
}

export default Home;