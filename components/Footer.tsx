import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img src="/assets/logo.png" alt="Vaira Ventures logo" />
              <span>Vaira Ventures</span>
            </div>
            <p>Authorized franchise outlet of Jockey and First Cry, proudly serving Singaperumal Kovil and greater Chennai.</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">ig</a>
              <a href="#" aria-label="WhatsApp">wa</a>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/outlets">Our Outlets</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4>Our Brands</h4>
            <ul>
              <li><Link href="/outlets">Jockey Showroom</Link></li>
              <li><Link href="/outlets">First Cry Store</Link></li>
            </ul>
          </div>

          <div>
            <h4>Get In Touch</h4>
            <ul>
              <li><a href="#">Singaperumal Kovil, Chengalpattu District, Chennai, Tamil Nadu</a></li>
              <li><a href="tel:+910000000000">+91 00000 00000</a></li>
              <li><a href="mailto:info@vairaventures.in">info@vairaventures.in</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Vaira Ventures. All rights reserved.</p>
          <p>Jockey and First Cry are registered trademarks of their respective owners.</p>
        </div>
      </div>
    </footer>
  );
}
