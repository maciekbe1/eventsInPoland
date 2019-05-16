import React, { useContext } from 'react';
import {Link} from "react-router-dom";
// import axios from 'axios'
import NotFound from '../../pages/NotFound'
import Context from "../../context"

const Event = (props) => {
    // state = {
    //     eventsApi: null,
    //     isLoading: true,
    //     eventPath: this.props.match.params.event,
    //     eventName: null
    // };
    const context = useContext(Context)
    // componentDidMount() {
    //     // console.log(this.props.match.params);
    //     const url = `https://qang.bpower2.com/index.php/restApi/gwip-events?id=${this.props.match.params.event}&details=true`;
    // 
    //     axios.get(url).then(res => {
    //         // console.log(res.data);
    //         return this.setState({
    //             eventsApi:res.data,
    //             eventName: res.data.nazwa.value,
    //             isLoading: false
    //         })
    //     }).catch(err => {
    //         console.log(err);
    //     });
    // }

    // const {eventsApi} = this.state;
    let content;
    let breadcrumb = "";
    if (context.state.loading) {
        content = <div>Loading...</div>;
    } else if(context.state.events) {
        content = context.state.events.map((item, index) => {
            if(item.id === props.match.params.event) {
                breadcrumb = item.name;
                return (
                    <div key={props.match.params.event}>
                        <div className="event-subpage-header">
                        </div>
                        <div className="row">
                            <div className="col-sm-8">
                                <div>
                                    <img className="w-100" src={require(`../../assets/images/default.jpg`)} alt={1}/>
                                </div>
                                <div className="event-subpage-information">
                                    <h2>{item.name}</h2>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="event-subpage-contact">
                                    <div>
                                        <h4>Localisation</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        })
    } else {
        breadcrumb = "not found";
        content = <NotFound location={props.location}/>
    }
    return(
        <div>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <div className="container d-flex flex-wrap">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/all-events">All Events</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{breadcrumb}</li>
                    </div>
                </ul>
            </nav>
            <div className="container event-subpage">
                {content}
            </div>
        </div>
    )
}
export default Event;