import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContacts, editContacts } from 'store/operations';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  Button,
  Item,
  Wrapper,
  ButtonWrapper,
  ButtonModal,
} from './ContactItem.styled';

import { Modal, Input } from 'antd';

export function ContactItem({ contact }) {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState(contact.name);
  const [newNumber, setNewNumber] = useState(contact.number);

  const handleDeleteContact = contactId => {
    Confirm.show(
      'Delete contact',
      'Are you sure you want to delete this contact',
      'Yes',
      'No',
      () => {
        dispatch(deleteContacts(contactId));
        Notify.failure('Contact deleted');
      },
      () => {
        return;
      },
      {
        titleColor: '#8aa6a3',
        okButtonBackground: '#8aa6a3;',
      }
    );
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleNameChange = e => {
    setNewName(e.target.value);
  };

  const handleNumberChange = e => {
    setNewNumber(e.target.value);
  };
  const handleSave = () => {
    setShowModal(false);
    dispatch(
      editContacts({
        id: contact.id,
        name: newName,
        number: newNumber,
      })
    );
  };

  return (
    <>
      <Item>
        <Wrapper>
          <p>{contact.name}</p>
          <p>{contact.number}</p>
        </Wrapper>
        {
          <ButtonWrapper>
            <Button
              type="button"
              name="edit"
              onClick={() => setShowModal(true)}
            >
              Edit
            </Button>
            <Button
              type="button"
              name="delete"
              onClick={() => handleDeleteContact(contact.id)}
            >
              Delete
            </Button>
          </ButtonWrapper>
        }
      </Item>
      <Modal
        open={showModal}
        onCancel={handleCancel}
        footer={[
          <ButtonModal key="cancel" onClick={handleCancel}>
            Cancel
          </ButtonModal>,
          <ButtonModal key="save" onClick={handleSave}>
            Save
          </ButtonModal>,
        ]}
      >
        <div className="modal-content">
          <label>New Name:</label>
          <Input
            type="text"
            value={newName}
            onChange={handleNameChange}
            pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label>New Number:</label>
          <Input
            type="text"
            value={newNumber}
            onChange={handleNumberChange}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Phone number must be at least 10 digits long or follow the format +380931112233 or +38 093 333 4455."
            required
          />
        </div>
      </Modal>
    </>
  );
}
