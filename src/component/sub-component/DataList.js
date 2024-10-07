import React, { useState, useEffect } from "react";
import Arrow from "../svg/Arrow";
import Plus from "../svg/Plus";
import "../../css/DataList.css";

function DataList({ objValue, setObjValue, setDataList, uniqueValue }) {
  // Parent Laggage
  const [showLuggage, setShowLuggage] = useState(false);
  // Child Laggage
  const [showHandLuggageQuantity, setShowHandLuggageQuantity] = useState(false);
  const [showSuitcaseQuantity, setShowSuitcaseQuantity] = useState(false);
  const [showBackpack, setShowBackpack] = useState(false);
  // Parent box
  const [showBox, setShowBox] = useState(false);
  // Child box
  const [showSmallBox, setShowSmallBox] = useState(false);
  const [showMediumBox, setShowMediumBox] = useState(false);
  const [showLargeBox, setShowLargeBox] = useState(false);
  const [showXLBox, setXLBox] = useState(false);
  // Parent ChildItem
  const [showChildItem, setShowChildItem] = useState(false);
  // Child ChildItem
  const [showChildParam, setShowChildParam] = useState(false);
  const [showChildsFoldablePushchair, setShowChildsFoldablePushchair] =
    useState(false);

  // Parent Folded wheelchair
  const [showFoldedwheelchair, setShowFoldedwheelchair] = useState(false);
  // Child Folded wheelchair
  const [showFoldedwheelchairQuantity, setShowFoldedwheelchairQuantity] =
    useState(false);
  // Parent HouseHold
  const [showHouseholditems, setShowHouseholditems] = useState(false);
  //   Child HouseHold
  const [showTVlessthan30inches, setShowTVlessthan30inches] = useState(false);
  const [showTV30to60inches, setShowTV30to60inches] = useState(false);
  const [showIroningBoard, setShowIroningBoard] = useState(false);
  const [showMusicSpeakerLarge, setShowMusicSpeakerLarge] = useState(false);
  const [showMirror, setShowMirror] = useState(false);
  const [showChestOfDrawers, setShowChestOfDrawers] = useState(false);
  const [showRug, setShowRug] = useState(false);
  const [showSingleMattress, setShowSingleMattress] = useState(false);
  const [showBedsideTable, setShowBedsideTable] = useState(false);
  const [showMicrowaveOven, setShowMicrowaveOven] = useState(false);
  const [showVacuumcleaner, setShowVacuumcleaner] = useState(false);
  const [showTVStand, setShowTVStand] = useState(false);
  const [showLargeMusicalInstrumentCase, setShowLargeMusicalInstrumentCase] =
    useState(false);
  // parent outdoorItem
  const [showOutdoorItems, setShowOutdoorItems] = useState(false);
  // child outdoorItem
  const [showTent, setShowTent] = useState(false);
  const [showLargeRucksack, setShowLargeRucksack] = useState(false);
  const [showPairOfSkis, setShowPairOfSkis] = useState(false);
  const [showSnowboard, setShowSnowboard] = useState(false);
  const [showBike, setShowBike] = useState(false);
  const [showBikeBox, setShowBikeBox] = useState(false);
  const [showGolfBag, setShowGolfBag] = useState(false);
  //   parent pets
  const [showPets, setShowPets] = useState(false);
  //   child Pets
  const [showSmallPet, setShowSmallPet] = useState(false);
  const [showLargeDog, setShowLargeDog] = useState(false);
  // SetValue useState
  const [spanValue, setSpanValue] = useState("");
  useEffect(() => {
    if (uniqueValue.length >= 5) {
      setShowLuggage(false);
      setShowBox(false);
      setShowChildItem(false);
      setShowFoldedwheelchair(false);
      setShowHouseholditems(false);
      setShowOutdoorItems(false);
      setShowPets(false);
    }
  }, [
    uniqueValue.length,
    showLuggage,
    showBox,
    showChildItem,
    showFoldedwheelchair,
    showHouseholditems,
    showOutdoorItems,
    showPets,
  ]);
  const getValue = (e) => {
    if (e.target.tagName === "SPAN") {
      let span = e.target.innerText;
      setSpanValue(span);
    }
    if (e.target.tagName === "LI") {
      setDataList(false);
      let li = e.target.innerText;
      if (
        spanValue.length > 0 &&
        spanValue !== "" &&
        spanValue !== undefined &&
        spanValue !== null &&
        li.length > 0 &&
        li !== "" &&
        li !== undefined &&
        li !== null
      ) {
        setObjValue([
          ...objValue,
          {
            id: Math.random(),
            value: spanValue,
            quantity: li,
          },
        ]);
      }
    }
  };
  return (
    <div className="dataList__container">
      <ul onMouseDown={(e) => e.stopPropagation()}>
        <li>
          <Plus />
          <span
            onClick={() => {
              setShowLuggage(!showLuggage);
              setShowHandLuggageQuantity(false);
              setShowSuitcaseQuantity(false);
              setShowBackpack(false);
              setShowBox(false);
              setShowSmallBox(false);
              setShowMediumBox(false);
              setShowLargeBox(false);
              setXLBox(false);
              setShowChildItem(false);
              setShowChildParam(false);
              setShowChildsFoldablePushchair(false);
              setShowFoldedwheelchair(false);
              setShowFoldedwheelchairQuantity(false);
              setShowHouseholditems(false);
              setShowTVlessthan30inches(false);
              setShowTV30to60inches(false);
              setShowIroningBoard(false);
              setShowMusicSpeakerLarge(false);
              setShowMirror(false);
              setShowChestOfDrawers(false);
              setShowRug(false);
              setShowSingleMattress(false);
              setShowBedsideTable(false);
              setShowMicrowaveOven(false);
              setShowVacuumcleaner(false);
              setShowTVStand(false);
              setShowLargeMusicalInstrumentCase(false);
              setShowOutdoorItems(false);
              setShowTent(false);
              setShowLargeRucksack(false);
              setShowPairOfSkis(false);
              setShowSnowboard(false);
              setShowBike(false);
              setShowBikeBox(false);
              setShowGolfBag(false);
              setShowPets(false);
              setShowSmallPet(false);
            }}
          >
            Luggage
          </span>
          {showLuggage && (
            <ul onClick={(e) => getValue(e)}>
              <li>
                <Arrow />
                <span
                  onClick={() => {
                    setShowBox(false);
                    setShowHandLuggageQuantity(!showHandLuggageQuantity);
                    setShowSuitcaseQuantity(false);
                    setShowBackpack(false);
                    setShowBox(false);
                    setShowSmallBox(false);
                    setShowMediumBox(false);
                    setShowLargeBox(false);
                    setXLBox(false);
                    setShowChildItem(false);
                    setShowChildParam(false);
                    setShowChildsFoldablePushchair(false);
                    setShowFoldedwheelchair(false);
                    setShowFoldedwheelchairQuantity(false);
                    setShowHouseholditems(false);
                    setShowTVlessthan30inches(false);
                    setShowTV30to60inches(false);
                    setShowIroningBoard(false);
                    setShowMusicSpeakerLarge(false);
                    setShowMirror(false);
                    setShowChestOfDrawers(false);
                    setShowRug(false);
                    setShowSingleMattress(false);
                    setShowBedsideTable(false);
                    setShowMicrowaveOven(false);
                    setShowVacuumcleaner(false);
                    setShowTVStand(false);
                    setShowLargeMusicalInstrumentCase(false);
                    setShowOutdoorItems(false);
                    setShowTent(false);
                    setShowLargeRucksack(false);
                    setShowPairOfSkis(false);
                    setShowSnowboard(false);
                    setShowBike(false);
                    setShowBikeBox(false);
                    setShowGolfBag(false);
                    setShowPets(false);
                    setShowSmallPet(false);
                  }}
                >
                  Hand Luggage (56 x 37 x 25 cm)
                </span>
                {showHandLuggageQuantity && (
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                    <li>13</li>
                    <li>14</li>
                    <li>15</li>
                    <li>16</li>
                    <li>17</li>
                    <li>18</li>
                    <li>19</li>
                    <li>20</li>
                  </ul>
                )}
              </li>
              <li>
                <Arrow />

                <span
                  onClick={() => {
                    setShowBox(false);
                    setShowSuitcaseQuantity(!showSuitcaseQuantity);
                    setShowHandLuggageQuantity(false);
                    setShowBackpack(false);
                    setShowBox(false);
                    setShowSmallBox(false);
                    setShowMediumBox(false);
                    setShowLargeBox(false);
                    setXLBox(false);
                    setShowChildItem(false);
                    setShowChildParam(false);
                    setShowChildsFoldablePushchair(false);
                    setShowFoldedwheelchair(false);
                    setShowFoldedwheelchairQuantity(false);
                    setShowHouseholditems(false);
                    setShowTVlessthan30inches(false);
                    setShowTV30to60inches(false);
                    setShowIroningBoard(false);
                    setShowMusicSpeakerLarge(false);
                    setShowMirror(false);
                    setShowChestOfDrawers(false);
                    setShowRug(false);
                    setShowSingleMattress(false);
                    setShowBedsideTable(false);
                    setShowMicrowaveOven(false);
                    setShowVacuumcleaner(false);
                    setShowTVStand(false);
                    setShowLargeMusicalInstrumentCase(false);
                    setShowOutdoorItems(false);
                    setShowTent(false);
                    setShowLargeRucksack(false);
                    setShowPairOfSkis(false);
                    setShowSnowboard(false);
                    setShowBike(false);
                    setShowBikeBox(false);
                    setShowGolfBag(false);
                    setShowPets(false);
                    setShowSmallPet(false);
                  }}
                >
                  Suitcase (78 x 50 x 32 cm)
                </span>
                {showSuitcaseQuantity && (
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                  </ul>
                )}
              </li>
              <li>
                <Arrow />

                <span
                  onClick={() => {
                    setShowBox(false);
                    setShowBackpack(!showBackpack);
                    setShowSuitcaseQuantity(false);
                    setShowHandLuggageQuantity(false);
                    setShowBox(false);
                    setShowSmallBox(false);
                    setShowMediumBox(false);
                    setShowLargeBox(false);
                    setXLBox(false);
                    setShowChildItem(false);
                    setShowChildParam(false);
                    setShowChildsFoldablePushchair(false);
                    setShowFoldedwheelchair(false);
                    setShowFoldedwheelchairQuantity(false);
                    setShowHouseholditems(false);
                    setShowTVlessthan30inches(false);
                    setShowTV30to60inches(false);
                    setShowIroningBoard(false);
                    setShowMusicSpeakerLarge(false);
                    setShowMirror(false);
                    setShowChestOfDrawers(false);
                    setShowRug(false);
                    setShowSingleMattress(false);
                    setShowBedsideTable(false);
                    setShowMicrowaveOven(false);
                    setShowVacuumcleaner(false);
                    setShowTVStand(false);
                    setShowLargeMusicalInstrumentCase(false);
                    setShowOutdoorItems(false);
                    setShowTent(false);
                    setShowLargeRucksack(false);
                    setShowPairOfSkis(false);
                    setShowSnowboard(false);
                    setShowBike(false);
                    setShowBikeBox(false);
                    setShowGolfBag(false);
                    setShowPets(false);
                    setShowSmallPet(false);
                  }}
                >
                  Backpack
                </span>
                {showBackpack && (
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                    <li>13</li>
                    <li>14</li>
                    <li>15</li>
                    <li>16</li>
                    <li>17</li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
        <li>
          <Plus />

          <span
            onClick={() => {
              setShowBox(!showBox);
              setShowLuggage(false);
              setShowHandLuggageQuantity(false);
              setShowSuitcaseQuantity(false);
              setShowBackpack(false);
              setShowSmallBox(false);
              setShowMediumBox(false);
              setShowLargeBox(false);
              setXLBox(false);
              setShowChildItem(false);
              setShowChildParam(false);
              setShowChildsFoldablePushchair(false);
              setShowFoldedwheelchair(false);
              setShowFoldedwheelchairQuantity(false);
              setShowHouseholditems(false);
              setShowTVlessthan30inches(false);
              setShowTV30to60inches(false);
              setShowIroningBoard(false);
              setShowMusicSpeakerLarge(false);
              setShowMirror(false);
              setShowChestOfDrawers(false);
              setShowRug(false);
              setShowSingleMattress(false);
              setShowBedsideTable(false);
              setShowMicrowaveOven(false);
              setShowVacuumcleaner(false);
              setShowTVStand(false);
              setShowLargeMusicalInstrumentCase(false);
              setShowOutdoorItems(false);
              setShowTent(false);
              setShowLargeRucksack(false);
              setShowPairOfSkis(false);
              setShowSnowboard(false);
              setShowBike(false);
              setShowBikeBox(false);
              setShowGolfBag(false);
              setShowPets(false);
              setShowSmallPet(false);
            }}
          >
            Boxes
          </span>
          {showBox && (
            <ul onClick={(e) => getValue(e)}>
              <li>
                <Arrow />

                <span
                  onClick={() => {
                    setShowLuggage(false);
                    setShowSmallBox(!showSmallBox);
                    setShowBackpack(false);
                    setShowSuitcaseQuantity(false);
                    setShowHandLuggageQuantity(false);
                    setShowMediumBox(false);
                    setShowLargeBox(false);
                    setXLBox(false);
                    setShowChildItem(false);
                    setShowChildParam(false);
                    setShowChildsFoldablePushchair(false);
                    setShowFoldedwheelchair(false);
                    setShowFoldedwheelchairQuantity(false);
                    setShowHouseholditems(false);
                    setShowTVlessthan30inches(false);
                    setShowTV30to60inches(false);
                    setShowIroningBoard(false);
                    setShowMusicSpeakerLarge(false);
                    setShowMirror(false);
                    setShowChestOfDrawers(false);
                    setShowRug(false);
                    setShowSingleMattress(false);
                    setShowBedsideTable(false);
                    setShowMicrowaveOven(false);
                    setShowVacuumcleaner(false);
                    setShowTVStand(false);
                    setShowLargeMusicalInstrumentCase(false);
                    setShowOutdoorItems(false);
                    setShowTent(false);
                    setShowLargeRucksack(false);
                    setShowPairOfSkis(false);
                    setShowSnowboard(false);
                    setShowBike(false);
                    setShowBikeBox(false);
                    setShowGolfBag(false);
                    setShowPets(false);
                    setShowSmallPet(false);
                  }}
                >
                  Small box (14 x 12 x 15 inches)
                </span>
                {showSmallBox && (
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                    <li>13</li>
                  </ul>
                )}
              </li>
              <li>
                <Arrow />

                <span
                  onClick={() => {
                    setShowLuggage(false);
                    setShowMediumBox(!showMediumBox);
                    setShowSmallBox(false);
                    setShowBackpack(false);
                    setShowSuitcaseQuantity(false);
                    setShowHandLuggageQuantity(false);
                    setShowLargeBox(false);
                    setXLBox(false);
                    setShowChildItem(false);
                    setShowChildParam(false);
                    setShowChildsFoldablePushchair(false);
                    setShowFoldedwheelchair(false);
                    setShowFoldedwheelchairQuantity(false);
                    setShowHouseholditems(false);
                    setShowTVlessthan30inches(false);
                    setShowTV30to60inches(false);
                    setShowIroningBoard(false);
                    setShowMusicSpeakerLarge(false);
                    setShowMirror(false);
                    setShowChestOfDrawers(false);
                    setShowRug(false);
                    setShowSingleMattress(false);
                    setShowBedsideTable(false);
                    setShowMicrowaveOven(false);
                    setShowVacuumcleaner(false);
                    setShowTVStand(false);
                    setShowLargeMusicalInstrumentCase(false);
                    setShowOutdoorItems(false);
                    setShowTent(false);
                    setShowLargeRucksack(false);
                    setShowPairOfSkis(false);
                    setShowSnowboard(false);
                    setShowBike(false);
                    setShowBikeBox(false);
                    setShowGolfBag(false);
                    setShowPets(false);
                    setShowSmallPet(false);
                  }}
                >
                  Medium box (16 x 16 x 16 inches)
                </span>
                {showMediumBox && (
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                  </ul>
                )}
              </li>
              <li>
                <Arrow />

                <span
                  onClick={() => {
                    setShowLuggage(false);
                    setShowLargeBox(!showLargeBox);
                    setShowMediumBox(false);
                    setShowSmallBox(false);
                    setShowBackpack(false);
                    setShowSuitcaseQuantity(false);
                    setShowHandLuggageQuantity(false);
                    setXLBox(false);
                    setShowChildItem(false);
                    setShowChildParam(false);
                    setShowChildsFoldablePushchair(false);
                    setShowFoldedwheelchair(false);
                    setShowFoldedwheelchairQuantity(false);
                    setShowHouseholditems(false);
                    setShowTVlessthan30inches(false);
                    setShowTV30to60inches(false);
                    setShowIroningBoard(false);
                    setShowMusicSpeakerLarge(false);
                    setShowMirror(false);
                    setShowChestOfDrawers(false);
                    setShowRug(false);
                    setShowSingleMattress(false);
                    setShowBedsideTable(false);
                    setShowMicrowaveOven(false);
                    setShowVacuumcleaner(false);
                    setShowTVStand(false);
                    setShowLargeMusicalInstrumentCase(false);
                    setShowOutdoorItems(false);
                    setShowTent(false);
                    setShowLargeRucksack(false);
                    setShowPairOfSkis(false);
                    setShowSnowboard(false);
                    setShowBike(false);
                    setShowBikeBox(false);
                    setShowGolfBag(false);
                    setShowPets(false);
                    setShowSmallPet(false);
                  }}
                >
                  Large box (20 x 20 x 20 inches)
                </span>
                {showLargeBox && (
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                  </ul>
                )}
              </li>
              <li>
                <Arrow />

                <span
                  onClick={() => {
                    setXLBox(!showXLBox);
                    setShowLuggage(false);
                    setShowLargeBox(false);
                    setShowMediumBox(false);
                    setShowSmallBox(false);
                    setShowBackpack(false);
                    setShowSuitcaseQuantity(false);
                    setShowHandLuggageQuantity(false);
                    setShowChildItem(false);
                    setShowChildParam(false);
                    setShowChildsFoldablePushchair(false);
                    setShowFoldedwheelchair(false);
                    setShowFoldedwheelchairQuantity(false);
                    setShowHouseholditems(false);
                    setShowTVlessthan30inches(false);
                    setShowTV30to60inches(false);
                    setShowIroningBoard(false);
                    setShowMusicSpeakerLarge(false);
                    setShowMirror(false);
                    setShowChestOfDrawers(false);
                    setShowRug(false);
                    setShowSingleMattress(false);
                    setShowBedsideTable(false);
                    setShowMicrowaveOven(false);
                    setShowVacuumcleaner(false);
                    setShowTVStand(false);
                    setShowLargeMusicalInstrumentCase(false);
                    setShowOutdoorItems(false);
                    setShowTent(false);
                    setShowLargeRucksack(false);
                    setShowPairOfSkis(false);
                    setShowSnowboard(false);
                    setShowBike(false);
                    setShowBikeBox(false);
                    setShowGolfBag(false);
                    setShowPets(false);
                    setShowSmallPet(false);
                  }}
                >
                  XL box (24 x 24 x 33 inches)
                </span>
                {showXLBox && (
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
        <li>
          <Plus />

          <span
            onClick={() => {
              setShowChildItem(!showChildItem);
              setXLBox(false);
              setShowLuggage(false);
              setShowLargeBox(false);
              setShowMediumBox(false);
              setShowSmallBox(false);
              setShowBackpack(false);
              setShowSuitcaseQuantity(false);
              setShowHandLuggageQuantity(false);
              setShowBox(false);
              setShowChildParam(false);
              setShowChildsFoldablePushchair(false);
              setShowFoldedwheelchair(false);
              setShowFoldedwheelchairQuantity(false);
              setShowHouseholditems(false);
              setShowTVlessthan30inches(false);
              setShowTV30to60inches(false);
              setShowIroningBoard(false);
              setShowMusicSpeakerLarge(false);
              setShowMirror(false);
              setShowChestOfDrawers(false);
              setShowRug(false);
              setShowSingleMattress(false);
              setShowBedsideTable(false);
              setShowMicrowaveOven(false);
              setShowVacuumcleaner(false);
              setShowTVStand(false);
              setShowLargeMusicalInstrumentCase(false);
              setShowOutdoorItems(false);
              setShowTent(false);
              setShowLargeRucksack(false);
              setShowPairOfSkis(false);
              setShowSnowboard(false);
              setShowBike(false);
              setShowBikeBox(false);
              setShowGolfBag(false);
              setShowPets(false);
              setShowSmallPet(false);
            }}
          >
            Child items
          </span>
          {showChildItem && (
            <ul onClick={(e) => getValue(e)}>
              {" "}
              <li>
                <Arrow />
                <span
                  onClick={() => {
                    setShowChildParam(!showChildParam);
                    setXLBox(false);
                    setShowLuggage(false);
                    setShowLargeBox(false);
                    setShowMediumBox(false);
                    setShowSmallBox(false);
                    setShowBackpack(false);
                    setShowSuitcaseQuantity(false);
                    setShowHandLuggageQuantity(false);
                    setShowBox(false);
                    setShowChildsFoldablePushchair(false);
                    setShowFoldedwheelchair(false);
                    setShowFoldedwheelchairQuantity(false);
                    setShowHouseholditems(false);
                    setShowTVlessthan30inches(false);
                    setShowTV30to60inches(false);
                    setShowIroningBoard(false);
                    setShowMusicSpeakerLarge(false);
                    setShowMirror(false);
                    setShowChestOfDrawers(false);
                    setShowRug(false);
                    setShowSingleMattress(false);
                    setShowBedsideTable(false);
                    setShowMicrowaveOven(false);
                    setShowVacuumcleaner(false);
                    setShowTVStand(false);
                    setShowLargeMusicalInstrumentCase(false);
                    setShowOutdoorItems(false);
                    setShowTent(false);
                    setShowLargeRucksack(false);
                    setShowPairOfSkis(false);
                    setShowSnowboard(false);
                    setShowBike(false);
                    setShowBikeBox(false);
                    setShowGolfBag(false);
                    setShowPets(false);
                    setShowSmallPet(false);
                  }}
                >
                  Child's pram
                </span>
                {showChildParam && (
                  <ul>
                    <li>1</li>
                  </ul>
                )}
              </li>
              <li>
                <Arrow />

                <span
                  onClick={() => {
                    setShowChildsFoldablePushchair(
                      !showChildsFoldablePushchair
                    );
                    setShowChildParam(false);
                    setXLBox(false);
                    setShowLuggage(false);
                    setShowLargeBox(false);
                    setShowMediumBox(false);
                    setShowSmallBox(false);
                    setShowBackpack(false);
                    setShowSuitcaseQuantity(false);
                    setShowHandLuggageQuantity(false);
                    setShowBox(false);
                    setShowChildParam(false);
                    setShowFoldedwheelchair(false);
                    setShowFoldedwheelchairQuantity(false);
                    setShowHouseholditems(false);
                    setShowTVlessthan30inches(false);
                    setShowTV30to60inches(false);
                    setShowIroningBoard(false);
                    setShowMusicSpeakerLarge(false);
                    setShowMirror(false);
                    setShowChestOfDrawers(false);
                    setShowRug(false);
                    setShowSingleMattress(false);
                    setShowBedsideTable(false);
                    setShowMicrowaveOven(false);
                    setShowVacuumcleaner(false);
                    setShowTVStand(false);
                    setShowLargeMusicalInstrumentCase(false);
                    setShowOutdoorItems(false);
                    setShowTent(false);
                    setShowLargeRucksack(false);
                    setShowPairOfSkis(false);
                    setShowSnowboard(false);
                    setShowBike(false);
                    setShowBikeBox(false);
                    setShowGolfBag(false);
                    setShowPets(false);
                    setShowSmallPet(false);
                  }}
                >
                  Child's foldable pushchair
                </span>
                {showChildsFoldablePushchair && (
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
        <li>
          <Plus />

          <span
            onClick={() => {
              setShowFoldedwheelchair(!showFoldedwheelchair);
              setShowChildsFoldablePushchair(false);
              setShowChildParam(false);
              setShowChildItem(false);
              setXLBox(false);
              setShowLuggage(false);
              setShowLargeBox(false);
              setShowMediumBox(false);
              setShowSmallBox(false);
              setShowBackpack(false);
              setShowSuitcaseQuantity(false);
              setShowHandLuggageQuantity(false);
              setShowBox(false);
              setShowChildParam(false);
              setShowChildsFoldablePushchair(false);
              setShowFoldedwheelchairQuantity(false);
              setShowHouseholditems(false);
              setShowTVlessthan30inches(false);
              setShowTV30to60inches(false);
              setShowIroningBoard(false);
              setShowMusicSpeakerLarge(false);
              setShowMirror(false);
              setShowChestOfDrawers(false);
              setShowRug(false);
              setShowSingleMattress(false);
              setShowBedsideTable(false);
              setShowMicrowaveOven(false);
              setShowVacuumcleaner(false);
              setShowTVStand(false);
              setShowLargeMusicalInstrumentCase(false);
              setShowOutdoorItems(false);
              setShowTent(false);
              setShowLargeRucksack(false);
              setShowPairOfSkis(false);
              setShowSnowboard(false);
              setShowBike(false);
              setShowBikeBox(false);
              setShowGolfBag(false);
              setShowPets(false);
              setShowSmallPet(false);
            }}
          >
            Folded wheelchair
          </span>
          {showFoldedwheelchair && (
            <ul onClick={(e) => getValue(e)}>
              {" "}
              <li>
                <Arrow />

                <span
                  onClick={() => {
                    setShowFoldedwheelchairQuantity(
                      !showFoldedwheelchairQuantity
                    );
                  }}
                >
                  Folded wheelchair
                </span>
                {showFoldedwheelchairQuantity && (
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
        <li>
          <Plus />

          <span
            onClick={() => {
              setShowHouseholditems(!showHouseholditems);
              setShowChildsFoldablePushchair(false);
              setShowChildParam(false);
              setShowChildItem(false);
              setXLBox(false);
              setShowLuggage(false);
              setShowLargeBox(false);
              setShowMediumBox(false);
              setShowSmallBox(false);
              setShowBackpack(false);
              setShowSuitcaseQuantity(false);
              setShowHandLuggageQuantity(false);
              setShowBox(false);
              setShowChildParam(false);
              setShowChildsFoldablePushchair(false);
              setShowFoldedwheelchair(false);
              setShowFoldedwheelchairQuantity(false);
              setShowTVlessthan30inches(false);
              setShowTV30to60inches(false);
              setShowIroningBoard(false);
              setShowMusicSpeakerLarge(false);
              setShowMirror(false);
              setShowChestOfDrawers(false);
              setShowRug(false);
              setShowSingleMattress(false);
              setShowBedsideTable(false);
              setShowMicrowaveOven(false);
              setShowVacuumcleaner(false);
              setShowTVStand(false);
              setShowLargeMusicalInstrumentCase(false);
              setShowOutdoorItems(false);
              setShowTent(false);
              setShowLargeRucksack(false);
              setShowPairOfSkis(false);
              setShowSnowboard(false);
              setShowBike(false);
              setShowBikeBox(false);
              setShowGolfBag(false);
              setShowPets(false);
              setShowSmallPet(false);
            }}
          >
            Household items
          </span>
          {showHouseholditems && (
            <ul onClick={(e) => getValue(e)}>
              {" "}
              <li>
                <Arrow />

                <span
                  onClick={() => {
                    setShowTVlessthan30inches(!showTVlessthan30inches);
                    setShowChildsFoldablePushchair(false);
                    setShowChildParam(false);
                    setShowChildItem(false);
                    setXLBox(false);
                    setShowLuggage(false);
                    setShowLargeBox(false);
                    setShowMediumBox(false);
                    setShowSmallBox(false);
                    setShowBackpack(false);
                    setShowSuitcaseQuantity(false);
                    setShowHandLuggageQuantity(false);
                    setShowBox(false);
                    setShowChildParam(false);
                    setShowChildsFoldablePushchair(false);
                    setShowFoldedwheelchair(false);
                    setShowFoldedwheelchairQuantity(false);
                    setShowTV30to60inches(false);
                    setShowIroningBoard(false);
                    setShowMusicSpeakerLarge(false);
                    setShowMirror(false);
                    setShowChestOfDrawers(false);
                    setShowRug(false);
                    setShowSingleMattress(false);
                    setShowBedsideTable(false);
                    setShowMicrowaveOven(false);
                    setShowVacuumcleaner(false);
                    setShowTVStand(false);
                    setShowLargeMusicalInstrumentCase(false);
                    setShowOutdoorItems(false);
                    setShowTent(false);
                    setShowLargeRucksack(false);
                    setShowPairOfSkis(false);
                    setShowSnowboard(false);
                    setShowBike(false);
                    setShowBikeBox(false);
                    setShowGolfBag(false);
                    setShowPets(false);
                    setShowSmallPet(false);
                  }}
                >
                  TV (less than 30 inches)
                </span>
                {showTVlessthan30inches && (
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                  </ul>
                )}
              </li>
              <li>
                <Arrow />

                <span
                  onClick={() => {
                    setShowTV30to60inches(!showTV30to60inches);
                    setShowTVlessthan30inches(false);
                    setShowChildsFoldablePushchair(false);
                    setShowChildParam(false);
                    setShowChildItem(false);
                    setXLBox(false);
                    setShowLuggage(false);
                    setShowLargeBox(false);
                    setShowMediumBox(false);
                    setShowSmallBox(false);
                    setShowBackpack(false);
                    setShowSuitcaseQuantity(false);
                    setShowHandLuggageQuantity(false);
                    setShowBox(false);
                    setShowChildParam(false);
                    setShowChildsFoldablePushchair(false);
                    setShowFoldedwheelchair(false);
                    setShowFoldedwheelchairQuantity(false);
                    setShowTVlessthan30inches(false);
                    setShowIroningBoard(false);
                    setShowMusicSpeakerLarge(false);
                    setShowMirror(false);
                    setShowChestOfDrawers(false);
                    setShowRug(false);
                    setShowSingleMattress(false);
                    setShowBedsideTable(false);
                    setShowMicrowaveOven(false);
                    setShowVacuumcleaner(false);
                    setShowTVStand(false);
                    setShowLargeMusicalInstrumentCase(false);
                    setShowOutdoorItems(false);
                    setShowTent(false);
                    setShowLargeRucksack(false);
                    setShowPairOfSkis(false);
                    setShowSnowboard(false);
                    setShowBike(false);
                    setShowBikeBox(false);
                    setShowGolfBag(false);
                    setShowPets(false);
                    setShowSmallPet(false);
                  }}
                >
                  TV (30 to 60 inches)
                </span>
                {showTV30to60inches && (
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                  </ul>
                )}
              </li>
              <li>
                <Arrow />

                <span
                  onClick={() => {
                    setShowIroningBoard(!showIroningBoard);
                    setShowTV30to60inches(false);
                    setShowTVlessthan30inches(false);
                    setShowChildsFoldablePushchair(false);
                    setShowChildParam(false);
                    setShowChildItem(false);
                    setXLBox(false);
                    setShowLuggage(false);
                    setShowLargeBox(false);
                    setShowMediumBox(false);
                    setShowSmallBox(false);
                    setShowBackpack(false);
                    setShowSuitcaseQuantity(false);
                    setShowHandLuggageQuantity(false);
                    setShowBox(false);
                    setShowChildParam(false);
                    setShowChildsFoldablePushchair(false);
                    setShowFoldedwheelchair(false);
                    setShowFoldedwheelchairQuantity(false);
                    setShowTVlessthan30inches(false);
                    setShowTV30to60inches(false);
                    setShowMusicSpeakerLarge(false);
                    setShowMirror(false);
                    setShowChestOfDrawers(false);
                    setShowRug(false);
                    setShowSingleMattress(false);
                    setShowBedsideTable(false);
                    setShowMicrowaveOven(false);
                    setShowVacuumcleaner(false);
                    setShowTVStand(false);
                    setShowLargeMusicalInstrumentCase(false);
                    setShowOutdoorItems(false);
                    setShowTent(false);
                    setShowLargeRucksack(false);
                    setShowPairOfSkis(false);
                    setShowSnowboard(false);
                    setShowBike(false);
                    setShowBikeBox(false);
                    setShowGolfBag(false);
                    setShowPets(false);
                    setShowSmallPet(false);
                  }}
                >
                  Ironing board
                </span>
                {showIroningBoard && (
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                  </ul>
                )}
              </li>
              <li>
                <Arrow />

                <span
                  onClick={() => {
                    setShowMusicSpeakerLarge(!showMusicSpeakerLarge);
                    setShowIroningBoard(false);
                    setShowTV30to60inches(false);
                    setShowTVlessthan30inches(false);
                    setShowChildsFoldablePushchair(false);
                    setShowChildParam(false);
                    setShowChildItem(false);
                    setXLBox(false);
                    setShowLuggage(false);
                    setShowLargeBox(false);
                    setShowMediumBox(false);
                    setShowSmallBox(false);
                    setShowBackpack(false);
                    setShowSuitcaseQuantity(false);
                    setShowHandLuggageQuantity(false);
                    setShowBox(false);
                    setShowChildParam(false);
                    setShowChildsFoldablePushchair(false);
                    setShowFoldedwheelchair(false);
                    setShowFoldedwheelchairQuantity(false);
                    setShowTVlessthan30inches(false);
                    setShowTV30to60inches(false);
                    setShowMirror(false);
                    setShowChestOfDrawers(false);
                    setShowRug(false);
                    setShowSingleMattress(false);
                    setShowBedsideTable(false);
                    setShowMicrowaveOven(false);
                    setShowVacuumcleaner(false);
                    setShowTVStand(false);
                    setShowLargeMusicalInstrumentCase(false);
                    setShowOutdoorItems(false);
                    setShowTent(false);
                    setShowLargeRucksack(false);
                    setShowPairOfSkis(false);
                    setShowSnowboard(false);
                    setShowBike(false);
                    setShowBikeBox(false);
                    setShowGolfBag(false);
                    setShowPets(false);
                    setShowSmallPet(false);
                  }}
                >
                  Music speaker (Large)
                </span>
                {showMusicSpeakerLarge && (
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                  </ul>
                )}
              </li>
              <li>
                <Arrow />

                <span
                  onClick={() => {
                    setShowMirror(!showMirror);
                    setShowMusicSpeakerLarge(false);
                    setShowIroningBoard(false);
                    setShowTV30to60inches(false);
                    setShowTVlessthan30inches(false);
                    setShowChildsFoldablePushchair(false);
                    setShowChildParam(false);
                    setShowChildItem(false);
                    setXLBox(false);
                    setShowLuggage(false);
                    setShowLargeBox(false);
                    setShowMediumBox(false);
                    setShowSmallBox(false);
                    setShowBackpack(false);
                    setShowSuitcaseQuantity(false);
                    setShowHandLuggageQuantity(false);
                    setShowBox(false);
                    setShowChildParam(false);
                    setShowChildsFoldablePushchair(false);
                    setShowFoldedwheelchair(false);
                    setShowFoldedwheelchairQuantity(false);
                    setShowTVlessthan30inches(false);
                    setShowTV30to60inches(false);
                    setShowIroningBoard(false);
                    setShowMusicSpeakerLarge(false);
                    setShowChestOfDrawers(false);
                    setShowRug(false);
                    setShowSingleMattress(false);
                    setShowBedsideTable(false);
                    setShowMicrowaveOven(false);
                    setShowVacuumcleaner(false);
                    setShowTVStand(false);
                    setShowLargeMusicalInstrumentCase(false);
                    setShowOutdoorItems(false);
                    setShowTent(false);
                    setShowLargeRucksack(false);
                    setShowPairOfSkis(false);
                    setShowSnowboard(false);
                    setShowBike(false);
                    setShowBikeBox(false);
                    setShowGolfBag(false);
                    setShowPets(false);
                    setShowSmallPet(false);
                  }}
                >
                  Mirror (upto 60x36 inches)
                </span>
                {showMirror && (
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                  </ul>
                )}
              </li>
              <li>
                <Arrow />

                <span
                  onClick={() => {
                    setShowChestOfDrawers(!showChestOfDrawers);
                    setShowMirror(false);
                    setShowMusicSpeakerLarge(false);
                    setShowIroningBoard(false);
                    setShowTV30to60inches(false);
                    setShowTVlessthan30inches(false);
                    setShowChildsFoldablePushchair(false);
                    setShowChildParam(false);
                    setShowChildItem(false);
                    setXLBox(false);
                    setShowLuggage(false);
                    setShowLargeBox(false);
                    setShowMediumBox(false);
                    setShowSmallBox(false);
                    setShowBackpack(false);
                    setShowSuitcaseQuantity(false);
                    setShowHandLuggageQuantity(false);
                    setShowBox(false);
                    setShowChildParam(false);
                    setShowChildsFoldablePushchair(false);
                    setShowFoldedwheelchair(false);
                    setShowFoldedwheelchairQuantity(false);
                    setShowTVlessthan30inches(false);
                    setShowTV30to60inches(false);
                    setShowIroningBoard(false);
                    setShowMusicSpeakerLarge(false);
                    setShowMirror(false);
                    setShowRug(false);
                    setShowSingleMattress(false);
                    setShowBedsideTable(false);
                    setShowMicrowaveOven(false);
                    setShowVacuumcleaner(false);
                    setShowTVStand(false);
                    setShowLargeMusicalInstrumentCase(false);
                    setShowOutdoorItems(false);
                    setShowTent(false);
                    setShowLargeRucksack(false);
                    setShowPairOfSkis(false);
                    setShowSnowboard(false);
                    setShowBike(false);
                    setShowBikeBox(false);
                    setShowGolfBag(false);
                    setShowPets(false);
                    setShowSmallPet(false);
                  }}
                >
                  Chest of drawers
                </span>
                {showChestOfDrawers && (
                  <ul>
                    <li>1</li>
                    <li>2</li>
                  </ul>
                )}
              </li>
              <li>
                <Arrow />

                <span
                  onClick={() => {
                    setShowRug(!showRug);
                    setShowChestOfDrawers(false);
                    setShowMirror(false);
                    setShowMusicSpeakerLarge(false);
                    setShowIroningBoard(false);
                    setShowTV30to60inches(false);
                    setShowTVlessthan30inches(false);
                    setShowChildsFoldablePushchair(false);
                    setShowChildParam(false);
                    setShowChildItem(false);
                    setXLBox(false);
                    setShowLuggage(false);
                    setShowLargeBox(false);
                    setShowMediumBox(false);
                    setShowSmallBox(false);
                    setShowBackpack(false);
                    setShowSuitcaseQuantity(false);
                    setShowHandLuggageQuantity(false);
                    setShowBox(false);
                    setShowChildParam(false);
                    setShowChildsFoldablePushchair(false);
                    setShowFoldedwheelchair(false);
                    setShowFoldedwheelchairQuantity(false);
                    setShowTVlessthan30inches(false);
                    setShowTV30to60inches(false);
                    setShowIroningBoard(false);
                    setShowMusicSpeakerLarge(false);
                    setShowMirror(false);
                    setShowSingleMattress(false);
                    setShowBedsideTable(false);
                    setShowMicrowaveOven(false);
                    setShowVacuumcleaner(false);
                    setShowTVStand(false);
                    setShowLargeMusicalInstrumentCase(false);
                    setShowOutdoorItems(false);
                    setShowTent(false);
                    setShowLargeRucksack(false);
                    setShowPairOfSkis(false);
                    setShowSnowboard(false);
                    setShowBike(false);
                    setShowBikeBox(false);
                    setShowGolfBag(false);
                    setShowPets(false);
                    setShowSmallPet(false);
                  }}
                >
                  Rug (upto 24x84 inches)
                </span>
                {showRug && (
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                  </ul>
                )}
              </li>
              <li>
                <Arrow />

                <span
                  onClick={() => {
                    setShowSingleMattress(!showSingleMattress);
                    setShowRug(false);
                    setShowChestOfDrawers(false);
                    setShowMirror(false);
                    setShowMusicSpeakerLarge(false);
                    setShowIroningBoard(false);
                    setShowTV30to60inches(false);
                    setShowTVlessthan30inches(false);
                    setShowChildsFoldablePushchair(false);
                    setShowChildParam(false);
                    setShowChildItem(false);
                    setXLBox(false);
                    setShowLuggage(false);
                    setShowLargeBox(false);
                    setShowMediumBox(false);
                    setShowSmallBox(false);
                    setShowBackpack(false);
                    setShowSuitcaseQuantity(false);
                    setShowHandLuggageQuantity(false);
                    setShowBox(false);
                    setShowChildParam(false);
                    setShowChildsFoldablePushchair(false);
                    setShowFoldedwheelchair(false);
                    setShowFoldedwheelchairQuantity(false);
                    setShowTVlessthan30inches(false);
                    setShowTV30to60inches(false);
                    setShowIroningBoard(false);
                    setShowMusicSpeakerLarge(false);
                    setShowMirror(false);
                    setShowBedsideTable(false);
                    setShowMicrowaveOven(false);
                    setShowVacuumcleaner(false);
                    setShowTVStand(false);
                    setShowLargeMusicalInstrumentCase(false);
                    setShowOutdoorItems(false);
                    setShowTent(false);
                    setShowLargeRucksack(false);
                    setShowPairOfSkis(false);
                    setShowSnowboard(false);
                    setShowBike(false);
                    setShowBikeBox(false);
                    setShowGolfBag(false);
                    setShowPets(false);
                    setShowSmallPet(false);
                  }}
                >
                  Single Mattress
                </span>
                {showSingleMattress && (
                  <ul>
                    <li>1</li>
                    <li>2</li>
                  </ul>
                )}
              </li>
              <li>
                <Arrow />

                <span
                  onClick={() => {
                    setShowBedsideTable(!showBedsideTable);
                    setShowSingleMattress(false);
                    setShowRug(false);
                    setShowChestOfDrawers(false);
                    setShowMirror(false);
                    setShowMusicSpeakerLarge(false);
                    setShowIroningBoard(false);
                    setShowTV30to60inches(false);
                    setShowTVlessthan30inches(false);
                    setShowChildsFoldablePushchair(false);
                    setShowChildParam(false);
                    setShowChildItem(false);
                    setXLBox(false);
                    setShowLuggage(false);
                    setShowLargeBox(false);
                    setShowMediumBox(false);
                    setShowSmallBox(false);
                    setShowBackpack(false);
                    setShowSuitcaseQuantity(false);
                    setShowHandLuggageQuantity(false);
                    setShowBox(false);
                    setShowChildParam(false);
                    setShowChildsFoldablePushchair(false);
                    setShowFoldedwheelchair(false);
                    setShowFoldedwheelchairQuantity(false);
                    setShowTVlessthan30inches(false);
                    setShowTV30to60inches(false);
                    setShowIroningBoard(false);
                    setShowMusicSpeakerLarge(false);
                    setShowMirror(false);
                    setShowMicrowaveOven(false);
                    setShowVacuumcleaner(false);
                    setShowTVStand(false);
                    setShowLargeMusicalInstrumentCase(false);
                    setShowOutdoorItems(false);
                    setShowTent(false);
                    setShowLargeRucksack(false);
                    setShowPairOfSkis(false);
                    setShowSnowboard(false);
                    setShowBike(false);
                    setShowBikeBox(false);
                    setShowGolfBag(false);
                    setShowPets(false);
                    setShowSmallPet(false);
                  }}
                >
                  Bedside table (45x55cm)
                </span>
                {showBedsideTable && (
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                  </ul>
                )}
              </li>
              <li>
                <Arrow />

                <span
                  onClick={() => {
                    setShowMicrowaveOven(!showMicrowaveOven);
                    setShowBedsideTable(false);
                    setShowSingleMattress(false);
                    setShowRug(false);
                    setShowChestOfDrawers(false);
                    setShowMirror(false);
                    setShowMusicSpeakerLarge(false);
                    setShowIroningBoard(false);
                    setShowTV30to60inches(false);
                    setShowTVlessthan30inches(false);
                    // setShowHouseholditems(false);
                    setShowChildsFoldablePushchair(false);
                    setShowChildParam(false);
                    setShowChildItem(false);
                    setXLBox(false);
                    setShowLuggage(false);
                    setShowLargeBox(false);
                    setShowMediumBox(false);
                    setShowSmallBox(false);
                    setShowBackpack(false);
                    setShowSuitcaseQuantity(false);
                    setShowHandLuggageQuantity(false);
                    setShowBox(false);
                    setShowChildParam(false);
                    setShowChildsFoldablePushchair(false);
                    setShowFoldedwheelchair(false);
                    setShowFoldedwheelchairQuantity(false);
                    setShowTVlessthan30inches(false);
                    setShowTV30to60inches(false);
                    setShowIroningBoard(false);
                    setShowMusicSpeakerLarge(false);
                    setShowMirror(false);
                    setShowVacuumcleaner(false);
                    setShowTVStand(false);
                    setShowLargeMusicalInstrumentCase(false);
                    setShowOutdoorItems(false);
                    setShowTent(false);
                    setShowLargeRucksack(false);
                    setShowPairOfSkis(false);
                    setShowSnowboard(false);
                    setShowBike(false);
                    setShowBikeBox(false);
                    setShowGolfBag(false);
                    setShowPets(false);
                    setShowSmallPet(false);
                  }}
                >
                  Microwave oven
                </span>
                {showMicrowaveOven && (
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                  </ul>
                )}
              </li>
              <li>
                <Arrow />

                <span
                  onClick={() => {
                    setShowVacuumcleaner(!showVacuumcleaner);
                    setShowMicrowaveOven(false);
                    setShowBedsideTable(false);
                    setShowSingleMattress(false);
                    setShowRug(false);
                    setShowChestOfDrawers(false);
                    setShowMirror(false);
                    setShowMusicSpeakerLarge(false);
                    setShowIroningBoard(false);
                    setShowTV30to60inches(false);
                    setShowTVlessthan30inches(false);
                    // setShowHouseholditems(false);
                    setShowChildsFoldablePushchair(false);
                    setShowChildParam(false);
                    setShowChildItem(false);
                    setXLBox(false);
                    setShowLuggage(false);
                    setShowLargeBox(false);
                    setShowMediumBox(false);
                    setShowSmallBox(false);
                    setShowBackpack(false);
                    setShowSuitcaseQuantity(false);
                    setShowHandLuggageQuantity(false);
                    setShowBox(false);
                    setShowChildParam(false);
                    setShowChildsFoldablePushchair(false);
                    setShowFoldedwheelchair(false);
                    setShowFoldedwheelchairQuantity(false);
                    setShowTVlessthan30inches(false);
                    setShowTV30to60inches(false);
                    setShowIroningBoard(false);
                    setShowMusicSpeakerLarge(false);
                    setShowMirror(false);
                    setShowTVStand(false);
                    setShowLargeMusicalInstrumentCase(false);
                    setShowOutdoorItems(false);
                    setShowTent(false);
                    setShowLargeRucksack(false);
                    setShowPairOfSkis(false);
                    setShowSnowboard(false);
                    setShowBike(false);
                    setShowBikeBox(false);
                    setShowGolfBag(false);
                    setShowPets(false);
                    setShowSmallPet(false);
                  }}
                >
                  Vacuum cleaner
                </span>
                {showVacuumcleaner && (
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                  </ul>
                )}
              </li>
              <li>
                <Arrow />

                <span
                  onClick={() => {
                    setShowTVStand(!showTVStand);
                    setShowVacuumcleaner(false);
                    setShowMicrowaveOven(false);
                    setShowBedsideTable(false);
                    setShowSingleMattress(false);
                    setShowRug(false);
                    setShowChestOfDrawers(false);
                    setShowMirror(false);
                    setShowMusicSpeakerLarge(false);
                    setShowIroningBoard(false);
                    setShowTV30to60inches(false);
                    setShowTVlessthan30inches(false);
                    setShowChildsFoldablePushchair(false);
                    setShowChildParam(false);
                    setShowChildItem(false);
                    setXLBox(false);
                    setShowLuggage(false);
                    setShowLargeBox(false);
                    setShowMediumBox(false);
                    setShowSmallBox(false);
                    setShowBackpack(false);
                    setShowSuitcaseQuantity(false);
                    setShowHandLuggageQuantity(false);
                    setShowBox(false);
                    setShowChildParam(false);
                    setShowChildsFoldablePushchair(false);
                    setShowFoldedwheelchair(false);
                    setShowFoldedwheelchairQuantity(false);
                    setShowTVlessthan30inches(false);
                    setShowTV30to60inches(false);
                    setShowIroningBoard(false);
                    setShowMusicSpeakerLarge(false);
                    setShowMirror(false);
                    setShowLargeMusicalInstrumentCase(false);
                    setShowOutdoorItems(false);
                    setShowTent(false);
                    setShowLargeRucksack(false);
                    setShowPairOfSkis(false);
                    setShowSnowboard(false);
                    setShowBike(false);
                    setShowBikeBox(false);
                    setShowGolfBag(false);
                    setShowPets(false);
                    setShowSmallPet(false);
                  }}
                >
                  TV stand
                </span>
                {showTVStand && (
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                  </ul>
                )}
              </li>
              <li>
                <Arrow />

                <span
                  onClick={() => {
                    setShowLargeMusicalInstrumentCase(
                      !showLargeMusicalInstrumentCase
                    );
                    setShowTVStand(false);
                    setShowVacuumcleaner(false);
                    setShowMicrowaveOven(false);
                    setShowBedsideTable(false);
                    setShowSingleMattress(false);
                    setShowRug(false);
                    setShowChestOfDrawers(false);
                    setShowMirror(false);
                    setShowMusicSpeakerLarge(false);
                    setShowIroningBoard(false);
                    setShowTV30to60inches(false);
                    setShowTVlessthan30inches(false);
                    setShowChildsFoldablePushchair(false);
                    setShowChildParam(false);
                    setShowChildItem(false);
                    setXLBox(false);
                    setShowLuggage(false);
                    setShowLargeBox(false);
                    setShowMediumBox(false);
                    setShowSmallBox(false);
                    setShowBackpack(false);
                    setShowSuitcaseQuantity(false);
                    setShowHandLuggageQuantity(false);
                    setShowBox(false);
                    setShowChildParam(false);
                    setShowChildsFoldablePushchair(false);
                    setShowFoldedwheelchair(false);
                    setShowFoldedwheelchairQuantity(false);
                    setShowTVlessthan30inches(false);
                    setShowTV30to60inches(false);
                    setShowIroningBoard(false);
                    setShowMusicSpeakerLarge(false);
                    setShowMirror(false);
                    setShowOutdoorItems(false);
                    setShowTent(false);
                    setShowLargeRucksack(false);
                    setShowPairOfSkis(false);
                    setShowSnowboard(false);
                    setShowBike(false);
                    setShowBikeBox(false);
                    setShowGolfBag(false);
                    setShowPets(false);
                    setShowSmallPet(false);
                  }}
                >
                  Large musical instrument case (upto 60x24 inches)
                </span>
                {showLargeMusicalInstrumentCase && (
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
        <li>
          <Plus />

          <span
            onClick={() => {
              setShowOutdoorItems(!showOutdoorItems);
              setShowLargeMusicalInstrumentCase(false);
              setShowTVStand(false);
              setShowVacuumcleaner(false);
              setShowMicrowaveOven(false);
              setShowBedsideTable(false);
              setShowSingleMattress(false);
              setShowRug(false);
              setShowChestOfDrawers(false);
              setShowMirror(false);
              setShowMusicSpeakerLarge(false);
              setShowIroningBoard(false);
              setShowTV30to60inches(false);
              setShowTVlessthan30inches(false);
              setShowHouseholditems(false);
              setShowChildsFoldablePushchair(false);
              setShowChildParam(false);
              setShowChildItem(false);
              setXLBox(false);
              setShowLuggage(false);
              setShowLargeBox(false);
              setShowMediumBox(false);
              setShowSmallBox(false);
              setShowBackpack(false);
              setShowSuitcaseQuantity(false);
              setShowHandLuggageQuantity(false);
              setShowBox(false);
              setShowChildParam(false);
              setShowChildsFoldablePushchair(false);
              setShowFoldedwheelchair(false);
              setShowFoldedwheelchairQuantity(false);
              setShowTVlessthan30inches(false);
              setShowTV30to60inches(false);
              setShowIroningBoard(false);
              setShowMusicSpeakerLarge(false);
              setShowMirror(false);
              setShowTent(false);
              setShowLargeRucksack(false);
              setShowPairOfSkis(false);
              setShowSnowboard(false);
              setShowBike(false);
              setShowBikeBox(false);
              setShowGolfBag(false);
              setShowPets(false);
              setShowSmallPet(false);
            }}
          >
            Outdoor items
          </span>
          {showOutdoorItems && (
            <ul onClick={(e) => getValue(e)}>
              {" "}
              <li>
                <Arrow />

                <span
                  onClick={() => {
                    setShowTent(!showTent);
                    // setShowOutdoorItems(!showOutdoorItems);
                    setShowLargeMusicalInstrumentCase(false);
                    setShowTVStand(false);
                    setShowVacuumcleaner(false);
                    setShowMicrowaveOven(false);
                    setShowBedsideTable(false);
                    setShowSingleMattress(false);
                    setShowRug(false);
                    setShowChestOfDrawers(false);
                    setShowMirror(false);
                    setShowMusicSpeakerLarge(false);
                    setShowIroningBoard(false);
                    setShowTV30to60inches(false);
                    setShowTVlessthan30inches(false);
                    setShowHouseholditems(false);
                    setShowChildsFoldablePushchair(false);
                    setShowChildParam(false);
                    setShowChildItem(false);
                    setXLBox(false);
                    setShowLuggage(false);
                    setShowLargeBox(false);
                    setShowMediumBox(false);
                    setShowSmallBox(false);
                    setShowBackpack(false);
                    setShowSuitcaseQuantity(false);
                    setShowHandLuggageQuantity(false);
                    setShowBox(false);
                    setShowChildParam(false);
                    setShowChildsFoldablePushchair(false);
                    setShowFoldedwheelchair(false);
                    setShowFoldedwheelchairQuantity(false);
                    setShowTVlessthan30inches(false);
                    setShowTV30to60inches(false);
                    setShowIroningBoard(false);
                    setShowMusicSpeakerLarge(false);
                    setShowMirror(false);
                    setShowLargeRucksack(false);
                    setShowPairOfSkis(false);
                    setShowSnowboard(false);
                    setShowBike(false);
                    setShowBikeBox(false);
                    setShowGolfBag(false);
                    setShowPets(false);
                    setShowSmallPet(false);
                  }}
                >
                  Tent
                </span>
                {showTent && (
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                  </ul>
                )}
              </li>
              <li>
                <Arrow />

                <span
                  onClick={() => {
                    setShowLargeRucksack(!showLargeRucksack);
                    setShowTent(false);
                    // setShowOutdoorItems(!showOutdoorItems);
                    setShowLargeMusicalInstrumentCase(false);
                    setShowTVStand(false);
                    setShowVacuumcleaner(false);
                    setShowMicrowaveOven(false);
                    setShowBedsideTable(false);
                    setShowSingleMattress(false);
                    setShowRug(false);
                    setShowChestOfDrawers(false);
                    setShowMirror(false);
                    setShowMusicSpeakerLarge(false);
                    setShowIroningBoard(false);
                    setShowTV30to60inches(false);
                    setShowTVlessthan30inches(false);
                    setShowHouseholditems(false);
                    setShowChildsFoldablePushchair(false);
                    setShowChildParam(false);
                    setShowChildItem(false);
                    setXLBox(false);
                    setShowLuggage(false);
                    setShowLargeBox(false);
                    setShowMediumBox(false);
                    setShowSmallBox(false);
                    setShowBackpack(false);
                    setShowSuitcaseQuantity(false);
                    setShowHandLuggageQuantity(false);
                    setShowBox(false);
                    setShowChildParam(false);
                    setShowChildsFoldablePushchair(false);
                    setShowFoldedwheelchair(false);
                    setShowFoldedwheelchairQuantity(false);
                    setShowTVlessthan30inches(false);
                    setShowTV30to60inches(false);
                    setShowIroningBoard(false);
                    setShowMusicSpeakerLarge(false);
                    setShowMirror(false);
                    setShowPairOfSkis(false);
                    setShowSnowboard(false);
                    setShowBike(false);
                    setShowBikeBox(false);
                    setShowGolfBag(false);
                    setShowPets(false);
                    setShowSmallPet(false);
                  }}
                >
                  Large Rucksack
                </span>
                {showLargeRucksack && (
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                    <li>13</li>
                  </ul>
                )}
              </li>
              <li>
                <Arrow />

                <span
                  onClick={() => {
                    setShowPairOfSkis(!showPairOfSkis);
                    setShowLargeRucksack(false);
                    setShowTent(false);
                    setShowLargeMusicalInstrumentCase(false);
                    setShowTVStand(false);
                    setShowVacuumcleaner(false);
                    setShowMicrowaveOven(false);
                    setShowBedsideTable(false);
                    setShowSingleMattress(false);
                    setShowRug(false);
                    setShowChestOfDrawers(false);
                    setShowMirror(false);
                    setShowMusicSpeakerLarge(false);
                    setShowIroningBoard(false);
                    setShowTV30to60inches(false);
                    setShowTVlessthan30inches(false);
                    setShowHouseholditems(false);
                    setShowChildsFoldablePushchair(false);
                    setShowChildParam(false);
                    setShowChildItem(false);
                    setXLBox(false);
                    setShowLuggage(false);
                    setShowLargeBox(false);
                    setShowMediumBox(false);
                    setShowSmallBox(false);
                    setShowBackpack(false);
                    setShowSuitcaseQuantity(false);
                    setShowHandLuggageQuantity(false);
                    setShowBox(false);
                    setShowChildParam(false);
                    setShowChildsFoldablePushchair(false);
                    setShowFoldedwheelchair(false);
                    setShowFoldedwheelchairQuantity(false);
                    setShowTVlessthan30inches(false);
                    setShowTV30to60inches(false);
                    setShowIroningBoard(false);
                    setShowMusicSpeakerLarge(false);
                    setShowMirror(false);
                    setShowSnowboard(false);
                    setShowBike(false);
                    setShowBikeBox(false);
                    setShowGolfBag(false);
                    setShowPets(false);
                    setShowSmallPet(false);
                  }}
                >
                  Pair of skis
                </span>
                {showPairOfSkis && (
                  <ul>
                    <li>1</li>
                    <li>2</li>
                  </ul>
                )}
              </li>
              <li>
                <Arrow />

                <span
                  onClick={() => {
                    setShowSnowboard(!showSnowboard);
                    setShowPairOfSkis(false);
                    setShowLargeRucksack(false);
                    setShowTent(false);
                    setShowLargeMusicalInstrumentCase(false);
                    setShowTVStand(false);
                    setShowVacuumcleaner(false);
                    setShowMicrowaveOven(false);
                    setShowBedsideTable(false);
                    setShowSingleMattress(false);
                    setShowRug(false);
                    setShowChestOfDrawers(false);
                    setShowMirror(false);
                    setShowMusicSpeakerLarge(false);
                    setShowIroningBoard(false);
                    setShowTV30to60inches(false);
                    setShowTVlessthan30inches(false);
                    setShowHouseholditems(false);
                    setShowChildsFoldablePushchair(false);
                    setShowChildParam(false);
                    setShowChildItem(false);
                    setXLBox(false);
                    setShowLuggage(false);
                    setShowLargeBox(false);
                    setShowMediumBox(false);
                    setShowSmallBox(false);
                    setShowBackpack(false);
                    setShowSuitcaseQuantity(false);
                    setShowHandLuggageQuantity(false);
                    setShowBox(false);
                    setShowChildParam(false);
                    setShowChildsFoldablePushchair(false);
                    setShowFoldedwheelchair(false);
                    setShowFoldedwheelchairQuantity(false);
                    setShowTVlessthan30inches(false);
                    setShowTV30to60inches(false);
                    setShowIroningBoard(false);
                    setShowMusicSpeakerLarge(false);
                    setShowMirror(false);
                    setShowBike(false);
                    setShowBikeBox(false);
                    setShowGolfBag(false);
                    setShowPets(false);
                    setShowSmallPet(false);
                  }}
                >
                  Snowboard
                </span>
                {showSnowboard && (
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                  </ul>
                )}
              </li>
              <li>
                <Arrow />

                <span
                  onClick={() => {
                    setShowBike(!showBike);
                    setShowSnowboard(false);
                    setShowPairOfSkis(false);
                    setShowLargeRucksack(false);
                    setShowTent(false);
                    setShowLargeMusicalInstrumentCase(false);
                    setShowTVStand(false);
                    setShowVacuumcleaner(false);
                    setShowMicrowaveOven(false);
                    setShowBedsideTable(false);
                    setShowSingleMattress(false);
                    setShowRug(false);
                    setShowChestOfDrawers(false);
                    setShowMirror(false);
                    setShowMusicSpeakerLarge(false);
                    setShowIroningBoard(false);
                    setShowTV30to60inches(false);
                    setShowTVlessthan30inches(false);
                    setShowHouseholditems(false);
                    setShowChildsFoldablePushchair(false);
                    setShowChildParam(false);
                    setShowChildItem(false);
                    setXLBox(false);
                    setShowLuggage(false);
                    setShowLargeBox(false);
                    setShowMediumBox(false);
                    setShowSmallBox(false);
                    setShowBackpack(false);
                    setShowSuitcaseQuantity(false);
                    setShowHandLuggageQuantity(false);
                    setShowBox(false);
                    setShowChildParam(false);
                    setShowChildsFoldablePushchair(false);
                    setShowFoldedwheelchair(false);
                    setShowFoldedwheelchairQuantity(false);
                    setShowTVlessthan30inches(false);
                    setShowTV30to60inches(false);
                    setShowIroningBoard(false);
                    setShowMusicSpeakerLarge(false);
                    setShowMirror(false);
                    setShowBikeBox(false);
                    setShowGolfBag(false);
                    setShowPets(false);
                    setShowSmallPet(false);
                  }}
                >
                  Bike
                </span>
                {showBike && (
                  <ul>
                    <li>1</li>
                  </ul>
                )}
              </li>
              <li>
                <Arrow />

                <span
                  onClick={() => {
                    setShowBikeBox(!showBikeBox);
                    setShowBike(false);
                    setShowSnowboard(false);
                    setShowPairOfSkis(false);
                    setShowLargeRucksack(false);
                    setShowTent(false);
                    setShowLargeMusicalInstrumentCase(false);
                    setShowTVStand(false);
                    setShowVacuumcleaner(false);
                    setShowMicrowaveOven(false);
                    setShowBedsideTable(false);
                    setShowSingleMattress(false);
                    setShowRug(false);
                    setShowChestOfDrawers(false);
                    setShowMirror(false);
                    setShowMusicSpeakerLarge(false);
                    setShowIroningBoard(false);
                    setShowTV30to60inches(false);
                    setShowTVlessthan30inches(false);
                    setShowHouseholditems(false);
                    setShowChildsFoldablePushchair(false);
                    setShowChildParam(false);
                    setShowChildItem(false);
                    setXLBox(false);
                    setShowLuggage(false);
                    setShowLargeBox(false);
                    setShowMediumBox(false);
                    setShowSmallBox(false);
                    setShowBackpack(false);
                    setShowSuitcaseQuantity(false);
                    setShowHandLuggageQuantity(false);
                    setShowBox(false);
                    setShowChildParam(false);
                    setShowChildsFoldablePushchair(false);
                    setShowFoldedwheelchair(false);
                    setShowFoldedwheelchairQuantity(false);
                    setShowTVlessthan30inches(false);
                    setShowTV30to60inches(false);
                    setShowIroningBoard(false);
                    setShowMusicSpeakerLarge(false);
                    setShowMirror(false);
                    setShowGolfBag(false);
                    setShowPets(false);
                    setShowSmallPet(false);
                  }}
                >
                  Bike box
                </span>
                {showBikeBox && (
                  <ul>
                    <li>1</li>
                  </ul>
                )}
              </li>
              <li>
                <Arrow />

                <span
                  onClick={() => {
                    setShowGolfBag(!showGolfBag);
                    setShowBikeBox(false);
                    setShowBike(false);
                    setShowSnowboard(false);
                    setShowPairOfSkis(false);
                    setShowLargeRucksack(false);
                    setShowTent(false);
                    setShowLargeMusicalInstrumentCase(false);
                    setShowTVStand(false);
                    setShowVacuumcleaner(false);
                    setShowMicrowaveOven(false);
                    setShowBedsideTable(false);
                    setShowSingleMattress(false);
                    setShowRug(false);
                    setShowChestOfDrawers(false);
                    setShowMirror(false);
                    setShowMusicSpeakerLarge(false);
                    setShowIroningBoard(false);
                    setShowTV30to60inches(false);
                    setShowTVlessthan30inches(false);
                    setShowHouseholditems(false);
                    setShowChildsFoldablePushchair(false);
                    setShowChildParam(false);
                    setShowChildItem(false);
                    setXLBox(false);
                    setShowLuggage(false);
                    setShowLargeBox(false);
                    setShowMediumBox(false);
                    setShowSmallBox(false);
                    setShowBackpack(false);
                    setShowSuitcaseQuantity(false);
                    setShowHandLuggageQuantity(false);
                    setShowBox(false);
                    setShowChildParam(false);
                    setShowChildsFoldablePushchair(false);
                    setShowFoldedwheelchair(false);
                    setShowFoldedwheelchairQuantity(false);
                    setShowTVlessthan30inches(false);
                    setShowTV30to60inches(false);
                    setShowIroningBoard(false);
                    setShowMusicSpeakerLarge(false);
                    setShowMirror(false);
                    setShowPets(false);
                    setShowSmallPet(false);
                  }}
                >
                  Golf bag
                </span>
                {showGolfBag && (
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
        <li>
          <Plus />

          <span
            onClick={() => {
              setShowPets(!showPets);
              setShowGolfBag(false);
              setShowBikeBox(false);
              setShowBike(false);
              setShowSnowboard(false);
              setShowPairOfSkis(false);
              setShowLargeRucksack(false);
              setShowTent(false);
              setShowOutdoorItems(false);
              setShowLargeMusicalInstrumentCase(false);
              setShowTVStand(false);
              setShowVacuumcleaner(false);
              setShowMicrowaveOven(false);
              setShowBedsideTable(false);
              setShowSingleMattress(false);
              setShowRug(false);
              setShowChestOfDrawers(false);
              setShowMirror(false);
              setShowMusicSpeakerLarge(false);
              setShowIroningBoard(false);
              setShowTV30to60inches(false);
              setShowTVlessthan30inches(false);
              setShowHouseholditems(false);
              setShowChildsFoldablePushchair(false);
              setShowChildParam(false);
              setShowChildItem(false);
              setXLBox(false);
              setShowLuggage(false);
              setShowLargeBox(false);
              setShowMediumBox(false);
              setShowSmallBox(false);
              setShowBackpack(false);
              setShowSuitcaseQuantity(false);
              setShowHandLuggageQuantity(false);
              setShowBox(false);
              setShowChildParam(false);
              setShowChildsFoldablePushchair(false);
              setShowFoldedwheelchair(false);
              setShowFoldedwheelchairQuantity(false);
              setShowTVlessthan30inches(false);
              setShowTV30to60inches(false);
              setShowIroningBoard(false);
              setShowMusicSpeakerLarge(false);
              setShowMirror(false);
              setShowSmallPet(false);
            }}
          >
            Pets
          </span>
          {showPets && (
            <ul onClick={(e) => getValue(e)}>
              {" "}
              <li data-entity="smalldog">
                <Arrow />

                <span
                  onClick={() => {
                    setShowSmallPet(!showSmallPet);
                    // setShowPets(false);
                    setShowGolfBag(false);
                    setShowBikeBox(false);
                    setShowBike(false);
                    setShowSnowboard(false);
                    setShowPairOfSkis(false);
                    setShowLargeRucksack(false);
                    setShowTent(false);
                    setShowOutdoorItems(false);
                    setShowLargeMusicalInstrumentCase(false);
                    setShowTVStand(false);
                    setShowVacuumcleaner(false);
                    setShowMicrowaveOven(false);
                    setShowBedsideTable(false);
                    setShowSingleMattress(false);
                    setShowRug(false);
                    setShowChestOfDrawers(false);
                    setShowMirror(false);
                    setShowMusicSpeakerLarge(false);
                    setShowIroningBoard(false);
                    setShowTV30to60inches(false);
                    setShowTVlessthan30inches(false);
                    setShowHouseholditems(false);
                    setShowChildsFoldablePushchair(false);
                    setShowChildParam(false);
                    setShowChildItem(false);
                    setXLBox(false);
                    setShowLuggage(false);
                    setShowLargeBox(false);
                    setShowMediumBox(false);
                    setShowSmallBox(false);
                    setShowBackpack(false);
                    setShowSuitcaseQuantity(false);
                    setShowHandLuggageQuantity(false);
                    setShowBox(false);
                    setShowChildParam(false);
                    setShowChildsFoldablePushchair(false);
                    setShowFoldedwheelchair(false);
                    setShowFoldedwheelchairQuantity(false);
                    setShowTVlessthan30inches(false);
                    setShowTV30to60inches(false);
                    setShowIroningBoard(false);
                    setShowMusicSpeakerLarge(false);
                    setShowMirror(false);
                  }}
                >
                  Small pet (in cage)
                </span>
                {showSmallPet && (
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                  </ul>
                )}
              </li>
              <li>
                <Arrow />

                <span
                  onClick={() => {
                    setShowLargeDog(!showLargeDog);
                    setShowSmallPet(false);
                    // setShowPets(false);
                    setShowGolfBag(false);
                    setShowBikeBox(false);
                    setShowBike(false);
                    setShowSnowboard(false);
                    setShowPairOfSkis(false);
                    setShowLargeRucksack(false);
                    setShowTent(false);
                    setShowOutdoorItems(false);
                    setShowLargeMusicalInstrumentCase(false);
                    setShowTVStand(false);
                    setShowVacuumcleaner(false);
                    setShowMicrowaveOven(false);
                    setShowBedsideTable(false);
                    setShowSingleMattress(false);
                    setShowRug(false);
                    setShowChestOfDrawers(false);
                    setShowMirror(false);
                    setShowMusicSpeakerLarge(false);
                    setShowIroningBoard(false);
                    setShowTV30to60inches(false);
                    setShowTVlessthan30inches(false);
                    setShowHouseholditems(false);
                    setShowChildsFoldablePushchair(false);
                    setShowChildParam(false);
                    setShowChildItem(false);
                    setXLBox(false);
                    setShowLuggage(false);
                    setShowLargeBox(false);
                    setShowMediumBox(false);
                    setShowSmallBox(false);
                    setShowBackpack(false);
                    setShowSuitcaseQuantity(false);
                    setShowHandLuggageQuantity(false);
                    setShowBox(false);
                    setShowChildParam(false);
                    setShowChildsFoldablePushchair(false);
                    setShowFoldedwheelchair(false);
                    setShowFoldedwheelchairQuantity(false);
                    setShowTVlessthan30inches(false);
                    setShowTV30to60inches(false);
                    setShowIroningBoard(false);
                    setShowMusicSpeakerLarge(false);
                    setShowMirror(false);
                  }}
                >
                  Large dog
                </span>
                {showLargeDog && (
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
        {/* Add Here */}
      </ul>
    </div>
  );
}

export default DataList;
