import Cover from "../Shared/Cover/Cover";
import OrderImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import OrderTabs from "./OrderTabs";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Spinner from "../Shared/Spinner/Spinner";
// import { Pagination, Stack } from "@mui/material";

const Order = () => {
  const categories = ["salad", "soup", "pizza", "drinks", "dessert"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [menus, loading] = useMenu();
  const [tabIndex, setTabIndex] = useState(initialIndex);

  if (loading) {
    return <Spinner />;
  }

  if (!Array.isArray(menus)) {
    return <div>Error: Menu data is not in the expected format.</div>;
  }

  const drinks = menus.filter((item) => item.category === "drinks");
  const desserts = menus.filter((item) => item.category === "dessert");
  const soups = menus.filter((item) => item.category === "soup");
  const salads = menus.filter((item) => item.category === "salad");
  const pizzas = menus.filter((item) => item.category === "pizza");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover
        img={OrderImg}
        title={" ORDER FOOD" || category}
        desc={`Would you like to try a ${category}?`}
      />
      <Tabs
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        className="my-6"
      >
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Soup</Tab>
          <Tab>Pizza</Tab>
          <Tab>Drinks</Tab>
          <Tab>Dessert</Tab>
        </TabList>
        <TabPanel>
          <OrderTabs foods={salads} />
        </TabPanel>
        <TabPanel>
          <OrderTabs foods={soups} />
        </TabPanel>
        <TabPanel>
          <OrderTabs foods={pizzas} />
        </TabPanel>
        <TabPanel>
          <OrderTabs foods={drinks} />
        </TabPanel>
        <TabPanel>
          <OrderTabs foods={desserts} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
