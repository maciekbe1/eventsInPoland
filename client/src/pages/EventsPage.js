import React, { useContext, useEffect } from "react";
import "../assets/styles/eventspage.scss";
import { Link } from "react-router-dom";
import { getToken } from "../api/api";
import axios from "axios";
import Context from "../context";
// import GlobalState from '../context/global-context';

// class EventsPage extends Component {
//     static contextType = GlobalState;
//
//     state = {
//         search: "",
//     };
//     onChange = e => {
//         this.setState({search: e.target.value})
//     };
//
//     componentWillMount(props) {
//         if (this.props.location.state !== undefined) {
//             this.setState({search: this.props.location.state});
//         } else {
//             this.setState({search: ''});
//         }
//     }
//     render() {
//         let content;
//         if (!this.context.premiumevents.length) {
//             content = <div>
//                 <h1>Loading...</h1>
//                 <SkeletonRow/>
//                 <div className="spinner-container">
//                     <div className="spinner-position">
//                     <HashLoader
//                         sizeUnit={"px"}
//                         size={70}
//                         margin={"6px"}
//                         color={'#fff'}
//                     />
//                     </div>
//                 </div>
//             </div>
//         } else {
//             let filteredItems = this.context.premiumevents;
//             const filtered = filteredItems.filter(item => {
//                 return item.nazwa.value.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
//             });
//
//             content = filtered.map((item, index) => {
//                     return (
//                         <div key={index} className="event-row row">
//                             <div className="col-sm-4 event-row-image">
//                                 <img src={require(`../../assets/images/default.jpg`)} alt={index}/>
//                             </div>
//                             <div className="col-sm-8 event-row-description">
//                                 <h3>{item.nazwa.value}</h3>
//                                 <p>{item.klientopis_facility_description_i599rc.value}</p>
//                                 <div className="d-flex justify-content-end">
//                                     <Link className="btn-primary btn" to={`/all-events/event/${slugify(item.kli_id.value)}`}>Show</Link>
//                                 </div>
//                             </div>
//                         </div>
//                     )
//             })
//         }
//
//         return(
//             <div>
//                 <nav aria-label="breadcrumb">
//                     <ol className="breadcrumb">
//                         <div className="container d-flex flex-wrap">
//                             <li className="breadcrumb-item"><Link to="/">Home</Link></li>
//                             <li className="breadcrumb-item active" aria-current="page">All events</li>
//                         </div>
//                     </ol>
//                 </nav>
//
//                 <div className="container events-page">
//                     <div className="event-banner d-flex align-items-end">
//                         <div className="event-search d-flex align-items-center justify-content-center">
//                             <div className="col-sm-5 text-center">
//                                 <h2>Help me find a events</h2>
//                                 <input value={this.state.search} onChange={this.onChange} type="text" className="form-control" placeholder="find a event"/>
//                             </div>
//                         </div>
//                     </div>
//                     <h1>List of events</h1>
//                     {content}
//                 </div>
//             </div>
//         );
//     }
// }

const EventsPage = props => {
    const context = useContext(Context);
    const { dispatch } = useContext(Context);

    useEffect(() => {
        getToken(process.env.REACT_APP_USER_DATA_KEY).then(res => {
            let arrOfEvent = [];
            axios({
                method: "get",
                url: process.env.REACT_APP_EVENTS,
                headers: {
                    Authorization: res.data.token
                }
            })
                .then(res => {
                    res.data.data.objects.map(event => {
                        arrOfEvent.push(event);
                        return null;
                    });
                    dispatch({ type: "GET_EVENTS", payload: arrOfEvent });
                })
                .catch(error => {
                    console.log(error);
                });
        });
    }, []);

    const dateConverter = (start, end) => {
        if (start) {
            const date = new Date(start);
            const startDay =
                date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
            const startMonth =
                date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
            const startYear = date.getFullYear();
            return `${startDay}.${startMonth}.${startYear}`;
        }
        if (end) {
            const date = new Date(end);
            const endDay =
                date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
            const endMonth =
                date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
            const endYear = date.getFullYear();
            return `${endDay}.${endMonth}.${endYear}`;
        }
    };

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <div className="container d-flex flex-wrap">
                        <li className="breadcrumb-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li
                            className="breadcrumb-item active"
                            aria-current="page"
                        >
                            All events
                        </li>
                    </div>
                </ol>
            </nav>
            <div className="container events-page">
                <div className="event-banner d-flex align-items-end">
                    <div className="event-search d-flex align-items-center justify-content-center">
                        <div className="col-sm-5 text-center">
                            <h2>Help me find a events</h2>
                        </div>
                    </div>
                </div>
                <h1>List of events</h1>
                <div className="container">
                    <div className="row">
                        {context.state.events
                            ? context.state.events.map((event, index) => {
                                  const start = dateConverter(event.from_date);
                                  const end = dateConverter(
                                      null,
                                      event.to_date
                                  );

                                  const date =
                                      start === end
                                          ? start
                                          : start + " - " + end;
                                  return (
                                      <div
                                          className="col-md-4 col-sm-6 event-block"
                                          key={index}
                                      >
                                          <img
                                              src={`http://via.placeholder.com/450x300?text=${
                                                  event.title
                                              }`}
                                              alt=""
                                          />
                                          <p>{event.title}</p>
                                          <p>{date}</p>
                                      </div>
                                  );
                              })
                            : null}
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventsPage;
