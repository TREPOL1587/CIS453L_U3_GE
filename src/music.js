import React, {Component} from "recat";

class Music extends Component {
    render(){
        return(
            <div>
                <h2>MUSIC</h2>
                <h3>RAP</h3>
                <img src="rap.jpg" alt="rap"/>
                <h3>POP</h3>
                <img src="pop.jpg" alt="pop"/>
                <h3>ROCK</h3>
                <img src="rock.jpg" alt="rock"/>
            </div>
        );
    }
}

export default Music;