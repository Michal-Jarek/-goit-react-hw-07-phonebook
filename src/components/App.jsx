import Section from './Section/Section';
import SignForm from './SignForm/SignForm';
import UserList from './UserList/UserList';
import Filter from './Filter/Filter';

export const App = () => (
  <div
    style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      paddingLeft: '15px',
      alignItems: 'flex-start',
      fontSize: 40,
      color: '#010101',
      backgroundColor: '#e6e3e3',
    }}
  >
    <Section title="Phonebook">
      <SignForm />
    </Section>

    <Section title="Contacts">
      <UserList>
        <Filter />
      </UserList>
    </Section>
  </div>
);
