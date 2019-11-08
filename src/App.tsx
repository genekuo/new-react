import * as React from 'react';
import {Popout} from 'react-popout-component';

export default class App1 extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {showPopout: false};
    }

    onClick = () => {
        this.setState({showPopout: true});
    }

    render() {
        return (
            <div>
                <h1>Now you too have the power to POP OUT</h1>
                <button onClick={this.onClick}>POP IT OUT!</button>
                {this.state.showPopout && (
                    <Popout>
                        <div>You can put anything here!</div>
                    </Popout>
                )}
            </div>
        );
    }
}