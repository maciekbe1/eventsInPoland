import React from 'react';
import {FormattedMessage} from 'react-intl';


const ChooseClinic = () => {
    return (
        <div className="choose-clinic container-fluid">
            <div className="container p-0">
                <div className="row">
                    <div className="col-lg-6 offeset-lg-3 text-center">
                        <h2>
                           <FormattedMessage id="choose.clinic.title" defaultMessage={`Need help diagnose the disease?`}/>
                        </h2>
                        <p>
                            <FormattedMessage id="choose.clinic.text" defaultMessage={`The Get Well in Poland Care Team is here to help you with any questions you have. Just let us know what you are looking for and we will get back to you as soon as possible.`}/>
                        </p>
                        <a href="https://qang.bpower2.com/index.php/workflow/workflowInstance/create/wc_id/379">
                            <FormattedMessage id="choose.clinic.help.button" defaultMessage={`help me diagnose the disease`} />
                        </a>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default ChooseClinic;