const fs = require('fs');

/*
 * A function that reads a file asynchronously with Node JS 
 * and returns a Promise
 */
function countStudents(path) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(path,
      'utf-8',
      (error, results) => {
        if (error) {
          reject(Error('Cannot load the database'));
        } else {
          const lines = results.split('\n');
          let i = 0;
          let countStudents = 0;
          let message = '';
          const fields = {};

          const getLines = () => {
            for (const line of lines) {
              if (line.trim() !== '' && i > 0) {
                countStudents += 1;
				const [fname, lname, age, field] = line.split(',');
                if (!fields[field]) {
                  fields[field] = {
                    count: 1,
                    students: [fname],
                  };
                } else {
                  const newCount = fields[field].count + 1;
                  const newStudents = (fields[field].students).concat(fname);
                  fields[field] = {
                    count: newCount,
                    students: newStudents,
                  };
                }
              }
              i += 1;
            }
          };

          const display = async () => {
            getLines();
            console.log(`Number of students: ${countStudents}`);
            message += `Number of students: ${countStudents}\n`;
            for (const field of Object.keys(fields)) {
              const n = fields[field].count;
              const names = fields[field].students.join(', ');
              console.log(`Number of students in ${field}: ${n}. List: ${names}`);
              message += `Number of students in ${field}: ${n}. List: ${names}\n`;
            }
            message = message.slice(0, -1);
          };

          display();
          resolve(message);
        }
      });
  });

  return promise;
}

module.exports = countStudents;
