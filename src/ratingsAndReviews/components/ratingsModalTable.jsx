import React from 'react';

function RatingsModalTable(props) {
  const { handleSizeChange, handleWidthChange, handleComfortChange,
    handleQualityChange, handleLengthChange, handleFitChange } = props;
  return (
    <div>
      <table id="radioTable2">
        <tr id="rar_rowName">
          <th id="rar_radioTableHeader"> </th>
          <th id="rar_radioTableHeader1">1 </th>
          <th id="rar_radioTableHeader">2 </th>
          <th id="rar_radioTableHeader">3 </th>
          <th id="rar_radioTableHeader">4 </th>
          <th id="rar_radioTableHeader">5 </th>
        </tr>
        <tr id="rar_radioTableRow">
          <td>Size</td>
          <td id="rar_eachColumn">
            <input type="radio" id="radioTableSelector" name="rar_row1" value="1.000" onChange={handleSizeChange} />
            <p>A size too small</p>
          </td>
          <td id="rar_eachColumn">
            <input type="radio" id="radioTableSelector" name="rar_row1" value="2.000" onChange={handleSizeChange} />
            <p>1/2 a size too small</p>
          </td>
          <td id="rar_eachColumn">
            <input type="radio" id="radioTableSelector" name="rar_row1" value="3.000" onChange={handleSizeChange} />
            <p>Perfect</p>
          </td>
          <td id="rar_eachColumn">
            <input type="radio" id="radioTableSelector" name="rar_row1" value="4.000" onChange={handleSizeChange} />
            <p>1/2 a size too big</p>
          </td>
          <td id="rar_eachColumn">
            <input type="radio" id="radioTableSelector" name="rar_row1" value="5.000" onChange={handleSizeChange} />
            <p>A size too wide</p>
          </td>
        </tr>
        <tr id="rar_radioTableRow">
          <td>Width</td>
          <td id="rar_eachColumn">
            <input type="radio" id="radioTableSelector" name="rar_row2" value="1.000" onChange={handleWidthChange} />
            <p>Too narrow</p>
          </td>
          <td id="rar_eachColumn">
            <input type="radio" id="radioTableSelector" name="rar_row2" value="2.000" onChange={handleWidthChange} />
            <p>Slightly narrow</p>
          </td>
          <td id="rar_eachColumn">
            <input type="radio" id="radioTableSelector" name="rar_row2" value="3.000" onChange={handleWidthChange} />
            <p>Perfect</p>
          </td>
          <td id="rar_eachColumn">
            <input type="radio" id="radioTableSelector" name="rar_row2" value="4.000" onChange={handleWidthChange} />
            <p>Slightly wide</p>
          </td>
          <td id="rar_eachColumn">
            <input type="radio" id="radioTableSelector" name="rar_row2" value="5.000" onChange={handleWidthChange} />
            <p>Too wide</p>
          </td>
        </tr>
        <tr id="rar_radioTableRow">
          <td>Comfort</td>
          <td>
            <input type="radio" id="radioTableSelector" name="rar_row3" value="1.000" onChange={handleComfortChange} />
            <p>Uncomfortable</p>
          </td>
          <td>
            <input type="radio" id="radioTableSelector" name="rar_row3" value="2.000" onChange={handleComfortChange} />
            <p>Slightly uncomfortable</p>
          </td>
          <td>
            <input type="radio" id="radioTableSelector" name="rar_row3" value="3.000" onChange={handleComfortChange} />
            <p>Ok</p>
          </td>
          <td>
            <input type="radio" id="radioTableSelector" name="rar_row3" value="4.000" onChange={handleComfortChange} />
            <p>Comfortable</p>
          </td>
          <td>
            <input type="radio" id="radioTableSelector" name="rar_row3" value="5.000" onChange={handleComfortChange} />
            <p>Perfect</p>
          </td>
        </tr>
        <tr id="rar_radioTableRow">
          <td>Quality</td>
          <td>
            <input type="radio" id="radioTableSelector" name="rar_row4" value="1.000" onChange={handleQualityChange} />
            <p>Poor</p>
          </td>
          <td>
            <input type="radio" id="radioTableSelector" name="rar_row4" value="2.000" onChange={handleQualityChange} />
            <p>Below average</p>
          </td>
          <td>
            <input type="radio" id="radioTableSelector" name="rar_row4" value="3.000" onChange={handleQualityChange} />
            <p>What I expected</p>
          </td>
          <td>
            <input type="radio" id="radioTableSelector" name="rar_row4" value="4.000" onChange={handleQualityChange} />
            <p>Pretty great</p>
          </td>
          <td>
            <input type="radio" id="radioTableSelector" name="rar_row4" value="5.000" onChange={handleQualityChange} />
            <p>Perfect</p>
          </td>
        </tr>
        <tr id="rar_radioTableRow">
          <td>Length</td>
          <td>
            <input type="radio" id="radioTableSelector" name="rar_row5" value="1.000" onChange={handleLengthChange} />
            <p>Runs short</p>
          </td>
          <td>
            <input type="radio" id="radioTableSelector" name="rar_row5" value="2.000" onChange={handleLengthChange} />
            <p>Runs slightly short</p>
          </td>
          <td>
            <input type="radio" id="radioTableSelector" name="rar_row5" value="3.000" onChange={handleLengthChange} />
            <p>Perfect</p>
          </td>
          <td>
            <input type="radio" id="radioTableSelector" name="rar_row5" value="4.000" onChange={handleLengthChange} />
            <p>Runs slightly long</p>
          </td>
          <td>
            <input type="radio" id="radioTableSelector" name="rar_row5" value="5.000" onChange={handleLengthChange} />
            <p>Runs long</p>
          </td>
        </tr>
        <tr id="rar_radioTableRow6">
          <td>Fit</td>
          <td>
            <input type="radio" id="radioTableSelector" name="rar_row6" value="1.000" onChange={handleFitChange} />
            <p>Runs tight</p>
          </td>
          <td id="rar_td_header">
            <input type="radio" id="radioTableSelector" name="rar_row6" value="2.000" onChange={handleFitChange} />
            <p>Runs slightly tight</p>
          </td>
          <td id="rar_td_header">
            <input type="radio" id="radioTableSelector" name="rar_row6" value="3.000" onChange={handleFitChange} />
            <p>Perfect</p>
          </td>
          <td id="rar_td_header">
            <input type="radio" id="radioTableSelector" name="rar_row6" value="4.000" onChange={handleFitChange} />
            <p>Runs slightly long</p>
          </td>
          <td id="rar_td_header">
            <input type="radio" id="radioTableSelector" name="rar_row6" value="5.000" onChange={handleFitChange} />
            <p>Runs long</p>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default RatingsModalTable;
