// import "bootstrap/dist/css/bootstrap.min.css";
// import React, { Component } from "react";
// import NavbarComponent from "./NavbarComponent";
// import Formulir from "./Formulir";
// import Tabel from "./Tabel";


// export default class index extends Component {
  
//   const handleEditClick = (row) => {
//     setData({ ...data, editingRow: row });}

//   {data.editingRow && <Formulir initialValues={data.editingRow} onSubmit={handleUpdate} />}

//   const handleUpdate = (updatedData) => {
//     const updatedRows = data.map((row) => row.id === updatedData.id ? updatedData : row);
//     setData(updatedRows);
//     setData({ ...data, editingRow: null }); // Close the edit form
//   };

//   const handleDeleteClick = (rowId) => {
//     setData(data.filter((row) => row.id !== rowId));
//   };
  
//   {data.map((row, index) => (
//     <tr key={row.id}>
//       {/* ... other columns */}
//       <td>
//         <button className="btn btn-warning" onClick={() => handleEditClick(row)}>Edit</button>
//         <button className="btn btn-danger mr-1" onClick={() => handleDeleteClick(row.id)}>Hapus</button>
//       </td>
//     </tr>
//   ))}
  

//   render() {
//     return (
//       <div>
//         {/* <NavbarComponent /> */}
//         {/* <Formulir /> */}
//         <Tabel />
        
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import NavbarComponent from "./NavbarComponent";
import Formulir from "./Formulir";
import Tabel from "./Tabel";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        // ... your data here
      ],
      editingRow: null,
    };
  }

  handleEditClick = (row) => {
    this.setState({ editingRow: row });
  };

  handleUpdate = (updatedData) => {
    const updatedRows = this.state.data.map((row) =>
      row.id === updatedData.id ? updatedData : row
    );
    this.setState({ data: updatedRows, editingRow: null });
  };  

  handleDeleteClick = (rowId) => {
    this.setState({
      data: this.state.data.filter((row) => row.id !== rowId),
    });
  };

  render() {
    return (
      <div>
        {/* <NavbarComponent /> Uncomment if needed */}
        {this.state.editingRow && (
          <Formulir initialValues={this.state.editingRow} onSubmit={this.handleUpdate} />
        )}
        <Tabel
          data={this.state.data}
          onEditClick={this.handleEditClick}
          onDeleteClick={this.handleDeleteClick}
        />
      </div>
    );
  }
}
