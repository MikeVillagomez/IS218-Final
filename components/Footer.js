// components/Footer.js
import React from 'react';
import { Link } from '@nextui-org/react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}> {/* Added ID for smooth scroll targeting */}
      <div className={styles.footerColumn}>
        <h3>About Blend-brew Tea</h3>
        <p>Discover the art of fine tea with Blend-brew Tea. Founded in 2023 with a passion for sourcing the finest ingredients, we craft blends that offer a symphony of flavors, capturing the essence of nature in every cup. Committed to sustainable practices, we bring you an authentic tea experience that celebrates tradition and innovation. Join us on a journey of taste, quality, and the pure joy of tea.</p>
      </div>
      <div className={styles.footerColumn}>
        <h3>FAQ</h3>
        <p>Ordering & Shipping</p>
        <p>Returns and Exchanges</p>
        <p>Payment Options</p>
      </div>
      <div className={styles.footerColumn}>
        <h3>Contact Us</h3>
        <Link href="https://www.google.com/maps/place/411+36th+St,+Union+City,+NJ+07087/@40.7736258,-74.0297527,17z/data=!3m1!4b1!4m6!3m5!1s0x89c258270006f143:0x36caa1c75d8e57be!8m2!3d40.7736218!4d-74.0271778!16s%2Fg%2F11c1ghw3_9?entry=ttu" className={styles.customLink}>
          <span className={styles.linkLabel}>Location:</span> 411 36th street, Union City NJ
        </Link>
        <Link href="mailto:villagomezmike5@gmail.com" className={styles.customLink}>
          <span className={styles.linkLabel}>Email:</span> villagomezmike5@gmail.com
        </Link>
        <Link href="tel:201-878-0127" className={styles.customLink}>
          <span className={styles.linkLabel}>Phone:</span> 201-878-0012
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
