import React, { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import BlogPost from "./BlogPost";
import JobPost from "./JobPost";
import BlogList from "./BlogList";
import JobList from "./JobList";


const Admin = () => {
  const [activeSideTab, setActiveSideTab] = useState("Tab 2");
  const [activeTopTab, setActiveTopTab] = useState("Post");
  const [renderContent, setRenderContent] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setRenderContent(true);
    }, 0);

    return () => clearTimeout(delay);
  }, [activeSideTab, activeTopTab]);

  let content = null;

  if (renderContent) {
    if (activeSideTab === "Tab 2") {
      if (activeTopTab === "Post") {
        content = <BlogPost />;
      } else if (activeTopTab === "List") {
        content = <BlogList />;
      }
    } else if (activeSideTab === "Tab 1") {
      if (activeTopTab === "Post") {
        content = <JobPost />;
      } else if (activeTopTab === "List") {
        content = <JobList/>;
      }
    }
  }
  return (
    <Flex w="100%">
      <Sidebar setActiveTabLocal={setActiveSideTab} />
      <Topbar setActiveTabTop={setActiveTopTab} />
      <Flex
        pos="absolute"
        marginTop="16vh"
        marginLeft="36vw"
        marginBottom="5vh"
      >
        {content}
      </Flex>
    </Flex>
  );
};

export default Admin;
