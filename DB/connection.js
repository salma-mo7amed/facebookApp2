// import modules:
import {Sequelize} from 'sequelize'
// create connection:
let sequelize = new Sequelize('mysql://ut4loryw0hqdaa5u:tTII0NYhEbdZvawNUtaA@bkplcfnmr3g0sdaeawju-mysql.services.clever-cloud.com:3306/bkplcfnmr3g0sdaeawju')

sequelize.authenticate()
  .then(() => {
    console.log("db connected successfully");
  })
  .catch((err) => {
    console.log("failed to connect to db", err);
  });



export default sequelize