import React, {Component} from 'react'
import clinics from '../../database/clinics'
import clinicProcedures from '../../database/findPopularClinicProcedures'
import '../../assets/styles/clinicpage.scss'
import { Link } from 'react-router-dom'
// import slugify from "@sindresorhus/slugify"


class PopularClinics extends Component{
    state = {
        clinics: this.props.match.params.popularClinics,
    };
    render() {
        return (
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <div className="container d-flex flex-wrap">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{this.state.clinics}</li>
                        </div>
                    </ol>
                </nav>
                <div className="container">
                    {clinicProcedures.map((item, index) => {
                        if(item.type === this.state.clinics) {
                            return (
                                <div key={index}>
                                    <p>{item.description}</p>
                                </div>
                            )
                        }
                        return null;
                    })}
                </div>
                <div className="clinics-page container">
                    {
                        clinics.map((item, index) =>{
                           if (item.companyRegist.specialization === this.state.clinics && item.companyRegist.premium) {
                               return (
                                   <div key={index} className="clinic-row row">
                                       <div className="col-sm-4 clinic-row-image">
                                           <img src={require(`../../assets/images/clinics/1.jpg`)} alt={index}/>
                                       </div>
                                       <div className="col-sm-8 clinic-row-description">
                                           <h3>{item.basicInfo.name}</h3>
                                           <p>{item.additionalData.facilityDescription}</p>
                                           <div className="d-flex justify-content-end">
                                               <Link className="btn-primary btn" to={`/find-popular/clinic-premium/${item.id}`}>Show</Link>
                                           </div>
                                       </div>
                                   </div>
                               )
                           }
                           return null;
                       })
                    }
                </div>
            </div>
        )
    }
}
export default PopularClinics;