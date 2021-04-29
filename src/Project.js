import { render } from "@testing-library/react"

class Project extends React.Component {
    constructor(props) {
        super(props)
        //init props
    }

    render() {
        return (
            <div class="post">
                <h2>Project {this.props.number}: {this.props.title}</h2>

                <div class="post-content">
                    <img class="post-image" src="{this.projImg}" alt="{this.props.imgAlt}"/>
                    <p class="post-text">
                        {this.props.projDisc}
                        {this.props.extra &&
                            <p><br/>Play the game <a href={this.props.extra}>here.</a></p>
                        }
                        <br/><br/>
                        See the GitHub repo for this project <a href="{this.props.git}">here.</a>
                    </p>
                </div>
            </div>
        );    
    }
}
