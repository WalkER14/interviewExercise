import {_ as Lodash} from 'lodash'


const lorem ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const exampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...";

const exampleData = {
    title: "example data",
    logo: "",
    cards:[{
      img:require('./assets/images/image1.png'),
      tagIcon:"",
      tag:"JOB",
      header:"Director of Data Science",
      sub:"STANFORD, CT BY SPECTRUM",
      text: exampleText
    },
    {
        img:"../assets/images/image1.png",
        tagIcon:"",
        tag:"JOB",
        header:"Director of Data Science & Analytics",
        sub:"STANFORD, CT BY SPECTRUM",
        text: exampleText
    },
        {
            img:"../assets/images/image1.png",
        tagIcon:"",
    tag:"JOB",
    header:"Marketing Director & Interface",
    sub:"STANFORD, CT BY SPECTRUM",
    text: exampleText
},
        {
            img:"../assets/images/image1.png",
            tagIcon:"",
            tag:"JOB",
            header:"Senior Designer UX Experience",
            sub:"STANFORD, CT BY SPECTRUM",
            text: exampleText
        },
        {
            img:"../assets/images/image1.png",
            tagIcon:"",
            tag:"JOB",
            header:"Senior Marketing Consultant",
            sub:"STANFORD, CT BY SPECTRUM",
            text: exampleText
        }],
    topOptions:{
      searchExample: {keyword:'Discover'},
      buttons:[
          {
              text:'ADD JOB'
          },
          {
              text:'ADD EVENT'
          }
      ]
    },

    menuButtons: [
        {
            icon:"",
            text:"Events"
        },
        {
            icon:"",
            text:"Jobs"
        },
        {
            icon:"",
            text:"Community"
        }
    ],
    linksSections: [
        ['About Us','Contact Us']
        ,
        ['Comunity','Organizations']
        ,
        ['Privacy Police','Cookie Police', 'Data Privacy']
    ]
        ,
    aboutUs: {
        title: "CO 2018",
        text: "BlueOceanTech"
    }

};

export default exampleData;