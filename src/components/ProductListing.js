import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import ProductCard from "./ProductCard";
import PropTypes from "prop-types";
import "./ProductListing.css";

const ProductListing = ({ className = "" }) => {
  return (
    <section className={`product-listing ${className}`}>
      <h1 className="popular-products">Popular Products</h1>
      <div className="listing-content">
        <div className="filter-options1">
          <div className="sort-21">
            <div className="find1">Find</div>
            <div className="form-field3">
              <div className="form-label3">Search</div>
              <img className="icon7" alt="" src="/icon-3.svg" />
            </div>
          </div>
          <div className="sort-11">
            <div className="sort-by1">{`Sort by `}</div>
            <FormControl
              className="form-field4"
              variant="standard"
              sx={{
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#e6dff1",
                borderRadius: "20px",
                width: "67.56756756756756%",
                height: "42px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "42px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "42px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "42px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "42px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#000",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Almarai",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "11px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="24px"
                    height="24px"
                    src="/icon-4.svg"
                    style={{ marginRight: "11px" }}
                  />
                )}
              >
                <MenuItem>Latest</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
          <div className="sort-31">
            <div className="explore-our-gift2">Explore Our Gift Cards</div>
            <FormControl
              className="form-field5"
              variant="standard"
              sx={{
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#e6dff1",
                borderRadius: "20px",
                width: "55.61097256857855%",
                height: "42px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "42px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "42px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "42px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "42px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#000",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Almarai",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "11px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="24px"
                    height="24px"
                    src="/icon-5.svg"
                    style={{ marginRight: "11px" }}
                  />
                )}
              >
                <MenuItem>Select by Brands</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
        </div>
        <div className="clear-filter1">
          <img className="clear-filter-item" alt="" src="/group-8796.svg" />
          <div className="clear-all-filters1">Clear All Filters</div>
        </div>
      </div>
      <div className="product-grid1">
        <ProductCard image5="/image-5@2x.png" />
        <ProductCard image5="/image-6@2x.png" propHeight="336px" />
        <ProductCard image5="/image-3@2x.png" propHeight="336px" />
        <ProductCard image5="/image-7@2x.png" propHeight="336px" />
        <ProductCard image5="/image-4@2x.png" propHeight="336px" />
        <ProductCard image5="/image-8@2x.png" propHeight="336px" />
        <ProductCard image5="/image-9@2x.png" propHeight="336px" />
        <ProductCard image5="/image-1@2x.png" propHeight="326px" />
      </div>
    </section>
  );
};

ProductListing.propTypes = {
  className: PropTypes.string,
};

export default ProductListing;
