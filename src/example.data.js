

const exampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing sed...";

const exampleData = {
    title: "example data",
    logo: "",
    cards:[{
        img:require('./assets/images/image1.png'),
        tagIcon:"cloud",
        tag:"JOB",
        header:"Director of Data Science",
        sub:"STANFORD, CT BY SPECTRUM",
        text: exampleText
    },{
        img:require('./assets/images/image2.png'),
        tagIcon:"cloud",
        tag:"JOB",
        header:"Director of Data Science & Analytics",
        sub:"STANFORD, CT BY SPECTRUM",
        text: exampleText
    },{
        img:require('./assets/images/image3.png'),
        tagIcon:"cloud",
        tag:"JOB",
        header:"Marketing Director & Interface",
        sub:"STANFORD, CT BY SPECTRUM",
        text: exampleText
    },{
        img:require('./assets/images/image4.png'),
        tagIcon:"cloud",
        tag:"JOB",
        header:"Senior Designer UX Experience",
        sub:"STANFORD, CT BY SPECTRUM",
        text: exampleText
    },{
        img:require('./assets/images/image1.png'),
        tagIcon:"cloud",
        tag:"JOB",
        header:"Senior Marketing Consultant",
        sub:"STANFORD, CT BY SPECTRUM",
        text: exampleText
    },{
        img:require('./assets/images/image2.png'),
        tagIcon:"cloud",
        tag:"JOB",
        header:"Senior Marketing Consultant",
        sub:"STANFORD, CT BY SPECTRUM",
        text: exampleText
    },{
        img:require('./assets/images/image3.png'),
        tagIcon:"cloud",
        tag:"JOB",
        header:"Senior Marketing Consultant",
        sub:"STANFORD, CT BY SPECTRUM",
        text: exampleText
    },{
        img:require('./assets/images/image4.png'),
        tagIcon:"cloud",
        tag:"JOB",
        header:"Senior Marketing Consultant",
        sub:"STANFORD, CT BY SPECTRUM",
        text: exampleText
    },{
        img:require('./assets/images/image1.png'),
        tagIcon:"cloud",
        tag:"JOB",
        header:"Senior Marketing Consultant",
        sub:"STANFORD, CT BY SPECTRUM",
        text: exampleText
    },{
        img:require('./assets/images/image2.png'),
        tagIcon:"cloud",
        tag:"JOB",
        header:"Senior Marketing Consultant",
        sub:"STANFORD, CT BY SPECTRUM",
        text: exampleText
    }],
    topOptions:{
      searchExample: {keyword:'Discover'},
      buttons:[
          {
              text:'POST JOB'
          },
          {
              text:'POST EVENT'
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
        copyright:"© ",
        title: "CO 2018",
        text: "BlueOceanTech"
    }

};

export default exampleData;