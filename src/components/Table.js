import React from "react";

const Table = () => (
	<table className="ui celled table">
	  <thead className="">
	    <tr className="">
				<th className=""></th>
	      <th className="">Win</th>
	      <th className="">Draw</th>
	      <th className="">Lose</th>
	    </tr>
	  </thead>
	  <tbody className="">
	    <tr className="">
	      <td className="">Home</td>
	      <td className="">0</td>
	      <td className="">-2</td>
				<td className="">-3</td>
	    </tr>
	    <tr className="">
				<td className="">Away</td>
				<td className="">2</td>
				<td className="">0</td>
				<td className="">-1</td>
	    </tr>
	  </tbody>
	</table>
);

export default Table;
