export const Footer = () => {
  return (
    <footer className="background-color-gray-100 border-top-gray">
      <div className="page_section_container padding-top-6 padding-bottom-6">
        <div className="position-relative">
          <div className="display-inline-block margin-right-10 vertical-align-top">
            <p className="footer_column_header">Pages</p>
            <ul className="font-size-14px line-height-1-3">
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Resumé</a>
              </li>
              <li>
                <a href="#">Timeline</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="display-inline-block margin-right-10 vertical-align-top">
            <p className="footer_column_header">Contact</p>
            <ul className="font-size-14px line-height-1-3">
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </div>
          <div className="display-inline-block position-bottom-right">
            <a href="http://www.maxnelsondesign.com" target="_blank">
              <img src="/public/images/icons/nyan-cat.png" alt="Timeline" />
            </a>
          </div>
        </div>
        <div className="margin-top-8 font-size-14px text-align-center">
          <p id="footer_column_copyright_text">Max Nelson © 2024</p>
        </div>
      </div>
    </footer>
  );
};
