import React from 'react'
// import events from '../../database/events'
// import popularCityEvents from '../../database/popularCityEvents'
import '../../assets/styles/eventspage.scss'
import { Link } from 'react-router-dom'
// import slugify from "@sindresorhus/slugify"


// class PopularEvents extends Component{
//     state = {
//         events: this.props.match.params.popularEvents,
//     };
//     render() {
//         return (
//             <div>
//                 <nav aria-label="breadcrumb">
//                     <ol className="breadcrumb">
//                         <div className="container d-flex flex-wrap">
//                         <li className="breadcrumb-item"><Link to="/">Home</Link></li>
//                         <li className="breadcrumb-item active" aria-current="page">{this.state.events}</li>
//                         </div>
//                     </ol>
//                 </nav>
//                 <div className="container">
//                     {eventProcedures.map((item, index) => {
//                         if(item.type === this.state.events) {
//                             return (
//                                 <div key={index}>
//                                     <p>{item.description}</p>
//                                 </div>
//                             )
//                         }
//                         return null;
//                     })}
//                 </div>
//                 <div className="events-page container">
//                     {
//                         events.map((item, index) =>{
//                            if (item.companyRegist.specialization === this.state.events && item.companyRegist.premium) {
//                                return (
//                                    <div key={index} className="event-row row">
//                                        <div className="col-sm-4 event-row-image">
//                                            <img src={require(`../../assets/images/default.jpg`)} alt={index}/>
//                                        </div>
//                                        <div className="col-sm-8 event-row-description">
//                                            <h3>{item.basicInfo.name}</h3>
//                                            <p>{item.additionalData.facilityDescription}</p>
//                                            <div className="d-flex justify-content-end">
//                                                <Link className="btn-primary btn" to={`/find-popular/event-premium/${item.id}`}>Show</Link>
//                                            </div>
//                                        </div>
//                                    </div>
//                                )
//                            }
//                            return null;
//                        })
//                     }
//                 </div>
//             </div>
//         )
//     }
// }
const PopularEvents = (props) => {
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <div className="container d-flex flex-wrap">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{props.match.params.popularEvents}</li>
                    </div>
                </ol>
            </nav>
        </div>
    )
}
export default PopularEvents;