/* eslint-disable react/no-unescaped-entities */
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer  () {
  return (
    <footer className="bg-dark text-white text-center py-2">
      <p>© {new Date().getFullYear()} Giuseppe's React App. All rights reserved.</p>
    </footer>
  );
};
// si può scrivere anche con const così 
//const Footer = function(){
   // return (
     //   etc. etc.
      // )
  //  }
export default Footer;
