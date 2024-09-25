import { LeftSidebar } from "@/components/LeftSidebar";
import { Footer } from "@/components/Footer";
import {
  useState,
  useEffect,
} from "react";
import { getAboutPageData } from "@/utility_functions/fetchData/getAboutPageData";

interface aboutPageDataInterface {
  aboutPageDataField: string;
}

export function AboutPage(
  _,
  setProjectDescriptionVisible
) {
  document.body.classList.remove(
    "_background-image--var_--image-1_"
  );
  document.body.classList.remove(
    "_background-repeat--repeat"
  );

  const [
    aboutPageData,
    setAboutPageData,
  ] =
    useState<aboutPageDataInterface | null>(
      null
    );
  useEffect(() => {
    const fetchData = async () => {
      const fetchedAboutPageData =
        await getAboutPageData();
      setAboutPageData(
        fetchedAboutPageData
      );
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="page_container">
        <LeftSidebar
          setProjectDescriptionVisible={
            setProjectDescriptionVisible
          }
        />
        <div className="main_section about_page">
          <div className="_display--inline-block width-20percent-minus-1rem _margin-right--1rem">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-website-410901.appspot.com/o/portfolio_website%2Fassets%2Fprofile_picture.png?alt=media&token=e8c85ebc-3169-4c3b-8984-ded19c32e2f3" />
          </div>
          <div className="_display--inline-block width--80percent-minus-1rem _vertical-align--top _margin-left--1rem">
            {aboutPageData ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: aboutPageData,
                }}
              ></div>
            ) : null}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
