import React from "react";
import classes from './footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <div className="footer-content">
        <p>&copy; 2025 MyWebsite. All Rights Reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;  