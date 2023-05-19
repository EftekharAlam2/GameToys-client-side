import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Action from "./Action";
import Plush from "./Plush";
import Construction from "./Construction";

const Categories = () => {
  return (
    <Tabs>
      <h2 className="text-3xl text-center font-bold mb-2 mt-7">
        Shop by Category
      </h2>
      <TabList>
        <Tab>Action Figures</Tab>
        <Tab>Plush Toys</Tab>
        <Tab>Construction Sets</Tab>
      </TabList>

      <TabPanel>
        <Action></Action>
      </TabPanel>
      <TabPanel>
        <Plush></Plush>
      </TabPanel>
      <TabPanel>
        <Construction></Construction>
      </TabPanel>
    </Tabs>
  );
};

export default Categories;
