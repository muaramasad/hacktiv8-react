const videoData = [
   {
       name: 'Miss Scarlet',
       present: true,
       rooms: [
           {kitchen: false},
           {ballroom: false},
           {conservatory: false},
           {'dining room': false},
           {'billiard room': false},
           {library: false}
       ]
   },
   {
       name: 'Mrs. White',
       present: false,
       rooms: [
           {kitchen: false},
           {ballroom: false},
           {conservatory: false},
           {'dining room': false},
           {'billiard room': false},
           {library: false}
       ]
   },
   {
       name: 'Reverend Green',
       present: true,
       rooms: [
           {kitchen: true},
           {ballroom: false},
           {conservatory: false},
           {'dining room': false},
           {'billiard room': false},
           {library: false}
       ]
   },
   {
       name: 'Rusty',
       present: false,
       rooms: [
           {kitchen: false},
           {ballroom: false},
           {conservatory: false},
           {'dining room': false},
           {'billiard room': false},
           {library: false}
       ]
   },
   {
       name: 'Colonel Mustard',
       present: true,
       rooms: [
           {kitchen: false},
           {ballroom: false},
           {conservatory: false},
           {'dining room': false},
           {'billiard room': false},
           {library: false}
       ]
   },
   {
       name: 'Professor Plum',
       present: false,
       rooms: [
           {kitchen: false},
           {ballroom: false},
           {conservatory: false},
           {'dining room': false},
           {'billiard room': false},
           {library: false}
       ]
   }
];

const result = videoData.filter((value) => value.present === true && value.rooms[0].kitchen === true);

const videoName = videoData.map(value => value.name);

const getTrue = videoData.reduce((a , b) => {
 if(b.present === true){
   a++;
 }
 return a;
},0);

console.log(getTrue);