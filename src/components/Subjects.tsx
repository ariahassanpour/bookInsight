import { bookSubjects } from "../consts/subjects";
const Subjects = () => {
  return (
    <ul>
      {bookSubjects.map((subj) => (
        <li key={subj}>{subj}</li>
      ))}
    </ul>
  );
};

export default Subjects;
