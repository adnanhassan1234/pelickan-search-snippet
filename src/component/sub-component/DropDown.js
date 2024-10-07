import React from "react";
import Search from "../svg/Search";
import Sad from "../svg/Sad";
import Spinner from "../svg/Spinner";

function DropDown({
  toggle,
  data,
  selectedOption,
  handleListKeyDown,
  setSelectedThenCloseDropdown,
  handleKeyDown,
  searchValue,
  error,
  val,
}) {
  return (
    <div
      className="route__searchList"
      style={{ height: toggle ? "250px" : "0" }}
      onMouseDown={(e) => e.stopPropagation()}
      role="listbox"
      aria-activedescendant={data.length > 0 && data[selectedOption]}
      tabIndex={-1}
      onKeyDown={handleListKeyDown}
    >
      {toggle && data.length > 0 ? (
        data?.map((item, index) => (
          <div key={index}>
            {/* {mainData === undefined && ( */}
            <div
              className="route__searchComp"
              key={index}
              onClick={(e) => {
                setSelectedThenCloseDropdown(
                  index,
                  e,
                  item?.Latitude,
                  item?.Longitude,
                  item?.Post_Code
                );
              }}
              role="option"
              aria-selected={selectedOption === index}
              tabIndex={0}
              onKeyDown={(e) =>
                handleKeyDown(
                  e,
                  index,
                  item?.Latitude,
                  item?.Longitude,
                  item?.Post_Code
                )
              }
              ref={(el) => (searchValue.current[index] = el)}
            >
              <Search />
              <p>
                {`${item?.Area_1}  ${
                  item?.Area_2 !== undefined ? item?.Area_2 : ""
                } 
                ${item?.Post_Code}`}
              </p>
            </div>
            {/* )} */}
            {/* {mainData?.length > 0 &&
              item?._index !== "gen_address" &&
              mainData?.map(
                (detail, index) =>
                  item?._source.PostCode === detail?._source.PostCode && (
                    <div
                      key={
                        isNaN(detail?._id + item?._id)
                          ? Math.random()
                          : detail?._id + item?._id + Math.random()
                      }
                      className="route__searchComp"
                      onClick={(e) => {
                        setToggle(false);
                        setSelectedThenCloseDropdown(
                          index,
                          e,
                          item?._source?.Latitude,
                          item?._source?.Longitude,
                          item?._source?.PostCode
                        );
                      }}
                      role="option"
                      aria-selected={selectedOption === index}
                      tabIndex={0}
                      onKeyDown={handleKeyDown}
                      ref={(el) => (searchValue.current[index] = el)}
                    >
                      <Search />
                      <p>
                        {detail?._source.Data +
                          " " +
                          item?._source.Street +
                          " " +
                          detail?._source.PostCode}
                      </p>
                    </div>
                  )
              )} */}
          </div>
        ))
      ) : (
        <>
          {toggle && (
            <p style={{ padding: "10px 0 10px 0" }} className="search__spinner">
              {error ? (
                <>
                  <Sad />
                  <span>
                    {error} <strong>"{val}"</strong>
                  </span>
                </>
              ) : (
                <>
                  <Spinner /> <span>Searching...</span>
                </>
              )}
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default DropDown;
