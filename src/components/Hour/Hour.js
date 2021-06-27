// import { useState } from 'react';
// import './Hour.scss'

// const Hour = ({city}) => {
//     const [time,setTime] = useState({second: "",minute: ""})
//     function Gettime() {
//      setInterval(() => {
//         let cleartime = new Date();

//     setTime({
//       second: cleartime.getHours(),
//       minute: cleartime.getMinutes()
//     })
//      },1000);
//    }

//   Gettime()

//     return (
//         <>
//           <p>
//              <span>{time.second}:{time.minute} | {city}</span>
//              <span></span>
//           </p>
//         </>
//     )
// }

// export default Hour;

import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h4>Toshkentda Soat {this.state.date.toLocaleTimeString()} bo'ldi</h4>
            </div>
        )
    }
}

export default Clock;