import React from 'react';
import { Container } from 'react-bootstrap';

const FAQ = () => {
  return (
    <Container>
      <h2 className='mt-5 bg-danger text-white py-2'>Frequently asked questions</h2>
      <div>
        <h5>- What is the purpose of Lit-feather?
        </h5>
        <p className='text-start'><small>Litfeather has an objective to help the students, teachers and researchers around the globe to help aquire thorough literature knowledge via its qualitful courses. It has a vast collection of more than thousand++ courses on profound poems, dramas, stories and many more.</small></p>
      </div>
      <div>
        <h5>
          - How many courses does Lit-feather have?
        </h5>
        <p className='text-start'><small>Litfeather has courses on almost every possible emminent poems, stories and dramas out there. AUthors such as Elizabeth Browning, William Wordsworth, John Keats and many more are thoroughly explained here in our courses.</small></p>
      </div>
      <div>
        <h5>
          - What do I need to register in the courses of Lit-feather?
        </h5>
        <p className='text-start'><small>One only needs his email and picture link to enroll into any of our courses.</small></p>
      </div>
      <div>
        <h5>
          - Are the courses here worth the time and money?
        </h5>
        <p className='text-start'><small>Notes and analysis from our courses are used in many colleges and universities worldwide via thousands of students, teachers and researchers.</small></p>
      </div>
      <div>
        <h5>
         - What are the advantages provides when enrolled into one course?
        </h5>
        <p className='text-start'><small>Here, if enrolled into one, the student will get lecture sheets with thorough analysis and explanation of the respective course and along with that the access of that particular course will be available for lifetime.</small></p>
      </div>
    </Container>
  );
};

export default FAQ;