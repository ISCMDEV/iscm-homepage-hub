const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, "../posts");
const dirPathEvents = path.join(__dirname, "../events");
const dirPathPapers = path.join(__dirname, "../papers");
const dirPathMastersPrograms = path.join(__dirname, "../bachelors");
const dirPathPHDsPrograms = path.join(__dirname, "../phds");
const dirPathShortCourses = path.join(__dirname, "../courses");
const dirPathPeopleProfiles = path.join(__dirname, "../people");

// const dirPathPages = path.join(__dirname, "../src/pages/content");
let postlist = [];
let eventslist = [];
let paperslist = [];
let bachelorslist = [];

let phdslist = [];
let courseslist = [];
let peoplelist = [];

// let pagelist = [];
//Init values
let bachelorsID = 1;
let phdsID = 1;
let coursesID = 1;
const months = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  10: "October",
  11: "November",
  12: "December",
};

const formatDate = (date) => {
  const datetimeArray = date.split("T");
  const dateArray = datetimeArray[0].split("-");
  const timeArray = datetimeArray[1].split(":");
  const month = dateArray[1];
  const monthName = months[dateArray[1]];
  const day = dateArray[2];
  const year = dateArray[0];
  const time = `${timeArray[0]}:${timeArray[1]}`;

  return {
    month: month,
    monthName: monthName,
    day: day,
    year: year,
    time: time,
  };
};

const getPosts = () => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.log("Failed to list contents of directory: " + err);
    }
    let ilist = [];
    files.forEach((file, i) => {
      let obj = {};
      let post;
      fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
        const getMetadataIndices = (acc, elem, i) => {
          if (/^---/.test(elem)) {
            acc.push(i);
          }
          return acc;
        };
        const parseMetadata = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            let metadata = lines.slice(
              metadataIndices[0] + 1,
              metadataIndices[1]
            );
            metadata.forEach((line) => {
              obj[line.split(": ")[0]] = line.split(": ")[1];
            });
            return obj;
          }
        };
        const parseContent = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            lines = lines.slice(metadataIndices[1] + 1, lines.length);
          }
          return lines.join("\n");
        };
        const lines = contents.split("\n");
        const metadataIndices = lines.reduce(getMetadataIndices, []);
        const metadata = parseMetadata({ lines, metadataIndices });
        const content = parseContent({ lines, metadataIndices });
        const parsedDate = metadata.date
          ? formatDate(metadata.date)
          : new Date();
        const publishedDate = `${parsedDate["monthName"]} ${parsedDate["day"]}, ${parsedDate["year"]}`;
        const datestring = `${parsedDate["year"]}-${parsedDate["month"]}-${parsedDate["day"]}T${parsedDate["time"]}:00`;
        const date = new Date(datestring);
        const timestamp = date.getTime() / 1000;
        post = {
          id: timestamp,
          title: metadata.title ? metadata.title : "No title given",
          author: metadata.author ? metadata.author : "No author given",
          date: publishedDate ? publishedDate : "No date given",
          time: parsedDate["time"],
          thumbnail: metadata.thumbnail,
          content: content ? content : "No content given",
        };
        postlist.push(post);
        ilist.push(i);
        if (ilist.length === files.length) {
          const sortedList = postlist.sort((a, b) => {
            return a.id < b.id ? 1 : -1;
          });
          let data = JSON.stringify(sortedList);
          fs.writeFileSync("src/posts.json", data);
        }
      });
    });
  });
  return;
};
const getEvents = () => {
  fs.readdir(dirPathEvents, (err, files) => {
    if (err) {
      return console.log("Failed to list contents of directory: " + err);
    }
    let ilist = [];
    files.forEach((file, i) => {
      let obj = {};
      let post;
      fs.readFile(`${dirPathEvents}/${file}`, "utf8", (err, contents) => {
        const getMetadataIndices = (acc, elem, i) => {
          if (/^---/.test(elem)) {
            acc.push(i);
          }
          return acc;
        };
        const parseMetadata = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            let metadata = lines.slice(
              metadataIndices[0] + 1,
              metadataIndices[1]
            );
            metadata.forEach((line) => {
              obj[line.split(": ")[0]] = line.split(": ")[1];
            });
            return obj;
          }
        };
        const parseContent = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            lines = lines.slice(metadataIndices[1] + 1, lines.length);
          }
          return lines.join("\n");
        };
        const lines = contents.split("\n");
        const metadataIndices = lines.reduce(getMetadataIndices, []);
        const metadata = parseMetadata({ lines, metadataIndices });
        const content = parseContent({ lines, metadataIndices });
        const parsedDate = metadata.date
          ? formatDate(metadata.date)
          : new Date();
        const publishedDate = `${parsedDate["monthName"]} ${parsedDate["day"]}, ${parsedDate["year"]}`;
        const datestring = `${parsedDate["year"]}-${parsedDate["month"]}-${parsedDate["day"]}T${parsedDate["time"]}:00`;
        const date = new Date(datestring);
        const timestamp = date.getTime() / 1000;
        post = {
          id: timestamp,
          title: metadata.title ? metadata.title : "No title given",
          author: metadata.author ? metadata.author : "No author given",
          date: publishedDate ? publishedDate : "No date given",
          time: parsedDate["time"],
          thumbnail: metadata.thumbnail,
          content: content ? content : "No content given",
        };
        eventslist.push(post);
        ilist.push(i);
        if (ilist.length === files.length) {
          const sortedList = eventslist.sort((a, b) => {
            return a.id < b.id ? 1 : -1;
          });
          let data = JSON.stringify(sortedList);
          fs.writeFileSync("src/events.json", data);
        }
      });
    });
  });
  return;
};
const getPapers = () => {
  fs.readdir(dirPathPapers, (err, files) => {
    if (err) {
      return console.log("Failed to list contents of directory: " + err);
    }
    let ilist = [];
    files.forEach((file, i) => {
      let obj = {};
      let post;
      fs.readFile(`${dirPathPapers}/${file}`, "utf8", (err, contents) => {
        const getMetadataIndices = (acc, elem, i) => {
          if (/^---/.test(elem)) {
            acc.push(i);
          }
          return acc;
        };
        const parseMetadata = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            let metadata = lines.slice(
              metadataIndices[0] + 1,
              metadataIndices[1]
            );
            metadata.forEach((line) => {
              obj[line.split(": ")[0]] = line.split(": ")[1];
            });
            return obj;
          }
        };
        const parseContent = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            lines = lines.slice(metadataIndices[1] + 1, lines.length);
          }
          return lines.join("\n");
        };
        const lines = contents.split("\n");
        const metadataIndices = lines.reduce(getMetadataIndices, []);
        // console.log(metadataIndices);
        const metadata = parseMetadata({ lines, metadataIndices });
        // console.log(metadata);
        const content = parseContent({ lines, metadataIndices });
        const parsedDate = metadata.date
          ? formatDate(metadata.date)
          : new Date();
        const publishedDate = `${parsedDate["monthName"]} ${parsedDate["day"]}, ${parsedDate["year"]}`;
        const datestring = `${parsedDate["year"]}-${parsedDate["month"]}-${parsedDate["day"]}T${parsedDate["time"]}:00`;
        const date = new Date(datestring);
        const timestamp = date.getTime() / 1000;
        post = {
          id: timestamp,
          title: metadata.title ? metadata.title : "No title given",
          author: metadata.author ? metadata.author : "No author given",
          date: publishedDate ? publishedDate : "No date given",
          time: parsedDate["time"],
          thumbnail: metadata.thumbnail,
          description: metadata.description,
          category: metadata.category,
          content: content ? content : "No content given",
        };
        paperslist.push(post);
        ilist.push(i);
        // console.log(paperslist);
        //SORTING BY NEWEST
        if (ilist.length === files.length) {
          const sortedList = paperslist.sort((a, b) => {
            return a.id < b.id ? 1 : -1;
          });
          let data = JSON.stringify(sortedList);
          fs.writeFileSync("src/papers.json", data);
        }
      });
    });
  });
  return;
};
/* const getPages = () => {
  fs.readdir(dirPathPages, (err, files) => {
    if (err) {
      return console.log("Failed to list contents of directory: " + err);
    }
    files.forEach((file, i) => {
      let page;
      fs.readFile(`${dirPathPages}/${file}`, "utf8", (err, contents) => {
        page = {
          content: contents,
        };
        pagelist.push(page);
        let data = JSON.stringify(pagelist);
        fs.writeFileSync("src/pages.json", data);
      });
    });
  });
  return;
}; */

const getProgramsBachelors = () => {
  fs.readdir(dirPathMastersPrograms, (err, files) => {
    if (err) {
      return console.log("Failed to list contents of directory: " + err);
    }
    let ilist = [];
    files.forEach((file, i) => {
      let obj = {};
      let post;
      fs.readFile(
        `${dirPathMastersPrograms}/${file}`,
        "utf8",
        (err, contents) => {
          const getMetadataIndices = (acc, elem, i) => {
            if (/^---/.test(elem)) {
              acc.push(i);
            }
            return acc;
          };
          const parseMetadata = ({ lines, metadataIndices }) => {
            if (metadataIndices.length > 0) {
              let metadata = lines.slice(
                metadataIndices[0] + 1,
                metadataIndices[1]
              );
              metadata.forEach((line) => {
                obj[line.split(": ")[0]] = line.split(": ")[1];
              });
              return obj;
            }
          };
          const parseContent = ({ lines, metadataIndices }) => {
            if (metadataIndices.length > 0) {
              lines = lines.slice(metadataIndices[1] + 1, lines.length);
            }
            return lines.join("\n");
          };
          const lines = contents.split("\n");
          const metadataIndices = lines.reduce(getMetadataIndices, []);
          // console.log(metadataIndices);
          const metadata = parseMetadata({ lines, metadataIndices });
          // console.log(metadata);
          const content = parseContent({ lines, metadataIndices });
          const parsedDate = metadata.date
            ? formatDate(metadata.date)
            : new Date();
          const publishedDate = `${parsedDate["monthName"]} ${parsedDate["day"]}, ${parsedDate["year"]}`;
          // const datestring = `${parsedDate["year"]}-${parsedDate["month"]}-${parsedDate["day"]}T${parsedDate["time"]}:00`;
          // const date = new Date(datestring);
          // const timestamp = date.getTime() / 1000;
          post = {
            id: bachelorsID++,
            title: metadata.title ? metadata.title : "No title given",
            author: metadata.author ? metadata.author : "No author given",
            date: publishedDate ? publishedDate : "No date given",
            time: parsedDate["time"],
            thumbnail: metadata.thumbnail,
            description: metadata.description,
            content: content ? content : "No content given",
          };
          bachelorslist.push(post);
          ilist.push(i);
          // console.log(bachelorslist);
          //SORTING BY NEWEST
          if (ilist.length === files.length) {
            const sortedList = bachelorslist.sort((a, b) => {
              return a.id < b.id ? 1 : -1;
            });
            let data = JSON.stringify(sortedList);
            fs.writeFileSync("src/bachelors.json", data);
          }
        }
      );
    });
  });
  return;
};

const getProgramsPHDS = () => {
  fs.readdir(dirPathPHDsPrograms, (err, files) => {
    if (err) {
      return console.log("Failed to list contents of directory: " + err);
    }
    let ilist = [];
    files.forEach((file, i) => {
      let obj = {};
      let post;
      // let programID = 1;
      fs.readFile(`${dirPathPHDsPrograms}/${file}`, "utf8", (err, contents) => {
        const getMetadataIndices = (acc, elem, i) => {
          if (/^---/.test(elem)) {
            acc.push(i);
          }
          return acc;
        };
        const parseMetadata = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            let metadata = lines.slice(
              metadataIndices[0] + 1,
              metadataIndices[1]
            );
            metadata.forEach((line) => {
              obj[line.split(": ")[0]] = line.split(": ")[1];
            });
            return obj;
          }
        };
        const parseContent = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            lines = lines.slice(metadataIndices[1] + 1, lines.length);
          }
          return lines.join("\n");
        };
        const lines = contents.split("\n");
        const metadataIndices = lines.reduce(getMetadataIndices, []);
        // console.log(metadataIndices);
        const metadata = parseMetadata({ lines, metadataIndices });
        // console.log(metadata);
        const content = parseContent({ lines, metadataIndices });
        const parsedDate = metadata.date
          ? formatDate(metadata.date)
          : new Date();
        const publishedDate = `${parsedDate["monthName"]} ${parsedDate["day"]}, ${parsedDate["year"]}`;
        // const datestring = `${parsedDate["year"]}-${parsedDate["month"]}-${parsedDate["day"]}T${parsedDate["time"]}:00`;
        // const date = new Date(datestring);
        // const timestamp = date.getTime() / 1000;
        post = {
          id: phdsID++,
          title: metadata.title ? metadata.title : "No title given",
          author: metadata.author ? metadata.author : "No author given",
          date: publishedDate ? publishedDate : "No date given",
          time: parsedDate["time"],
          thumbnail: metadata.thumbnail,
          description: metadata.description,
          content: content ? content : "No content given",
        };
        phdslist.push(post);
        ilist.push(i);
        // console.log(bachelorslist);
        //SORTING BY NEWEST
        if (ilist.length === files.length) {
          const sortedList = phdslist.sort((a, b) => {
            return a.id < b.id ? 1 : -1;
          });
          let data = JSON.stringify(sortedList);
          fs.writeFileSync("src/phds.json", data);
        }
      });
    });
  });
  return;
};

const getProgramsCourses = () => {
  fs.readdir(dirPathShortCourses, (err, files) => {
    if (err) {
      return console.log("Failed to list contents of directory: " + err);
    }
    let ilist = [];
    files.forEach((file, i) => {
      let obj = {};
      let post;
      // let programID = 1;
      fs.readFile(`${dirPathShortCourses}/${file}`, "utf8", (err, contents) => {
        const getMetadataIndices = (acc, elem, i) => {
          if (/^---/.test(elem)) {
            acc.push(i);
          }
          return acc;
        };
        const parseMetadata = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            let metadata = lines.slice(
              metadataIndices[0] + 1,
              metadataIndices[1]
            );
            metadata.forEach((line) => {
              obj[line.split(": ")[0]] = line.split(": ")[1];
            });
            return obj;
          }
        };
        const parseContent = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            lines = lines.slice(metadataIndices[1] + 1, lines.length);
          }
          return lines.join("\n");
        };
        const lines = contents.split("\n");
        const metadataIndices = lines.reduce(getMetadataIndices, []);
        // console.log(metadataIndices);
        const metadata = parseMetadata({ lines, metadataIndices });
        // console.log(metadata);
        const content = parseContent({ lines, metadataIndices });
        const parsedDate = metadata.date
          ? formatDate(metadata.date)
          : new Date();
        const publishedDate = `${parsedDate["monthName"]} ${parsedDate["day"]}, ${parsedDate["year"]}`;
        // const datestring = `${parsedDate["year"]}-${parsedDate["month"]}-${parsedDate["day"]}T${parsedDate["time"]}:00`;
        // const date = new Date(datestring);
        // const timestamp = date.getTime() / 1000;

        post = {
          id: coursesID++,
          title: metadata.title ? metadata.title : "No title given",
          author: metadata.author ? metadata.author : "No author given",
          date: publishedDate ? publishedDate : "No date given",
          time: parsedDate["time"],
          thumbnail: metadata.thumbnail,
          description: metadata.description,
          content: content ? content : "No content given",
        };
        courseslist.push(post);
        ilist.push(i);
        // console.log(courseslist);
        //SORTING BY NEWEST
        if (ilist.length === files.length) {
          const sortedList = courseslist.sort((a, b) => {
            return a.id < b.id ? 1 : -1;
          });
          let data = JSON.stringify(sortedList);
          fs.writeFileSync("src/courses.json", data);
        }
      });
    });
  });
  return;
};

const getPeopleProfiles = () => {
  fs.readdir(dirPathPeopleProfiles, (err, files) => {
    if (err) {
      return console.log("Failed to list contents of directory: " + err);
    }
    let ilist = [];
    files.forEach((file, i) => {
      let obj = {};
      let post;
      // let programID = 1;
      fs.readFile(
        `${dirPathPeopleProfiles}/${file}`,
        "utf8",
        (err, contents) => {
          const getMetadataIndices = (acc, elem, i) => {
            if (/^---/.test(elem)) {
              acc.push(i);
            }
            return acc;
          };
          const parseMetadata = ({ lines, metadataIndices }) => {
            if (metadataIndices.length > 0) {
              let metadata = lines.slice(
                metadataIndices[0] + 1,
                metadataIndices[1]
              );
              metadata.forEach((line) => {
                obj[line.split(": ")[0]] = line.split(": ")[1];
              });
              return obj;
            }
          };
          const parseContent = ({ lines, metadataIndices }) => {
            if (metadataIndices.length > 0) {
              lines = lines.slice(metadataIndices[1] + 1, lines.length);
            }
            return lines.join("\n");
          };
          const lines = contents.split("\n");
          const metadataIndices = lines.reduce(getMetadataIndices, []);
          // console.log(metadataIndices);
          const metadata = parseMetadata({ lines, metadataIndices });
          // console.log(metadata);
          const content = parseContent({ lines, metadataIndices });
          const parsedDate = metadata.date
            ? formatDate(metadata.date)
            : new Date();
          const publishedDate = `${parsedDate["monthName"]} ${parsedDate["day"]}, ${parsedDate["year"]}`;
          // const datestring = `${parsedDate["year"]}-${parsedDate["month"]}-${parsedDate["day"]}T${parsedDate["time"]}:00`;
          // const date = new Date(datestring);
          // const timestamp = date.getTime() / 1000;

          post = {
            id: metadata.id,
            title: metadata.title ? metadata.title : "No title given",
            date: publishedDate ? publishedDate : "No date given",
            time: parsedDate["time"],
            content: content ? content : "No content given",
          };
          peoplelist.push(post);
          ilist.push(i);
          // console.log(courseslist);
          //SORTING BY NEWEST
          if (ilist.length === files.length) {
            const sortedList = peoplelist.sort((a, b) => {
              return a.id < b.id ? 1 : -1;
            });
            let data = JSON.stringify(sortedList);
            fs.writeFileSync("src/people.json", data);
          }
        }
      );
    });
  });
  return;
};
getPosts();
getEvents();
getPapers();
getProgramsBachelors();
getProgramsPHDS();
getProgramsCourses();
getPeopleProfiles();
// getPages();
