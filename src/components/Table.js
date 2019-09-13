import React from "react";

const Table = () => (
	<table class="ui celled table">
	  <thead class="">
	    <tr class="">
				<th class=""></th>
	      <th class="">Win</th>
	      <th class="">Draw</th>
	      <th class="">Lose</th>
	    </tr>
	  </thead>
	  <tbody class="">
	    <tr class="">
	      <td class="">Home</td>
	      <td class="">0</td>
	      <td class="">-2</td>
				<td class="">-3</td>
	    </tr>
	    <tr class="">
				<td class="">Away</td>
				<td class="">2</td>
				<td class="">0</td>
				<td class="">-1</td>
	    </tr>
	  </tbody>
	</table>
);

export default Table;
