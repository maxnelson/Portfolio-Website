export const LeftSidebar = () => {
  return (
    <div className="left_sidebar">
      <ul className="left_sidebar_navigation_link_ul">
        <li className="left_sidebar_navigation_link_li">
          <a
            className="left_sidebar_navigation_link"
            data-page-anchor="user_page_profile_section"
          >
            Projects
          </a>
        </li>
        <li className="left_sidebar_navigation_link_li">
          <a
            className="left_sidebar_navigation_link"
            data-page-anchor="user_page_timelines_section"
          >
            About
          </a>
        </li>
        <li className="left_sidebar_navigation_link_li">
          <a
            className="left_sidebar_navigation_link"
            data-page-anchor="user_page_rows_section"
          >
            Resumé
          </a>
        </li>
        <li className="left_sidebar_navigation_link_li">
          <a
            className="left_sidebar_navigation_link"
            data-page-anchor="user_page_account_section"
          >
            Timeline
          </a>
        </li>
        <li className="left_sidebar_navigation_link_li">
          <a
            className="left_sidebar_navigation_link"
            data-page-anchor="user_page_account_section"
          >
            Blog
          </a>
        </li>
      </ul>
    </div>
  );
};
