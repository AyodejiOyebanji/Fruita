import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Review from "../components/Review";



function MoreDetailsDesp() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>


       <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <div className="d-flex justify-content-center">

              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Description" value="1" />
                <Tab label="Reviews" value="2" />
                <Tab label="Shipping" value="3" />
              </TabList>
            </div>
          </Box>
          <TabPanel value="1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus illum sequi placeat dicta ex eaque accusamus, autem molestiae similique. Corporis consectetur nisi quidem dignissimos doloribus veritatis tempora, ad porro quos fugiat voluptate necessitatibus itaque illo in, cum vel eligendi amet sint accusamus debitis. Officiis eum hic dignissimos cupiditate at natus! Dolorem ut repellat cum a! Ab nesciunt ipsa consequuntur debitis odit magni vitae sunt consequatur labore officia, iste modi doloribus eos harum aspernatur iure quos? Voluptatibus asperiores est, cupiditate soluta architecto expedita sit consequuntur qui ratione odio error accusantium dolor quidem. Molestiae expedita quasi, harum dolore cum aliquam ducimus, nobis reiciendis sunt totam dolorem nulla inventore veniam nesciunt eos. A tenetur iusto, blanditiis ducimus tempora ex voluptatum? Voluptatum ullam temporibus consectetur amet enim illum magni aliquam optio iusto, rerum corrupti, autem quasi? Similique repellendus, cupiditate rem reprehenderit magni eos neque consectetur corporis reiciendis hic deserunt esse facilis suscipit ex, tempora illum tenetur cumque nam veniam eaque modi laudantium explicabo! Dolor ipsam voluptates fugit voluptate. Sit obcaecati dolores praesentium incidunt magnam qui eos fugiat alias voluptates commodi unde officia quia iste vitae voluptatem voluptas voluptatum, eum consectetur distinctio cupiditate dolor blanditiis explicabo? Ex ipsa voluptatem aliquam delectus libero soluta minus corporis! </TabPanel>
          <TabPanel value="2">
            <Review />

          </TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box> 


    </div>
  )
}

export default MoreDetailsDesp

