import "./MainStore.css";
import data from "../../ProductsCat.json";

import { useParams } from "react-router-dom";
import { useEffect } from "react";

import Header from "../../components/Header/Header";
import ProductBox from "../../components/ProductBox/ProductBox";
import Categories from "../../components/Categories/Categories";

import SubCategories from "../../components/Categories/SubCategories/SubCategories";

function MainStore() {
  const { categoryId } = useParams();
  const { subCategoryId } = useParams();

  //to open on top of the page
  const scrollOnTop = () => {
    window.scroll(0, 0);
  };
  useEffect(() => {
    scrollOnTop();
  }, []);

  const items = data["products"];
  const categories = data["categories"];
  const chosenCategory = categories.find(
    (category) => category.id === categoryId
  );

  const categoryItems = items.filter((item) => item.categoryId === categoryId);
  let subCategoryItems = [] as any;
  subCategoryItems = categoryItems.filter(
    (sItem) => sItem.subCategoryId === subCategoryId
  );
  return (
    <div className="main-store">
      <Header />
      <Categories />
      <h1 className="title-store">{chosenCategory?.name}</h1>
      {chosenCategory?.subCategories ? <SubCategories /> : null}
      {subCategoryItems.length ? (
        <div className="products-list">
          {subCategoryItems.map((item: any) => {
            return (
              <div key={item.id}>
                <ProductBox
                  img={item.image}
                  name={item.name}
                  description={item.description}
                  ingredients={item.ingredients}
                  price={item.price}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="products-list">
          {categoryItems.map((item: any) => {
            return (
              <div key={item.id}>
                <ProductBox
                  img={item.image}
                  name={item.name}
                  description={item.description}
                  ingredients={item.ingredients}
                  price={item.price}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default MainStore;
