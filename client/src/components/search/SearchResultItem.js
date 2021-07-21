import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchResultItem =({
    profile: {
        user: { _id, name, avatar },
        degree,
        role,
        expertise,
        bio
      }
}) => {
    return (
        <div className='profile bg-light'>
            <img src={avatar} alt='' className='round-img' />
            <div>
                <h2>{name}</h2>
                <p>
                <Fragment>
                    {role === 'Both' ? (
                        <i className="fas fa-user-tag"> Tutor & Student </i>
                    ) : (
                        <i className="fas fa-user-tag"> {" " + role} </i>
                    )
                    }
                </Fragment>
                </p>
                <p>
                    <i className="far fa-address-card"> {" " + bio} </i>
                </p>
            </div>
            
            <p>
                <i className="fas fa-award">{" " + degree} </i> 
            </p>
            
            <Link to={`/profile/${_id}`} target="_blank" className='btn btn-primary'>
                <i className="fas fa-user-circle"> </i> View Profile
            </Link>

            <ul>
                <Fragment>
                    {(expertise.map((expertise_item, index) => (
                        <li  key={index} className='text-primary'>
                            <i className='fas fa-check' /> {expertise_item.area}
                        </li>
                    )))}
                </Fragment>
            </ul>
        </div>
    )
}

SearchResultItem.propTypes = {
    profile: PropTypes.object.isRequired
};
  
export default SearchResultItem;