const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 p-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">
            Sree Manjunatha Electricals
          </h2>
          <p>
            We take pride in introducing ourselves as a Class 1 Electrical
            Contractor with eleven years of experience. Authorized by the Chief
            Electrical Inspectorate of the Government of Karnataka, we
            specialize in a wide range of electrical services, including
            licensing, contract works, testing, calibration, and
            pre-commissioning and commissioning activities.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Projects
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">
            Follow Us On
          </h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>

            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>
            No. 161, 7th Main Road, 3rd Block,4th Stage,Basaveshwar
            Nagar,Bangalore- 560079.
          </p>
          <p>Ph. : 23149271,</p>
          <p> Mob. : 9886894462, 9341973677</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        Copyright © 2024 Sree Manjunatha Electricals. All Rights Reserved.
      </p>
    </footer>
  );
};
export default Footer;
