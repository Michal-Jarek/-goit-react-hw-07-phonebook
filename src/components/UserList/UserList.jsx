import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { filter, getContacts } from 'redux/selectors';

import scss from './UserList.module.scss';

const UserList = ({ children }) => {
  const contactsArray = useSelector(getContacts);
  const contactsFilter = useSelector(filter);

  const dispatch = useDispatch();

  const handleFilter = (filter, array) => {
    if (filter.length === 0) return contactsArray;
    else {
      const arrayCopy = [];
      for (let a = 0; a < array.length; a++)
        if (array[a].name.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
          arrayCopy.push(array[a]);
      return arrayCopy;
    }
  };

  useEffect(() => {
    localStorage.setItem('Contacts', JSON.stringify(contactsArray));
  }, [contactsArray]);

  return (
    <>
      {children}
      <ul className={scss.list}>
        {handleFilter(contactsFilter, contactsArray).map(
          ({ name, number, id }) => (
            <li className={scss.listItem} key={id}>
              {name}: {number}
              <button
                className={scss.button}
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          )
        )}
      </ul>
    </>
  );
};

UserList.propTypes = {
  children: PropTypes.element,
};

export default UserList;
