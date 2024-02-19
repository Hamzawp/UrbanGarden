import React from "react";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import Slider from "@mui/material/Slider";
import "./FilterCateg.css";
const FilterCateg = () => {
  const [range, setRange] = React.useState([0, 5000]);
  function handleChanges(event, newValue) {
    setRange(newValue);
  }
  return (
    <div>
      <div className="parentFilter">
        <div className="headingFilter">
          <h3>
            <VscSettings style={{ paddingTop: "05px", fontSize: "30px" }} />
            FILTERS{" "}
          </h3>
        </div>
        <div className="filterTypes">
          <div className="filter_type">
            <h3>
              <i>CATEGORIES</i>
            </h3>
            <div className="filter_list">
              <div className="checkbox">
                <input name="" type="checkbox" />
                <p>Gardening</p>
              </div>
              <div className="checkbox">
                <input name="" type="checkbox" />
                <p>Plants</p>
              </div>
              <div className="checkbox">
                <input name="" type="checkbox" />
                <p>Seeds</p>
              </div>
              <div className="checkbox">
                <input name="" type="checkbox" />
                <p>Bulbs</p>
              </div>
              <div className="checkbox">
                <input name="" type="checkbox" />
                <p>Pots</p>
              </div>
              <div className="checkbox">
                <input name="" type="checkbox" />
                <p>Soil & Fertilizer</p>
              </div>
              <div className="checkbox">
                <input name="" type="checkbox" />
                <p>Pebbles</p>
              </div>
              <div className="checkbox">
                <input name="" type="checkbox" />
                <p>Accessories</p>
              </div>
            </div>
          </div>
          <div className="filter_type">
            <h3>
              <i>PRICE</i>
            </h3>
            <div className="filter_list">
              {/* <div className="checkbox">
                        <input type="checkbox" name="" />
                        <p>Filter#1</p>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" name="" />
                        <p>Filter#1</p>
                    </div> */}
              <Slider
                value={range}
                onChange={handleChanges}
                valueLabelDisplay="auto"
              />
              <p className="pricing">
                The selected range is {range[0]} - {range[1]}
              </p>
            </div>
          </div>
          <div className="filter_type">
            <h3>
              <i>CITY</i>
            </h3>
            <div className="filter_list">
              {/* <div className="checkbox">
                        <input type="checkbox" name="" />
                        <p>Filter#1</p>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" name="" />
                        <p>Filter#1</p>
                    </div> */}
              <div className="group">
                <input
                  required=""
                  type="text"
                  className="input"
                  placeholder="City name"
                />
                <span className="highlight"></span>
                <span className="bar"></span>
              </div>
            </div>
          </div>
          <div className="filter_type">
            <h3>
              <i>SEASON</i>
            </h3>
            <div className="filter_list">
              <div className="checkbox">
                <input name="" type="checkbox" />
                <p>Summer</p>
              </div>
              <div className="checkbox">
                <input name="" type="checkbox" />
                <p>Winter</p>
              </div>
              <div className="checkbox">
                <input name="" type="checkbox" />
                <p>Rainy</p>
              </div>
              <div className="checkbox">
                <input name="" type="checkbox" />
                <p>All Seasons</p>
              </div>
            </div>
          </div>
          <div className="filter_type">
            <h3>
              <i>RATING</i>
            </h3>
            <div className="filter_list">
              <div className="checkbox">
                <input name="" type="checkbox" />
                <p>1 STAR</p>
              </div>
              <div className="checkbox">
                <input name="" type="checkbox" />
                <p>2 STAR</p>
              </div>
              <div className="checkbox">
                <input name="" type="checkbox" />
                <p>3 STAR</p>
              </div>
              <div className="checkbox">
                <input name="" type="checkbox" />
                <p>4 STAR</p>
              </div>
              <div className="checkbox">
                <input name="" type="checkbox" />
                <p>5 STAR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterCateg;
