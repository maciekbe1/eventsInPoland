import React, { useContext } from 'react'
import '../assets/styles/eventspage.scss'
import { Link } from "react-router-dom";
import { HashLoader } from 'react-spinners';
import SkeletonRow from '../components/Skeletons/SkeletonRow'
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

const EventsPage = (props) => {
    
    return (
        <div>
        </div>
    )
}

export default EventsPage;