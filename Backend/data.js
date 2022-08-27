import bcrypt from  "bcryptjs"
const data={
    users:[
        {
            name:"Ayodeji",
            email:"admin@example.com",
            password:bcrypt.hashSync("123456"),
            isAdmin:true,

        },
        {
            name:"Oyedapo",
            email:"user@example.com",
            password:bcrypt.hashSync("123456"),
            isAdmin:false,

        }

    ],
    products:[
        {

           // _id:'1',
            nameP: "Orange",
            caption:"Orange",
            category:"Fruit",
            image:"https://www.narayanahealth.org/blog/wp-content/uploads/2022/03/shutterstock_622663796.jpg",
            price:200,
            description:'loremmmmmm',
            rating:4.5,
            numberOfReviews:20,
            countStatus:30,
            

            

        },
        {
            //_id:'2',
            nameP: "coconut",
            caption:"Coconut",
            category:"Fruit",
            image:"https://t4.ftcdn.net/jpg/01/38/59/65/360_F_138596528_dG7J8xrEXROzGkE0PCgKjDWyclYUWfzz.jpg",
            price:200,
            description:'loremmmmmm',
            rating:3,
            numberOfReviews:20,
            countStatus:0,
            
        },
        
        {
            //_id:'3',
            nameP: "Shury",
            caption:"shury",
            category:"Fruit",
            image:"https://t4.ftcdn.net/jpg/01/38/59/65/360_F_138596528_dG7J8xrEXROzGkE0PCgKjDWyclYUWfzz.jpg",
            price:200,
            description:'loremmmmmm',
            rating:3.5,
            numberOfReviews:20,
            countStatus:17,
        },
        {
           // _id:'4',
            nameP: "Banana",
            caption:"banana",
            category:"Fruit",
            image:"https://www.narayanahealth.org/blog/wp-content/uploads/2022/03/shutterstock_622663796.jpg",
            price:200,
            description:'loremmmmmm',
            rating:4.5,
            numberOfReviews:20,
            countStatus:12,

        },
        {   
            //_id:'5',
            nameP: "Mango",
            caption:"mango",
            category:"Fruit",
            image:"https://t4.ftcdn.net/jpg/01/38/59/65/360_F_138596528_dG7J8xrEXROzGkE0PCgKjDWyclYUWfzz.jpg",
            price:200,
            description:'loremmmmmm',
            rating:2.0,
            numberOfReviews:20,
            countStatus:30,
        },
        
        { 
            //_id:'6',
            nameP: "Pawpaw",
            caption:"pawpaw",
            category:"Fruit",
            image:"https://t4.ftcdn.net/jpg/01/38/59/65/360_F_138596528_dG7J8xrEXROzGkE0PCgKjDWyclYUWfzz.jpg",
            price:200,
            description:'loremmmmmm',
            rating:5.0,
            numberOfReviews:20,
            countStatus:30,
        },
         {
            //_id:'7',
            nameP: "Tangrine",
            caption:"tangrine",
            category:"Fruit",
            image:"https://www.narayanahealth.org/blog/wp-content/uploads/2022/03/shutterstock_622663796.jpg",
            price:200,
            description:'loremmmmmm',
            rating:4.5,
            numberOfReviews:20,
            countStatus:30,
        },
        {
            //_id:'8',
            nameP: "Papaya",
            caption:"papaya",
            category:"Fruit",
            image:"https://t4.ftcdn.net/jpg/01/38/59/65/360_F_138596528_dG7J8xrEXROzGkE0PCgKjDWyclYUWfzz.jpg",
            price:200,
            description:'loremmmmmm',
            rating:4.5,
            numberOfReviews:20,
       
            countStatus:30,
        },
        
        {
           // _id:'9',
            nameP: "Shawa sharp",
            caption:"shawa ",
            category:"Fruit",
            image:"https://t4.ftcdn.net/jpg/01/38/59/65/360_F_138596528_dG7J8xrEXROzGkE0PCgKjDWyclYUWfzz.jpg",
            price:200,
            description:'loremmmmmm',
            rating:4.5,
            numberOfReviews:20,
         
            countStatus:30,
        }   ]
    
}

export default data