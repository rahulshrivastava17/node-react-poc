import React, { Fragment } from 'react';
import ProtoTypes from 'prop-types';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import {deleteEducation} from '../../actions/profile';

const Education = ({education, deleteEducation}) =>{
    const educations = education.map(edu => (
        <tr key={edu._id}>
            <td>{edu.school}</td>
            <td className="hide-sm">{edu.degree}</td>
            <td>
                <Moment format='YYYY/MM/DD'>{edu.from}</Moment> - {' '}
                {edu.to === null ? (' Now') : (<Moment format='YYYY/MM/DD'>{edu.to}</Moment>)}
            </td>
            <td>
                <button onClick={() => deleteEducation(edu._id)} className='btn btn-danger'>Delete</button>
            </td>
        </tr>
    ));
    return(
        <Fragment>
            <h2 className="my-2">Educational Credentials</h2>
            <table className="table">
             <thead>
                 <tr>
                     <th>School</th>
                     <th className="hide-sm">Degree</th>
                     <th className="hide-sm">Years</th>
                 </tr>
             </thead>
             <tbody>{educations}</tbody>
            </table>
        </Fragment>
    );
};

Education.protoTypes = {
    education: ProtoTypes.array.isRequired,
    deleteEducation: ProtoTypes.func.isRequired
};

export default connect(null, {deleteEducation})(Education);