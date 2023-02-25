import { useState } from 'react';
import styles from './Members.css';

export default function Members() {
  const [members, setMembers] = useState([
    {
      name: 'Miles McCoy',
      profession: 'urban farmer',
      instrument: 'Drums and Vocals',
    },
    {
      name: 'Dan Heims',
      profession: 'horticulturist',
      instrument: 'Blues Harp',
    },
    {
      name: 'Kirk Heims',
      profession: 'school teacher',
      instrument: 'Rhythm Guitar',
    },
    {
      name: 'Hans Ettlin',
      profession: 'architect',
      instrument: 'Lead and Rhythm Guitar',
    },
    {
      name: 'Bradden Jensen',
      profession: 'doctor/pathologist',
      instrument: 'Lead and Rhythm Guitar',
    },
    { name: 'Bill Robbins', profession: 'engineer', instrument: 'Bass Guitar' },
  ]);

  return (
    <main className={styles.Members}>
      <h1 className={styles.Hone}>Members</h1>
      {members.map((member) => {
        return (
          <div key={member.name} className={styles.Musician}>
            <p className={styles.Para}>{member.name}</p>
            <ul className={styles.List}>
              <li>{member.profession}</li>
              <li>{member.instrument}</li>
            </ul>
          </div>
        );
      })}
    </main>
  );
}
